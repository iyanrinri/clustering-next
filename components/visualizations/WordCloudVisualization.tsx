'use client';

import { ClusterResult } from '@/lib/types';

interface WordCloudVisualizationProps {
  data: ClusterResult;
}

export default function WordCloudVisualization({ data }: WordCloudVisualizationProps) {
  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 overflow-auto">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Word Clouds by Cluster
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.clusters.map(cluster => (
          <div 
            key={cluster.id}
            className="border-2 rounded-lg p-4 hover:shadow-lg transition-shadow"
            style={{ borderColor: cluster.color }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: cluster.color }}
              />
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Cluster {cluster.id}
              </h4>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                ({cluster.size} items)
              </span>
            </div>
            
            {/* Simple word cloud using font sizes */}
            <div className="flex flex-wrap gap-2 items-center justify-center min-h-[120px]">
              {cluster.words.map((word, idx) => {
                // Calculate font size based on weight
                const maxWeight = Math.max(...cluster.words.map(w => w.weight));
                const minSize = 12;
                const maxSize = 32;
                const fontSize = minSize + ((word.weight / maxWeight) * (maxSize - minSize));
                
                return (
                  <span
                    key={idx}
                    className="font-bold transition-transform hover:scale-110 cursor-default"
                    style={{
                      fontSize: `${fontSize}px`,
                      color: cluster.color,
                      opacity: 0.7 + (word.weight / maxWeight) * 0.3,
                    }}
                    title={`Weight: ${word.weight.toFixed(3)}`}
                  >
                    {word.text}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
