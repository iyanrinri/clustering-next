// Core type definitions for the clustering application

export type TokenType = "word" | "phrase" | "sentence";
export type ClusterAlgorithm = "kmeans" | "hierarchical";

export interface ClusterRequest {
  text: string;
  algorithm: ClusterAlgorithm;
  numClusters: number;
  tokenType: TokenType;
}

export interface ClusterNode {
  id: string;
  text: string;
  cluster: number;
  x?: number;
  y?: number;
}

export interface ClusterLink {
  source: string;
  target: string;
  value: number;
}

export interface ClusterWord {
  text: string;
  weight: number;
}

export interface ClusterInfo {
  id: number;
  size: number;
  words: ClusterWord[];
  color: string;
  topGenerativeTerms?: string[];
}

export interface ClusterResult {
  nodes: ClusterNode[];
  links: ClusterLink[];
  clusters: ClusterInfo[];
  totalTokens: number;
  processingTime: number;
  algorithm: string;
}

export interface VectorData {
  tokens: string[];
  vectors: number[][];
  vocabulary: string[];
}
