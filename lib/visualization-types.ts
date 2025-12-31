// Visualization type definitions
export type VisualizationType = 
  | 'force-graph'
  | 'scatter-plot'
  | 'word-cloud'
  | 'bar-chart'
  | 'bubble-chart';

export interface VisualizationOption {
  value: VisualizationType;
  label: string;
  description: string;
  icon: string;
}

export const VISUALIZATION_OPTIONS: VisualizationOption[] = [
  {
    value: 'force-graph',
    label: 'Force-Directed Graph',
    description: 'Interactive network showing relationships between items',
    icon: '🕸️',
  },
  {
    value: 'scatter-plot',
    label: 'Scatter Plot',
    description: '2D visualization with PCA dimensionality reduction',
    icon: '📊',
  },
  {
    value: 'word-cloud',
    label: 'Word Cloud',
    description: 'Word clouds for each cluster showing term importance',
    icon: '☁️',
  },
  {
    value: 'bar-chart',
    label: 'Bar Chart',
    description: 'Top words per cluster with weights',
    icon: '📈',
  },
  {
    value: 'bubble-chart',
    label: 'Bubble Chart',
    description: 'Cluster sizes and relationships',
    icon: '🫧',
  },
];
