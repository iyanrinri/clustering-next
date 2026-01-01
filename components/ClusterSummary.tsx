'use client';

import { ClusterResult, ClusterInfo } from '@/lib/types';
import { getClusterLabel } from '@/lib/cluster-utils';
import { Badge } from '@/components/ui/badge';
import { BarChart, Activity, FileText, Hash, Download, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ClusterSummaryProps {
  data: ClusterResult;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function ClusterSummary({ data, isOpen = true, onToggle }: ClusterSummaryProps) {
  const downloadJson = (e: React.MouseEvent) => {
    e.stopPropagation();
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `cluster-analysis-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col">
      <div 
        className="px-6 h-12 border-b flex items-center justify-between bg-muted/5 sticky top-0 z-10 cursor-pointer hover:bg-muted/10 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center gap-2">
           <button className="p-1 hover:bg-muted rounded-md transition-colors mr-1">
             {isOpen ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronUp className="w-4 h-4 text-muted-foreground" />}
           </button>
           <Activity className="w-4 h-4 text-primary" />
           <h3 className="font-semibold text-sm">Analysis Summary</h3>
           {!isOpen && (
             <span className="text-xs text-muted-foreground ml-2">
               ({data.clusters.length} clusters, {data.nodes.length} items)
             </span>
           )}
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={downloadJson}
          className="h-7 text-xs gap-2"
        >
          <Download className="w-3 h-3" />
          Export JSON
        </Button>
      </div>

      {isOpen && (
        <div className="p-6 grid gap-6 transition-all animate-slide-up">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatsCard 
              icon={<Hash className="w-4 h-4 text-blue-500" />}
              label="Total Clusters"
              value={data.clusters.length.toString()}
            />
            <StatsCard 
              icon={<FileText className="w-4 h-4 text-emerald-500" />}
              label="Total Items"
              value={data.nodes.length.toString()}
            />
            <StatsCard 
              icon={<Activity className="w-4 h-4 text-violet-500" />}
              label="Processing Time"
              value={`${data.processingTime || 0}ms`}
              subtext="Optimized"
            />
             <StatsCard               icon={<BarChart className="w-4 h-4 text-amber-500" />}
               label="Algorithm"
               value={data.algorithm} 
             />
          </div>

          {/* Cluster Details List */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest pl-1">
              Cluster Distribution
            </h4>
            <div className="grid gap-3">
              {data.clusters.map((cluster: ClusterInfo) => {
                const label = getClusterLabel(cluster);
                const terms = cluster.words;
                
                return (
                  <div 
                    key={cluster.id} 
                    className="group flex flex-col bg-card border rounded-lg overflow-hidden transition-all hover:border-primary/50 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-4 p-3 bg-muted/20">
                      <div 
                        className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                        style={{ backgroundColor: cluster.color || '#94a3b8' }}
                      />
                      <div className="flex-1 flex items-center justify-between min-w-0">
                         <span className="font-medium text-sm truncate" title={label}>{label}</span>
                         <Badge variant="secondary" className="text-[10px] h-5 px-2 font-mono">
                           {cluster.size} items
                         </Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 pt-2 text-xs text-muted-foreground border-t bg-background/50">
                      <div className="flex flex-wrap gap-1.5">
                        {terms.slice(0, 8).map((wordInfo, idx: number) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-muted/50 border border-transparent group-hover:border-border transition-colors text-[10px]"
                          >
                            {wordInfo.text}
                          </span>
                        ))}
                        {(!terms || terms.length === 0) && (
                          <span className="italic opacity-50">No key terms identified</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Distribution Bar */}
                    <div className="h-1 w-full bg-muted/30">
                       <div 
                         className="h-full transition-all duration-1000" 
                         style={{ 
                           width: `${data.nodes.length > 0 ? (cluster.size / data.nodes.length) * 100 : 0}%`,
                           backgroundColor: cluster.color 
                         }} 
                       />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatsCard({ icon, label, value, subtext }: { icon: React.ReactNode, label: string, value: string, subtext?: string }) {
  return (
    <div className="p-3 border rounded-lg bg-card flex flex-col gap-1 shadow-sm">
      <div className="flex items-center gap-2 mb-1 opacity-80">
        {icon}
        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-xl font-bold tracking-tight">{value}</span>
        {subtext && <span className="text-[10px] text-muted-foreground">{subtext}</span>}
      </div>
    </div>
  );
}
