'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { ClusterResult } from '@/lib/types';
import { getNodeColor } from '@/utils/colors';
import { Network, ChevronDown, ChevronUp } from 'lucide-react';
import { getClusterLabel } from '@/lib/cluster-utils';

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
  const [isLegendOpen, setIsLegendOpen] = useState(true);

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
      // Configure forces for better compaction
      const fg = graphRef.current;
      
      // 1. Charge: Repulsion
      fg.d3Force('charge').strength(-30).distanceMax(100);

      // 2. Link force: 
      // - Tight for Word->Hub
      // - Loose but present for Hub->Root (keeps clusters near center but not overlapping)
      fg.d3Force('link').distance((link: any) => {
          if (link.target?.id?.startsWith('cluster-hub')) return 150; // Distance from center
          return 30; // Distance from word to hub
      });

      // Zoom
      setTimeout(() => {
        fg.zoomToFit(400, 50);
      }, 200);
    }
  }, [data]);

  const graphData = useMemo(() => {
    // 1. Create Cluster "Hub" Nodes
    const clusterNodes = data.clusters.map(cluster => ({
      id: `cluster-hub-${cluster.id}`,
      text: getClusterLabel(cluster, { maxWords: 2 }), // Visible label
      cluster: cluster.id,
      val: 20, // Large size for hubs
      color: cluster.color,
      isClusterNode: true, // Marker to distinguish
    }));

    // 2. Map original nodes (the "words")
    const wordNodes = data.nodes.map(node => {
        // Find if this node is a top generative term to maybe highlight it?
        // For now just keep them strictly as leaves
        return {
            ...node,
            id: node.id,
            val: 5, // Smaller size for leaves
            color: node.cluster !== undefined 
                ? data.clusters.find(c => c.id === node.cluster)?.color || '#999'
                : '#999',
            isClusterNode: false,
        };
    });

    // 3. Create Links: Hub -> Word
    // We largely ignore the original 'links' (co-occurrences) to cleaner visualization
    // or we could keep them with very low opacity? 
    // The user request suggests: "Cluster ... link ke ... 'diciptakan'" implying a tree/star structure using the cluster as root.
    
    const clusterLinks = data.nodes.map(node => ({
      source: `cluster-hub-${node.cluster}`,
      target: node.id,
      value: 2, // Strong connection
      color: data.clusters.find(c => c.id === node.cluster)?.color,
    }));

    // 4. Create "Root" node (Invisible center gravity)
    // This pulls all Cluster Hubs together so they don't drift apart
    const rootNode = {
        id: 'root-center',
        text: '',
        cluster: -1,
        val: 1,
        color: 'transparent',
        isClusterNode: false,
        isRoot: true,
        fx: 0, // Fix to center
        fy: 0, 
    };

    const rootLinks = clusterNodes.map(hub => ({
        source: 'root-center',
        target: hub.id,
        value: 1,
        color: 'transparent',
        isInvisible: true,
    }));

    return {
      nodes: [rootNode, ...clusterNodes, ...wordNodes],
      links: [...rootLinks, ...clusterLinks],
    };
  }, [data]);

  return (
    <div ref={containerRef} className="relative h-full min-h-[500px] bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg">
      <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
        <div className="flex items-center gap-2">
          <Network className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {data.totalTokens} nodes • {data.links.length} connections
          </span>
        </div>
      </div>

      {/* Cluster Legend */}
      <div className="absolute top-4 right-4 z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-lg max-w-md border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">
        <div 
          className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 rounded-t-lg"
          onClick={() => setIsLegendOpen(!isLegendOpen)}
        >
          <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-300">Clusters ({data.clusters.length})</h3>
          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            {isLegendOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
        
        {isLegendOpen && (
          <div className="p-3 pt-0 border-t border-gray-100 dark:border-gray-700/50 space-y-2 max-h-96 overflow-y-auto">
            {data.clusters.map(cluster => (
              <div key={cluster.id} className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors pointer-events-auto">
                <div 
                  className="w-3 h-3 rounded-full mt-0.5 flex-shrink-0"
                  style={{ backgroundColor: cluster.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      {getClusterLabel(cluster)}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({cluster.size})
                    </span>
                  </div>
                  {cluster.words.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {cluster.words.slice(0, 3).map((word, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-1.5 py-0.5 rounded"
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
        )}
      </div>

      <ForceGraph2D
        ref={graphRef}
        graphData={graphData}
        width={dimensions.width}
        height={dimensions.height}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        nodeLabel={(node: any) => {
           if (node.isRoot) return ''; // No tooltip for root
           
           if (node.isClusterNode) {
               return `
                 <div style="background: rgba(0,0,0,0.9); color: white; padding: 6px 10px; border-radius: 4px; font-size: 14px; font-weight: bold; border: 1px solid ${node.color}">
                   ${node.text}
                 </div>
               `;
           }
           // Regular word node
           return `
             <div style="background: rgba(255,255,255,0.9); color: black; padding: 4px 8px; border-radius: 4px; font-size: 12px; border: 1px solid #ccc">
               ${node.text}
             </div>
           `;
        }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        nodeColor={(node: any) => node.color}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        nodeVal={(node: any) => node.val || 1} 
        nodeRelSize={4}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        linkColor={(link: any) => link.isInvisible ? 'transparent' : (link.color || 'rgba(150, 150, 150, 0.2)')}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        linkWidth={(link: any) => link.value ? link.value * 0.5 : 1}
        linkDirectionalParticles={0} // Turn off particles to reduce noise
        backgroundColor="transparent"
        enableNodeDrag={true}
        enableZoomInteraction={true}
        enablePanInteraction={true}
        cooldownTicks={100}
        onEngineStop={() => graphRef.current?.zoomToFit(400, 50)}
        // Draw text label directly on graph for Cluster Nodes
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        nodeCanvasObject={(node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
          if (node.isRoot) return; // Don't draw root

          const label = node.text;
          const fontSize = node.isClusterNode ? 16/globalScale : 12/globalScale; // Dynamic font size
          ctx.font = `${node.isClusterNode ? 'bold' : ''} ${fontSize}px Sans-Serif`;
          
          if (node.isClusterNode) {
              // Draw circle for cluster node
              ctx.fillStyle = node.color;
              ctx.beginPath();
              ctx.arc(node.x, node.y, (node.val || 5), 0, 2 * Math.PI);
              ctx.fill();
              
              // Draw Label
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = 'white'; // Text inside bubble? Or above?
              // Let's draw text ABOVE the node so it's always visible
              ctx.fillStyle = node.color;
              // Stroke for readability
              ctx.lineWidth = 3 / globalScale;
              ctx.strokeStyle = '#fff';
              ctx.strokeText(label, node.x, node.y + (node.val || 5) + fontSize);
              ctx.fillText(label, node.x, node.y + (node.val || 5) + fontSize);
          } else {
             // Standard Node drawing (circle)
             ctx.fillStyle = node.color;
             ctx.beginPath();
             ctx.arc(node.x, node.y, (node.val || 2), 0, 2 * Math.PI);
             ctx.fill();
             
             // Only show word labels if zoomed in or if it's a significant word?
             // For now, let's keep graph clean and only show labels on Hover (default behavior if we don't draw text)
             // BUT, if we define nodeCanvasObject, we are responsible for drawing everything!
             
             // Let's Draw tiny text if zoomed in enough
             if (globalScale > 2) {
                ctx.textAlign = 'center';
                ctx.textBaseline = 'top';
                ctx.fillStyle = '#666';
                ctx.font = `${10/globalScale}px Sans-Serif`;
                ctx.fillText(label, node.x, node.y + (node.val || 2) + 2);
             }
          }
        }}
        nodeCanvasObjectMode={() => 'replace'} // We take full control of drawing
      />
    </div>
  );
}
