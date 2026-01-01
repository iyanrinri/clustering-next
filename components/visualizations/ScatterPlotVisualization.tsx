'use client';

import { useMemo } from 'react';
import { ClusterResult } from '@/lib/types';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { getClusterLabel } from '@/lib/cluster-utils';

interface ScatterPlotVisualizationProps {
  data: ClusterResult;
}

export default function ScatterPlotVisualization({ data }: ScatterPlotVisualizationProps) {
  // Use useMemo to ensure stable values
  const scatterData = useMemo(() => {
    return data.nodes.map((node, idx) => {
      // Simple deterministic pseudo-random based on index and text length
      const seed = idx * 1337 + node.text.length;
      const pseudoRandom = (input: number) => {
        const x = Math.sin(input) * 10000;
        return x - Math.floor(x);
      };
      
      return {
        x: pseudoRandom(seed) * 100, 
        y: pseudoRandom(seed + 1) * 100,
        cluster: node.cluster,
        text: node.text,
        color: data.clusters.find(c => c.id === node.cluster)?.color || '#3b82f6',
      };
    });
  }, [data]);

  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            type="number" 
            dataKey="x" 
            name="PC1"
            stroke="#6b7280"
          />
          <YAxis 
            type="number" 
            dataKey="y" 
            name="PC2"
            stroke="#6b7280"
          />
          <Tooltip 
            cursor={{ strokeDasharray: '3 3' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const payloadData = payload[0].payload;
                // Find cluster info
                const cluster = data.clusters.find(c => c.id === payloadData.cluster);
                const clusterName = cluster ? getClusterLabel(cluster) : `Cluster ${payloadData.cluster}`;

                return (
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 pb-1 mb-1">
                      {clusterName}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {payloadData.text}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Scatter data={scatterData} fill="#8884d8">
            {scatterData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
