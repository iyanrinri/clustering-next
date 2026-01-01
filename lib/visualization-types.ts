// Visualization type definitions
export type VisualizationType = 
  | 'force-graph'
  | 'scatter-plot'
  | 'word-cloud'
  | 'bubble-chart'
  | 'treemap';

export interface VisualizationOption {
  value: VisualizationType;
  label: string;
  description: string;
}

export const VISUALIZATION_OPTIONS: VisualizationOption[] = [
  {
    value: 'force-graph',
    label: 'Force-Directed Graph',
    description: 'Interactive network showing relationships between items',
  },
  {
    value: 'scatter-plot',
    label: 'Scatter Plot',
    description: '2D visualization with PCA dimensionality reduction',
  },
  {
    value: 'word-cloud',
    label: 'Word Cloud',
    description: 'Word clouds for each cluster showing term importance',
  },
  {
    value: 'bubble-chart',
    label: 'Bubble Chart',
    description: 'Cluster sizes and relationships',
  },
  {
    value: 'treemap',
    label: 'Treemap',
    description: 'Hierarchical view of clusters and their sizes',
  },
];
