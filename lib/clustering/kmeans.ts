// K-means clustering implementation
import { kmeans } from 'ml-kmeans';

// Custom euclidean distance function
function euclideanDistance(a: number[], b: number[]): number {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    const diff = a[i] - b[i];
    sum += diff * diff;
  }
  return Math.sqrt(sum);
}

export interface KMeansResult {
  clusters: number[];
  centroids: number[][];
  iterations: number;
}

export function performKMeans(
  vectors: number[][],
  k: number,
  options?: {
    maxIterations?: number;
    tolerance?: number;
  }
): KMeansResult {
  const maxIterations = options?.maxIterations || 100;
  const tolerance = options?.tolerance || 1e-4;
  
  if (vectors.length === 0) {
    return { clusters: [], centroids: [], iterations: 0 };
  }
  
  // Ensure k is not greater than number of vectors
  const numClusters = Math.min(k, vectors.length);
  
  try {
    const result = kmeans(vectors, numClusters, {
      maxIterations,
      tolerance,
      distanceFunction: euclideanDistance,
    });
    
    return {
      clusters: result.clusters,
      centroids: result.centroids,
      iterations: result.iterations,
    };
  } catch (error) {
    console.error('K-means clustering error:', error);
    // Fallback: assign all to cluster 0
    return {
      clusters: new Array(vectors.length).fill(0),
      centroids: [vectors[0] || []],
      iterations: 0,
    };
  }
}

export function findClosestCentroid(vector: number[], centroids: number[][]): number {
  let minDistance = Infinity;
  let closestIndex = 0;
  
  for (let i = 0; i < centroids.length; i++) {
    const dist = euclideanDistance(vector, centroids[i]);
    if (dist < minDistance) {
      minDistance = dist;
      closestIndex = i;
    }
  }
  
  return closestIndex;
}
