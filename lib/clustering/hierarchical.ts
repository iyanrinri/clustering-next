// Hierarchical clustering implementation
import { euclideanDistance } from './vectorizer';

interface ClusterNode {
  left?: ClusterNode;
  right?: ClusterNode;
  distance: number;
  indices: number[];
}

export function performHierarchical(
  vectors: number[][],
  k: number
): number[] {
  if (vectors.length === 0) {
    return [];
  }
  
  if (vectors.length <= k) {
    return vectors.map((_, idx) => idx);
  }
  
  // Build dendrogram using agglomerative clustering
  const dendrogram = buildDendrogram(vectors);
  
  // Cut dendrogram to get k clusters
  return cutDendrogram(dendrogram, k, vectors.length);
}

function buildDendrogram(vectors: number[][]): ClusterNode {
  // Initialize each point as a cluster
  let clusters: ClusterNode[] = vectors.map((_, idx) => ({
    distance: 0,
    indices: [idx],
  }));
  
  // Merge clusters until only one remains
  while (clusters.length > 1) {
    // Find closest pair of clusters
    let minDistance = Infinity;
    let mergeI = 0;
    let mergeJ = 1;
    
    for (let i = 0; i < clusters.length; i++) {
      for (let j = i + 1; j < clusters.length; j++) {
        const distance = clusterDistance(clusters[i], clusters[j], vectors);
        if (distance < minDistance) {
          minDistance = distance;
          mergeI = i;
          mergeJ = j;
        }
      }
    }
    
    // Merge the closest clusters
    const newCluster: ClusterNode = {
      left: clusters[mergeI],
      right: clusters[mergeJ],
      distance: minDistance,
      indices: [...clusters[mergeI].indices, ...clusters[mergeJ].indices],
    };
    
    // Remove old clusters and add new one
    clusters = clusters.filter((_, idx) => idx !== mergeI && idx !== mergeJ);
    clusters.push(newCluster);
  }
  
  return clusters[0];
}

function clusterDistance(
  cluster1: ClusterNode,
  cluster2: ClusterNode,
  vectors: number[][]
): number {
  // Average linkage: average distance between all pairs
  let totalDistance = 0;
  let count = 0;
  
  for (const i of cluster1.indices) {
    for (const j of cluster2.indices) {
      totalDistance += euclideanDistance(vectors[i], vectors[j]);
      count++;
    }
  }
  
  return count > 0 ? totalDistance / count : 0;
}

function cutDendrogram(
  root: ClusterNode,
  k: number,
  totalPoints: number
): number[] {
  // Assign cluster IDs to each point
  const assignments = new Array(totalPoints).fill(-1);
  
  // Get k clusters by cutting the dendrogram
  const clusters = getClusters(root, k);
  
  // Assign cluster IDs
  clusters.forEach((cluster, clusterId) => {
    for (const idx of cluster.indices) {
      assignments[idx] = clusterId;
    }
  });
  
  return assignments;
}

function getClusters(root: ClusterNode, k: number): ClusterNode[] {
  if (k === 1) {
    return [root];
  }
  
  const queue: ClusterNode[] = [root];
  const result: ClusterNode[] = [];
  
  while (queue.length + result.length < k && queue.length > 0) {
    // Sort by distance (descending) to split largest clusters first
    queue.sort((a, b) => b.distance - a.distance);
    
    const cluster = queue.shift()!;
    
    if (cluster.left && cluster.right) {
      queue.push(cluster.left, cluster.right);
    } else {
      result.push(cluster);
    }
  }
  
  // Add remaining clusters
  result.push(...queue);
  
  return result;
}
