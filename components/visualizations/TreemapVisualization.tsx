'use client';

import { useMemo } from 'react';
import { ResponsiveContainer, Treemap, Tooltip } from 'recharts';
import { ClusterResult } from '@/lib/types';
import { getClusterLabel } from '@/lib/cluster-utils';

interface TreemapVisualizationProps {
  data: ClusterResult;
}

// Custom content renderer for Treemap tiles
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomizedContent = (props: any) => {
  const { x, y, width, height, payload, depth, name, size, fill } = props;

  // Safety check to ensure we don't crash if props are missing
  if (!width || !height) return null;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: (payload && payload.fill) || fill || '#8884d8',
          stroke: '#fff',
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth > 0 && width > 50 && height > 50 && (
         <foreignObject x={x} y={y} width={width} height={height}>
          <div className="flex flex-col items-center justify-center w-full h-full p-2 text-center overflow-hidden">
             <span className="text-white font-bold text-sm leading-tight line-clamp-2">
               {name}
             </span>
             <span className="text-white/80 text-xs mt-1">
               {size}
             </span>
          </div>
        </foreignObject>
      )}
    </g>
  );
};

export default function TreemapVisualization({ data }: TreemapVisualizationProps) {
  
  const treeData = useMemo(() => {
    if (!data || !data.clusters) return [];

    return data.clusters.map(cluster => {
      const clusterName = getClusterLabel(cluster);

      return {
        name: clusterName,
        size: cluster.size,
        fill: cluster.color, 
      };
    });
  }, [data]);

  return (
    <div className="w-full h-full bg-slate-900 rounded-xl border border-slate-800 p-4 overflow-hidden relative">
        <div className="absolute top-4 left-0 right-0 text-center z-10 pointer-events-none">
            <h3 className="text-white font-semibold">Cluster Distribution</h3>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <Treemap
            data={treeData}
            dataKey="size"
            aspectRatio={4 / 3}
            stroke="#fff"
            fill="#8884d8"
            content={<CustomizedContent />}
          >
             <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-slate-800 border border-slate-700 p-2 rounded shadow-xl text-white text-xs">
                        <p className="font-bold">{data.name}</p>
                        <p>Size: {data.size}</p>
                      </div>
                    );
                  }
                  return null;
                }}
             />
          </Treemap>
        </ResponsiveContainer>
    </div>
  );
}
