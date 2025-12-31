// Color palette generator for cluster visualization
import { schemeCategory10, schemeSet3, schemePaired } from 'd3-scale-chromatic';

export const clusterColors = [
  '#3b82f6', // Blue
  '#8b5cf6', // Purple
  '#ec4899', // Pink
  '#f59e0b', // Amber
  '#10b981', // Emerald
  '#06b6d4', // Cyan
  '#f97316', // Orange
  '#6366f1', // Indigo
  '#14b8a6', // Teal
  '#ef4444', // Red
  '#84cc16', // Lime
  '#a855f7', // Violet
];

export function getClusterColor(clusterId: number): string {
  return clusterColors[clusterId % clusterColors.length];
}

export function generateColorPalette(numClusters: number): string[] {
  if (numClusters <= clusterColors.length) {
    return clusterColors.slice(0, numClusters);
  }
  
  // For more clusters, use d3 color schemes
  const colors: string[] = [];
  const schemes = [schemeCategory10, schemeSet3, schemePaired];
  
  for (let i = 0; i < numClusters; i++) {
    const schemeIndex = Math.floor(i / 10) % schemes.length;
    const colorIndex = i % 10;
    colors.push(schemes[schemeIndex][colorIndex]);
  }
  
  return colors;
}

export function getNodeColor(node: { cluster: number }, opacity: number = 1): string {
  const baseColor = getClusterColor(node.cluster);
  
  if (opacity === 1) {
    return baseColor;
  }
  
  // Convert hex to rgba
  const r = parseInt(baseColor.slice(1, 3), 16);
  const g = parseInt(baseColor.slice(3, 5), 16);
  const b = parseInt(baseColor.slice(5, 7), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
