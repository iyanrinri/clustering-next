'use client';

import { ClusterAlgorithm, TokenType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play, Sliders, Hash, Type } from 'lucide-react';

interface ControlPanelProps {
  algorithm: ClusterAlgorithm;
  setAlgorithm: (value: ClusterAlgorithm) => void;
  numClusters: number;
  setNumClusters: (value: number) => void;
  tokenType: TokenType;
  setTokenType: (value: TokenType) => void;
  onCluster: () => void;
  isClustering: boolean;
}

export default function ControlPanel({
  algorithm,
  setAlgorithm,
  numClusters,
  setNumClusters,
  tokenType,
  setTokenType,
  onCluster,
  isClustering,
}: ControlPanelProps) {
  return (
    <div className="space-y-6">
      
      <div className="space-y-3">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
          <Sliders className="w-3 h-3" /> Algorithm
        </label>
        <div className="flex gap-2">
           <Button
             variant={algorithm === 'kmeans' ? 'secondary' : 'ghost'}
             onClick={() => setAlgorithm('kmeans')}
             className="flex-1 justify-start h-9"
           >
             K-Means
           </Button>
           <Button
             variant={algorithm === 'hierarchical' ? 'secondary' : 'ghost'}
             onClick={() => setAlgorithm('hierarchical')}
             className="flex-1 justify-start h-9"
           >
             Hierarchical
           </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
            <Hash className="w-3 h-3" /> Clusters: {numClusters}
          </label>
        </div>
        <Slider
          value={[numClusters]}
          onValueChange={([val]) => setNumClusters(val)}
          min={2}
          max={10}
          step={1}
          className="cursor-pointer py-2"
        />
        <div className="flex justify-between text-[10px] text-muted-foreground font-medium px-0.5">
          <span>Less (2)</span>
          <span>More (10)</span>
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
          <Type className="w-3 h-3" /> Tokenization
        </label>
        <Select value={tokenType} onValueChange={(v) => setTokenType(v as TokenType)}>
          <SelectTrigger className="w-full h-9 bg-background/50 border-input">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="word">Word Level</SelectItem>
            <SelectItem value="phrase">Phrase Level (N-Grams)</SelectItem>
            <SelectItem value="sentence">Sentence Level</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="pt-4">
        <Button
          onClick={onCluster}
          disabled={isClustering}
          className="w-full h-10 font-medium"
          size="lg"
        >
          {isClustering ? (
             <span className="flex items-center gap-2">
               <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
               Processing...
             </span>
          ) : (
             <span className="flex items-center gap-2">
               <Play className="w-4 h-4 fill-current" />
               Run Analysis
             </span>
          )}
        </Button>
      </div>
    </div>
  );
}
