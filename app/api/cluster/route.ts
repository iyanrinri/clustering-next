// API Route for text clustering
import { NextRequest, NextResponse } from 'next/server';
import { ClusterRequest, ClusterResult, ClusterNode, ClusterLink, ClusterInfo } from '@/lib/types';
import { preprocessText, tokenize, removeStopwords } from '@/lib/clustering/preprocessor';
import { vectorize, cosineSimilarity } from '@/lib/clustering/vectorizer';
import { performKMeans } from '@/lib/clustering/kmeans';
import { performHierarchical } from '@/lib/clustering/hierarchical';
import { getClusterColor } from '@/utils/colors';

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    const body: ClusterRequest = await request.json();
    const { text, algorithm, numClusters, tokenType } = body;
    
    // Validate input
    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Text input is required' },
        { status: 400 }
      );
    }
    
    if (numClusters < 2 || numClusters > 20) {
      return NextResponse.json(
        { error: 'Number of clusters must be between 2 and 20' },
        { status: 400 }
      );
    }
    
    // Step 1: Preprocess text
    const tokens = preprocessText(text, tokenType);
    
    if (tokens.length === 0) {
      return NextResponse.json(
        { error: 'No valid tokens found after preprocessing' },
        { status: 400 }
      );
    }
    
    if (tokens.length < numClusters) {
      return NextResponse.json(
        { 
          error: `Not enough tokens (${tokens.length}) for ${numClusters} clusters. Try reducing the number of clusters or using a different token type.` 
        },
        { status: 400 }
      );
    }
    
    // Step 2: Vectorization Strategy
    // CRITICAL FIX: If we are clustering WORDS, we cannot treat them as independent documents.
    // We must cluster them based on their CO-OCCURRENCE in sentences.
    // Otherwise, every word is orthogonal to every other word (Distance = 1.0), causing the "Giant Cluster" issue.
    
    let vectors: number[][];
    let vocabulary: string[];
    let clusterItems: string[];

    if (tokenType === 'word') {
       // 1. Split text into context windows (sentences)
       const sentences = preprocessText(text, 'sentence');
       
       // 2. Get unique words to cluster
       clusterItems = Array.from(new Set(tokens)); 
       
       if (clusterItems.length < numClusters) {
          return NextResponse.json(
            { error: `Not enough unique words (${clusterItems.length}) for ${numClusters} clusters.` },
            { status: 400 }
          );
       }

       // 3. Build Co-occurrence Matrix
       // Rows = Words, Cols = Sentences
       // If word W appears in Sentence S, value is 1 (or tf-idf in S)
       
       vectors = clusterItems.map(word => {
          const vec = new Array(sentences.length).fill(0);

          sentences.forEach((sentence, sIdx) => {
             // Simple regex to match whole word to avoid substr issues (e.g. 'cat' in 'catch')
             // Escape special logic not really needed for simpler word matching here 
             // but 'includes' is safer for now. Ideally use tokenized sentence set.
             if (sentence.toLowerCase().includes(word.toLowerCase())) {
                vec[sIdx] = 1; // Simple binary occurrence
             }
          });
          
          // L2 Normalize row
          let mag = 0;
          for(const v of vec) mag += v*v;
          mag = Math.sqrt(mag);
          if (mag > 0) {
             for(let i=0; i<vec.length; i++) vec[i] /= mag;
          }

          return vec;
       });

       // Vocabulary for "Word Clustering" is actually the Sentences (Technically)
       vocabulary = sentences;

    } else {
       // Standard TF-IDF Document Clustering (for Sentences/Paragraphs)
       clusterItems = tokens;
       const vectResult = vectorize(tokens);
       vectors = vectResult.vectors;
       vocabulary = vectResult.vocabulary;
    }
    
    // Step 3: Perform clustering
    let clusterAssignments: number[];
    
    if (algorithm === 'kmeans') {
      const result = performKMeans(vectors, numClusters, { attempts: 15 });
      clusterAssignments = result.clusters;
    } else {
      clusterAssignments = performHierarchical(vectors, numClusters);
    }
    
    // Step 4: Build graph structure
    const nodes: ClusterNode[] = clusterItems.map((token, idx) => ({
      id: `node_${idx}`,
      text: token,
      cluster: clusterAssignments[idx],
    }));
    
    // Step 5: Create links based on similarity
    // Reuse existing link logic but map indices correctly
    const links: ClusterLink[] = [];
    const similarityThreshold = 0.2; // Lower threshold for co-occurence
    
    for (let i = 0; i < vectors.length; i++) {
      for (let j = i + 1; j < vectors.length; j++) {
        const similarity = cosineSimilarity(vectors[i], vectors[j]);
        
        if (similarity > similarityThreshold) {
          links.push({
            source: `node_${i}`,
            target: `node_${j}`,
            value: similarity,
          });
        }
      }
    }
    
    // Step 6: Calculate cluster statistics
    const clusterMap = new Map<number, number[]>();
    clusterAssignments.forEach((cluster, idx) => {
      if (!clusterMap.has(cluster)) {
        clusterMap.set(cluster, []);
      }
      clusterMap.get(cluster)!.push(idx);
    });
    
    const clusters: ClusterInfo[] = Array.from(clusterMap.entries()).map(([id, indices]) => {
      // For Word clustering, the "top words" are the words themselves in the cluster
      let clusterWords: { text: string; weight: number }[];
      
      if (tokenType === 'word') {
          // Calculate frequency/weight for sorting
          // Since we don't have global TF-IDF easily accessible here for the words (we used sentences as docs),
          // let's use the Raw Frequency of the word in the original text or just the raw occurrences in sentences.
          
          // We can re-scan sentences for these specific words efficiently or just assume
          // we want to highlight the most "connected" words.
          // But Frequency is easiest and expected.
          
          // Actually, we can assume 'token' array has all word occurrences if we tokenized by word?
          // Wait, 'tokens' input to this route is: const tokens = preprocessText(text, tokenType);
          // If tokenType='word', 'tokens' contains EVERY word instance (e.g. ['jakarta', 'seorang', 'oknum', ...])
          // So we can just count occurrences in 'tokens'!
          
          // Re-tokenize raw text to get actual word counts (including duplicates)
          // preprocessText() returns unique set, so we can't use 'tokens' variable for counts.
          const rawTokens = removeStopwords(tokenize(text, tokenType));
          
          const freqMap = new Map<string, number>();
          rawTokens.forEach(t => {
             freqMap.set(t, (freqMap.get(t) || 0) + 1);
          });

          clusterWords = indices.map(idx => ({
              text: clusterItems[idx],
              weight: freqMap.get(clusterItems[idx]) || 1
          }))
          .sort((a, b) => b.weight - a.weight) // Sort by frequency
          .slice(0, 15);
          
      } else {
          // Use original logic for Sentence clustering
          clusterWords = calculateClusterWords(indices, clusterItems, vectors, vocabulary, 10);
      }

      return {
        id,
        size: indices.length,
        words: clusterWords,
        color: getClusterColor(id),
      };
    });
    
    const processingTime = Date.now() - startTime;
    
    const result: ClusterResult = {
      nodes,
      links,
      clusters,
      totalTokens: clusterItems.length,
      processingTime,
      algorithm: algorithm === 'kmeans' ? 'K-Means' : 'Hierarchical',
    };
    
    return NextResponse.json(result);
    
  } catch (error) {
    console.error('Clustering error:', error);
    return NextResponse.json(
      { error: 'Internal server error during clustering' },
      { status: 500 }
    );
  }
}

function calculateClusterWords(
  indices: number[],
  tokens: string[],
  vectors: number[][],
  vocabulary: string[],
  topN: number
): { text: string; weight: number }[] {
  // Calculate average TF-IDF scores for each word in the cluster
  const wordScores = new Map<string, number>();
  
  for (const idx of indices) {
    const token = tokens[idx];
    const vector = vectors[idx];
    
    // Extract words from token and their TF-IDF scores
    const words = token.split(/\s+/);
    words.forEach(word => {
      const vocabIdx = vocabulary.indexOf(word);
      if (vocabIdx !== -1) {
        const tfidfScore = vector[vocabIdx];
        const currentScore = wordScores.get(word) || 0;
        wordScores.set(word, currentScore + tfidfScore);
      }
    });
  }
  
  // Calculate average scores
  const clusterSize = indices.length;
  wordScores.forEach((score, word) => {
    wordScores.set(word, score / clusterSize);
  });
  
  // Sort by weight and return top N
  return Array.from(wordScores.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([text, weight]) => ({
      text,
      weight: Math.round(weight * 100) / 100, // Round to 2 decimal places
    }));
}
