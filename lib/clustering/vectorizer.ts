// TF-IDF Vectorization implementation
import { VectorData } from '../types';

interface TermFrequency {
  [term: string]: number;
}

interface DocumentFrequency {
  [term: string]: number;
}

export function calculateTF(document: string): TermFrequency {
  const words = document.split(/\s+/);
  const tf: TermFrequency = {};
  const totalWords = words.length;
  
  for (const word of words) {
    tf[word] = (tf[word] || 0) + 1;
  }
  
  // Normalize by document length
  for (const word in tf) {
    tf[word] = tf[word] / totalWords;
  }
  
  return tf;
}

export function calculateIDF(documents: string[]): DocumentFrequency {
  const df: DocumentFrequency = {};
  const numDocuments = documents.length;
  
  for (const doc of documents) {
    const uniqueWords = new Set(doc.split(/\s+/));
    for (const word of uniqueWords) {
      df[word] = (df[word] || 0) + 1;
    }
  }
  
  const idf: DocumentFrequency = {};
  for (const word in df) {
    idf[word] = Math.log(numDocuments / df[word]);
  }
  
  return idf;
}

export function vectorize(tokens: string[]): VectorData {
  const numDocs = tokens.length;
  
  if (numDocs === 0) {
    return { tokens: [], vectors: [], vocabulary: [] };
  }
  
  // Calculate IDF
  const idf = calculateIDF(tokens);
  const vocabulary = Object.keys(idf).sort();
  const vocabIndex = new Map(vocabulary.map((word, idx) => [word, idx]));
  
  // Calculate TF-IDF vectors
  const vectors: number[][] = [];
  
  for (const token of tokens) {
    const tf = calculateTF(token);
    const vector = new Array(vocabulary.length).fill(0);
    
    for (const word in tf) {
      const idx = vocabIndex.get(word);
      if (idx !== undefined) {
        vector[idx] = tf[word] * idf[word];
      }
    }
    
    // L2 Normalize the vector to unit length
    // This allows Euclidean distance to approximate Cosine similarity behavior
    let magnitude = 0;
    for (const val of vector) {
        magnitude += val * val;
    }
    magnitude = Math.sqrt(magnitude);
    
    if (magnitude > 0) {
        for (let i = 0; i < vector.length; i++) {
            vector[i] = vector[i] / magnitude;
        }
    }
    
    vectors.push(vector);
  }
  
  return { tokens, vectors, vocabulary };
}

export function cosineSimilarity(vec1: number[], vec2: number[]): number {
  let dotProduct = 0;
  let norm1 = 0;
  let norm2 = 0;
  
  for (let i = 0; i < vec1.length; i++) {
    dotProduct += vec1[i] * vec2[i];
    norm1 += vec1[i] * vec1[i];
    norm2 += vec2[i] * vec2[i];
  }
  
  if (norm1 === 0 || norm2 === 0) {
    return 0;
  }
  
  return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
}

export function euclideanDistance(vec1: number[], vec2: number[]): number {
  let sum = 0;
  for (let i = 0; i < vec1.length; i++) {
    const diff = vec1[i] - vec2[i];
    sum += diff * diff;
  }
  return Math.sqrt(sum);
}
