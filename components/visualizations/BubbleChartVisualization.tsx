'use client';

import { ClusterResult } from '@/lib/types';

interface BubbleChartVisualizationProps {
  data: ClusterResult;
}

export default function BubbleChartVisualization({ data }: BubbleChartVisualizationProps) {
  // Calculate bubble positions and sizes
  const maxSize = Math.max(...data.clusters.map(c => c.size));
  
  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Cluster Sizes
      </h3>
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {data.clusters.map(cluster => {
            const size = 60 + (cluster.size / maxSize) * 140; // 60-200px
            
            return (
              <div
                key={cluster.id}
                className="relative group cursor-pointer transition-transform hover:scale-110"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                }}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: cluster.color,
                    opacity: 0.7,
                  }}
                >
                  <div className="text-center text-white">
                    <div className="font-bold text-lg">C{cluster.id}</div>
                    <div className="text-sm">{cluster.size}</div>
                  </div>
                </div>
                
                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                  <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-xl">
                    <div className="font-semibold mb-1">Cluster {cluster.id}</div>
                    <div>{cluster.size} items</div>
                    {cluster.words.slice(0, 3).map((word, idx) => (
                      <div key={idx} className="text-gray-300 dark:text-gray-600">
                        {word.text}: {word.weight.toFixed(2)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
