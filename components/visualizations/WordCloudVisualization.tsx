'use client';

import { ClusterResult } from '@/lib/types';
import { useMemo } from 'react';

interface WordCloudVisualizationProps {
  data: ClusterResult;
}

export default function WordCloudVisualization({ data }: WordCloudVisualizationProps) {
  
  // Merge all words into a single array for a global cloud
  const allWords = useMemo(() => {
    return data.clusters.flatMap(cluster => 
      cluster.words.map(word => ({
        ...word,
        color: cluster.color,
        clusterId: cluster.id
      }))
    ).sort((a, b) => b.weight - a.weight);
  }, [data]);

  const displayWords = useMemo(() => {
    return allWords.slice(0, 150);
  }, [allWords]);

  const maxWeight = useMemo(() => {
    return Math.max(...displayWords.map(w => w.weight));
  }, [displayWords]);

  return (
    <div className="w-full h-full bg-slate-900 rounded-xl border border-slate-800 p-6 overflow-hidden flex flex-col items-center justify-center relative">
       {/* Background decorative text */}
       <div className="absolute top-4 left-6 z-10 pointer-events-none">
         <h3 className="text-lg font-semibold text-white/90">WordCloud</h3>
         <p className="text-xs text-white/50">Top terms across all clusters</p>
       </div>

       {/* Simple layout distribution */}
       <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 max-w-4xl mx-auto content-center h-full p-8 overflow-y-auto scrollbar-thin">
          {displayWords.map((word, idx) => {
            const minSize = 14;
            const maxSize = 64;
            // Logarithmic scale often looks better for word clouds
            const fontSize = minSize + ((word.weight / maxWeight) * (maxSize - minSize));
            
            // Random rotation for some words to create the cloud effect
            // Use deterministic randomness based on word text to avoid hydration mismatch
            const rotation = (word.text.length % 3 === 0) ? -90 : 0; 
            const isVertical = rotation === -90;

            return (
              <span
                key={`${word.text}-${idx}`}
                className="font-bold transition-all duration-300 hover:scale-125 hover:z-50 cursor-default select-none leading-none"
                style={{
                  fontSize: `${fontSize}px`,
                  color: word.color,
                  opacity: 0.8 + (word.weight / maxWeight) * 0.2,
                  // We'll stick to horizontal for readability unless we want true chaotic cloud
                  writingMode: isVertical ? 'vertical-rl' : 'horizontal-tb',
                }}
                title={`${word.text} (Weight: ${word.weight.toFixed(2)})`}
              >
                {word.text}
              </span>
            );
          })}
       </div>
    </div>
  );
}
