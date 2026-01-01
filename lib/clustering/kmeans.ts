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

// Simple seeded random number generator (Linear Congruential Generator)
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  next(): number {
    // LCG constants
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }
}

export function performKMeans(
  vectors: number[][],
  k: number,
  options?: {
    maxIterations?: number;
    tolerance?: number;
    seed?: number;
    attempts?: number; // Number of times to run k-means with different seeds
  }
): KMeansResult {
  const maxIterations = options?.maxIterations || 100;
  const tolerance = options?.tolerance || 1e-4;
  const baseSeed = options?.seed || 42;
  const attempts = options?.attempts || 10; // Try 10 times by default
  
  if (vectors.length === 0) {
    return { clusters: [], centroids: [], iterations: 0 };
  }
  
  // Ensure k is not greater than number of vectors
  const numClusters = Math.min(k, vectors.length);
  
  // Store the original Math.random
  const originalRandom = Math.random;
  
  let bestResult: KMeansResult | null = null;
  let minInertia = Infinity; // Lower is better (Within-Cluster Sum of Squares)

  try {
    for (let attempt = 0; attempt < attempts; attempt++) {
      // Use different seed for each attempt but deterministic overall
      const currentSeed = baseSeed + attempt * 7919; 
      const rng = new SeededRandom(currentSeed);
      Math.random = () => rng.next();

      try {
        const result = kmeans(vectors, numClusters, {
          maxIterations,
          tolerance,
          distanceFunction: euclideanDistance,
        });

        // Calculate Inertia (Sum of squared distances to closest centroid)
        // WCSS = Sum(Distance(points, assigned_centroid)^2)
        let currentInertia = 0;
        for (let i = 0; i < vectors.length; i++) {
           const centroid = result.centroids[result.clusters[i]];
           const dist = euclideanDistance(vectors[i], centroid);
           currentInertia += dist * dist;
        }

        // If this attempt is better, or first attempts, keep it
        // We also punish "empty" clusters or super lop-sided ones if we wanted to forced balance
        // but inertia naturally favors compact clusters.
        
        // Simple heuristic: If we have ANY empty clusters (rare with k-means but possible), 
        // treat inertia as high? No, ml-kmeans usually avoids empty.
        
        if (currentInertia < minInertia) {
          minInertia = currentInertia;
          bestResult = {
            clusters: result.clusters,
            centroids: result.centroids,
            iterations: result.iterations,
          };
        }
      } catch (err) {
        console.warn(`K-Means attempt ${attempt} failed`, err);
        // Continue to next attempt
      }
    }
    
    if (!bestResult) {
      throw new Error('All K-Means attempts failed');
    }
    
    return bestResult;

  } catch (error) {
    console.error('K-means clustering error:', error);
    // Fallback: assign randomly or all to 0
    return {
      clusters: new Array(vectors.length).fill(0),
      centroids: [vectors[0] || []],
      iterations: 0,
    };
  } finally {
    // Always restore original Math.random
    Math.random = originalRandom;
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
