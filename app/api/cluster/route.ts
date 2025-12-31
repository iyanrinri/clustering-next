// API Route for text clustering
import { NextRequest, NextResponse } from 'next/server';
import { ClusterRequest, ClusterResult, ClusterNode, ClusterLink, ClusterInfo } from '@/lib/types';
import { preprocessText } from '@/lib/clustering/preprocessor';
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
    
    // Step 2: Vectorize tokens
    const { vectors, vocabulary } = vectorize(tokens);
    
    // Step 3: Perform clustering
    let clusterAssignments: number[];
    
    if (algorithm === 'kmeans') {
      const result = performKMeans(vectors, numClusters);
      clusterAssignments = result.clusters;
    } else {
      clusterAssignments = performHierarchical(vectors, numClusters);
    }
    
    // Step 4: Build graph structure
    const nodes: ClusterNode[] = tokens.map((token, idx) => ({
      id: `node_${idx}`,
      text: token,
      cluster: clusterAssignments[idx],
    }));
    
    // Step 5: Create links based on similarity
    const links: ClusterLink[] = [];
    const similarityThreshold = 0.3;
    
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
    
    // Step 6: Calculate cluster statistics with word weights
    const clusterMap = new Map<number, number[]>();
    clusterAssignments.forEach((cluster, idx) => {
      if (!clusterMap.has(cluster)) {
        clusterMap.set(cluster, []);
      }
      clusterMap.get(cluster)!.push(idx);
    });
    
    const clusters: ClusterInfo[] = Array.from(clusterMap.entries()).map(([id, indices]) => {
      // Calculate word weights for this cluster based on TF-IDF scores
      const clusterWords = calculateClusterWords(indices, tokens, vectors, vocabulary, 10);
      
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
      totalTokens: tokens.length,
      processingTime,
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
