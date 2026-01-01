import { ClusterInfo } from '@/lib/types';

/**
 * Generates a descriptive label for a cluster based on its top words.
 * Falls back to "Cluster {id}" if no words are available.
 * 
 * @param cluster The cluster object
 * @param options Options for formatting
 * @returns A string label for the cluster
 */
export function getClusterLabel(cluster: ClusterInfo, options?: { maxWords?: number, separator?: string }): string {
  if (!cluster.words || cluster.words.length === 0) {
    return `Cluster ${cluster.id}`;
  }

  const { maxWords = 3, separator = ' ' } = options || {};

  // Sort words by weight to get the most representative ones
  const sortedWords = [...cluster.words].sort((a, b) => b.weight - a.weight);
  
  // Get top words
  const topWords = sortedWords.slice(0, maxWords).map(w => w.text);

  if (topWords.length === 0) {
    return `Cluster ${cluster.id}`;
  }

  // Capitalize first letter of each word
  const capitalizedWords = topWords.map(w => w.charAt(0).toUpperCase() + w.slice(1));
  
  return capitalizedWords.join(separator);
}
