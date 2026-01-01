'use client';

import { useState } from 'react';
import { ClusterResult } from '@/lib/types';
import { VisualizationType, VISUALIZATION_OPTIONS } from '@/lib/visualization-types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Network, 
  LayoutDashboard, 
  ScatterChart, 
  Cloud, 
  CircleDot, 
  LayoutGrid 
} from 'lucide-react';
import dynamic from 'next/dynamic';

const ForceGraphVisualization = dynamic(() => import('./visualizations/ForceGraphVisualization'), { ssr: false });
const ScatterPlotVisualization = dynamic(() => import('./visualizations/ScatterPlotVisualization'), { ssr: false });
const WordCloudVisualization = dynamic(() => import('./visualizations/WordCloudVisualization'), { ssr: false });
const BubbleChartVisualization = dynamic(() => import('./visualizations/BubbleChartVisualization'), { ssr: false });
const TreemapVisualization = dynamic(() => import('./visualizations/TreemapVisualization'), { ssr: false });

// Map icons to visualization types
const VISUALIZATION_ICONS: Record<VisualizationType, React.ElementType> = {
  'force-graph': Network,
  'scatter-plot': ScatterChart,
  'word-cloud': Cloud,
  'bubble-chart': CircleDot,
  'treemap': LayoutGrid,
};

interface ClusterVisualizationProps {
  data: ClusterResult | null;
}

export default function ClusterVisualization({ data }: ClusterVisualizationProps) {
  const [visualizationType, setVisualizationType] = useState<VisualizationType>('force-graph');

  // Empty State
  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[500px] w-full text-center p-8 animate-fade-in relative z-10">
        <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6 animate-pulse-glow">
          <Network className="w-10 h-10 text-primary/50" />
        </div>
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 mb-2">
          Visualization Area
        </h3>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
          The magic happens here. Enter your text and start clustering to see the neural connections light up.
        </p>
      </div>
    );
  }

  const currentOption = VISUALIZATION_OPTIONS.find(opt => opt.value === visualizationType);
  const CurrentIcon = VISUALIZATION_ICONS[visualizationType];

  return (
    <div className="relative h-full min-h-[500px] w-full flex flex-col">
      {/* Type Selector Floating Header */}
      <div className="absolute top-4 left-4 z-20 animate-fade-in">
        <div className="bg-background/80 backdrop-blur-lg border border-border shadow-2xl rounded-xl p-1.5 pr-2 flex items-center gap-2">
          <div className="bg-primary/10 p-1.5 rounded-lg">
            <LayoutDashboard className="w-4 h-4 text-primary" />
          </div>
          <Select value={visualizationType} onValueChange={(value) => setVisualizationType(value as VisualizationType)}>
            <SelectTrigger className="w-[200px] h-9 border-0 bg-transparent focus:ring-0 text-sm font-medium hover:bg-secondary/20 transition-colors rounded-md">
              <SelectValue>
                <div className="flex items-center gap-2">
                  {CurrentIcon && <CurrentIcon className="w-4 h-4 text-primary/70" />}
                  <span>{currentOption?.label}</span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-background/80 backdrop-blur-lg border border-border shadow-2xl border-white/10">
              {VISUALIZATION_OPTIONS.map(option => {
                const Icon = VISUALIZATION_ICONS[option.value];
                return (
                  <SelectItem key={option.value} value={option.value} className="focus:bg-primary/20">
                    <div className="flex items-center gap-2 py-1">
                      <span className="text-lg text-primary/70">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div className="flex flex-col text-left">
                        <span className="font-medium text-sm">{option.label}</span>
                        <span className="text-[10px] text-muted-foreground font-normal opacity-80">{option.description}</span>
                      </div>
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Visualization Canvas */}
      <div className="flex-1 w-full h-full relative z-10 transition-all duration-500 ease-in-out">
        {visualizationType === 'force-graph' && <ForceGraphVisualization data={data} />}
        {visualizationType === 'scatter-plot' && <ScatterPlotVisualization data={data} />}
        {visualizationType === 'word-cloud' && <WordCloudVisualization data={data} />}
        {visualizationType === 'bubble-chart' && <BubbleChartVisualization data={data} />}
        {visualizationType === 'treemap' && <TreemapVisualization data={data} />}
      </div>
    </div>
  );
}
