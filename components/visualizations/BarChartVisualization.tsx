'use client';

import { ClusterResult } from '@/lib/types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface BarChartVisualizationProps {
  data: ClusterResult;
}

export default function BarChartVisualization({ data }: BarChartVisualizationProps) {
  // Prepare data for each cluster
  const chartData = data.clusters.flatMap(cluster => 
    cluster.words.slice(0, 5).map(word => ({
      cluster: `C${cluster.id}`,
      word: word.text,
      weight: word.weight,
      color: cluster.color,
      fullLabel: `${word.text} (C${cluster.id})`,
    }))
  );

  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 overflow-auto">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Top Words by Cluster
      </h3>
      <ResponsiveContainer width="100%" height={Math.max(400, chartData.length * 25)}>
        <BarChart 
          data={chartData} 
          layout="vertical"
          margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            type="number"
            stroke="#6b7280"
            label={{ value: 'TF-IDF Weight', position: 'insideBottom', offset: -5 }}
          />
          <YAxis 
            type="category" 
            dataKey="fullLabel"
            stroke="#6b7280"
            width={90}
          />
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {data.word}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Cluster {data.cluster} • Weight: {data.weight.toFixed(3)}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="weight" radius={[0, 4, 4, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
