'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { ClusterResult } from '@/lib/types';
import { getNodeColor } from '@/utils/colors';
import { Network } from 'lucide-react';

// Dynamic import to prevent SSR issues with react-force-graph-2d
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false,
});

interface ForceGraphVisualizationProps {
  data: ClusterResult;
}

export default function ForceGraphVisualization({ data }: ForceGraphVisualizationProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const graphRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height: Math.max(height, 500) });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (graphRef.current && data) {
      // Zoom to fit after data loads
      setTimeout(() => {
        graphRef.current?.zoomToFit(400, 50);
      }, 100);
    }
  }, [data]);

  const graphData = {
    nodes: data.nodes.map(node => ({
      ...node,
      color: getNodeColor(node, 1),
    })),
    links: data.links,
  };

  return (
    <div ref={containerRef} className="relative h-full min-h-[500px] bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg">
      <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
        <div className="flex items-center gap-2">
          <Network className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {data.totalTokens} nodes • {data.links.length} connections
          </span>
        </div>
      </div>

      {/* Cluster Legend */}
      <div className="absolute top-4 right-4 z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-md border border-gray-200 dark:border-gray-700">
        <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-3">Clusters ({data.clusters.length})</h3>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {data.clusters.map(cluster => (
            <div key={cluster.id} className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <div 
                className="w-3 h-3 rounded-full mt-0.5 flex-shrink-0"
                style={{ backgroundColor: cluster.color }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    Cluster {cluster.id}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    ({cluster.size} items)
                  </span>
                </div>
                {cluster.words.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {cluster.words.slice(0, 3).map((word, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-1.5 py-0.5 rounded"
                      >
                        <span className="font-medium">{word.text}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-bold">
                          {word.weight.toFixed(1)}
                        </span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ForceGraph2D
        ref={graphRef}
        graphData={graphData}
        width={dimensions.width}
        height={dimensions.height}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        nodeLabel={(node: any) => `
          <div style="background: rgba(0,0,0,0.8); color: white; padding: 8px 12px; border-radius: 6px; font-size: 12px; max-width: 200px;">
            <div style="font-weight: bold; margin-bottom: 4px;">Cluster ${node.cluster}</div>
            <div>${node.text}</div>
          </div>
        `}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        nodeColor={(node: any) => node.color}
        nodeRelSize={6}
        nodeVal={8}
        linkColor={() => 'rgba(100, 116, 139, 0.3)'}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        linkWidth={(link: any) => Math.max(1, (link.value || 1) * 3)}
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={2}
        linkDirectionalParticleSpeed={0.005}
        backgroundColor="transparent"
        enableNodeDrag={true}
        enableZoomInteraction={true}
        enablePanInteraction={true}
        cooldownTicks={100}
        onEngineStop={() => graphRef.current?.zoomToFit(400, 50)}
      />
    </div>
  );
}
