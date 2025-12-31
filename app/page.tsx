'use client';

import { useState } from 'react';
import TextInput from '@/components/TextInput';
import ControlPanel from '@/components/ControlPanel';
import ClusterVisualization from '@/components/ClusterVisualization';
import ClusterSummary from '@/components/ClusterSummary';
import { ClusterAlgorithm, TokenType, ClusterResult, ClusterRequest } from '@/lib/types';
import { BrainCircuit, Github, PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [text, setText] = useState('');
  const [algorithm, setAlgorithm] = useState<ClusterAlgorithm>('kmeans');
  const [numClusters, setNumClusters] = useState(5);
  const [tokenType, setTokenType] = useState<TokenType>('word');
  const [clusterResult, setClusterResult] = useState<ClusterResult | null>(null);
  const [isClustering, setIsClustering] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCluster = async () => {
    if (!text.trim()) {
      setError('Please enter some text to cluster');
      return;
    }

    setIsClustering(true);
    setError(null);

    try {
      const request: ClusterRequest = {
        text,
        algorithm,
        numClusters,
        tokenType,
      };

      const response = await fetch('/api/cluster', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to cluster text');
      }

      setClusterResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error(err);
    } finally {
      setIsClustering(false);
    }
  };

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-foreground antialiased font-sans selection:bg-primary/20">
      
      {/* Sidebar Panel - Inputs & Config */}
      <aside className="w-[400px] flex flex-col border-r bg-muted/10 h-full overflow-hidden shrink-0">
        <div className="h-14 flex items-center px-6 border-b bg-background/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-2 font-semibold">
            <span className="bg-primary text-primary-foreground p-1 rounded-md">
              <BrainCircuit className="w-4 h-4" />
            </span>
            <span>NeuralClusters</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-border/50">
          <section className="space-y-3">
             <TextInput 
              text={text} 
              setText={setText} 
              isLoading={isClustering}
            />
          </section>

          <div className="h-px bg-border/50" />

          <section>
             <ControlPanel 
              algorithm={algorithm}
              setAlgorithm={setAlgorithm}
              numClusters={numClusters}
              setNumClusters={setNumClusters}
              tokenType={tokenType}
              setTokenType={setTokenType}
              onCluster={handleCluster}
              isClustering={isClustering}
            />
          </section>

          {error && (
            <div className="p-3 rounded-md bg-destructive/10 text-destructive text-sm font-medium border border-destructive/20 animate-shake">
              {error}
            </div>
          )}
        </div>
        
        <div className="p-4 border-t bg-muted/20 text-xs text-muted-foreground flex justify-between items-center">
            <span>v1.0.0</span>
            <a href="https://github.com" className="hover:text-foreground transition-colors">Documentation</a>
        </div>
      </aside>

      {/* Main Workspace - Visualization */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
        
        {/* Workspace Toolbar */}
        <header className="h-14 border-b flex items-center justify-between px-6 bg-background/80 backdrop-blur-sm relative z-20">
           <div className="flex items-center gap-2 text-sm text-muted-foreground">
             <PanelLeft className="w-4 h-4" />
             <span>Workspace</span>
             {clusterResult && (
               <>
                 <span className="text-border">/</span>
                 <span className="text-foreground font-medium">Analysis Results</span>
               </>
             )}
           </div>
           
           <div className="flex items-center gap-3">
             <Button variant="ghost" size="sm" className="h-8 text-xs">
                Export Data
             </Button>
             <Button variant="outline" size="sm" className="h-8 text-xs gap-2">
                <Github className="w-3.5 h-3.5" />
                Find on GitHub
             </Button>
           </div>
        </header>

        {/* Visualization Canvas */}
        <div className="flex-1 overflow-hidden relative p-6">
           <div className="w-full h-full border rounded-xl bg-card shadow-sm flex flex-col overflow-hidden relative group">
             
             {/* Visualization Layer */}
             <div className="flex-1 relative bg-gradient-to-br from-background via-muted/10 to-background">
                <ClusterVisualization data={clusterResult} />
             </div>

             {/* Bottom Summary Panel (Collapsible/Overlay) */}
             {clusterResult && (
               <div className="h-48 border-t bg-background/95 backdrop-blur-md overflow-hidden shrink-0 transition-all">
                  <ClusterSummary data={clusterResult} />
               </div>
             )}
           </div>
        </div>
      </main>
    </div>
  );
}
