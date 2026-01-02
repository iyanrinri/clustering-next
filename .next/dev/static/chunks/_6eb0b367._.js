(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/cluster-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClusterLabel",
    ()=>getClusterLabel
]);
function getClusterLabel(cluster, options) {
    if (!cluster.words || cluster.words.length === 0) {
        return `Cluster ${cluster.id}`;
    }
    const { maxWords = 3, separator = ' ' } = options || {};
    // Sort words by weight to get the most representative ones
    const sortedWords = [
        ...cluster.words
    ].sort((a, b)=>b.weight - a.weight);
    // Get top words
    const topWords = sortedWords.slice(0, maxWords).map((w)=>w.text);
    if (topWords.length === 0) {
        return `Cluster ${cluster.id}`;
    }
    // Capitalize first letter of each word
    const capitalizedWords = topWords.map((w)=>w.charAt(0).toUpperCase() + w.slice(1));
    return capitalizedWords.join(separator);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/visualizations/ForceGraphVisualization.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ForceGraphVisualization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cluster$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cluster-utils.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Dynamic import to prevent SSR issues with react-force-graph-2d
const ForceGraph2D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-force-graph-2d/dist/react-force-graph-2d.mjs [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-force-graph-2d/dist/react-force-graph-2d.mjs [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = ForceGraph2D;
function ForceGraphVisualization({ data }) {
    _s();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const graphRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 800,
        height: 600
    });
    const [isLegendOpen, setIsLegendOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ForceGraphVisualization.useEffect": ()=>{
            const updateDimensions = {
                "ForceGraphVisualization.useEffect.updateDimensions": ()=>{
                    if (containerRef.current) {
                        const { width, height } = containerRef.current.getBoundingClientRect();
                        setDimensions({
                            width,
                            height: Math.max(height, 500)
                        });
                    }
                }
            }["ForceGraphVisualization.useEffect.updateDimensions"];
            updateDimensions();
            window.addEventListener('resize', updateDimensions);
            return ({
                "ForceGraphVisualization.useEffect": ()=>window.removeEventListener('resize', updateDimensions)
            })["ForceGraphVisualization.useEffect"];
        }
    }["ForceGraphVisualization.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ForceGraphVisualization.useEffect": ()=>{
            if (graphRef.current && data) {
                // Configure forces for better compaction
                const fg = graphRef.current;
                // 1. Charge: Repulsion
                fg.d3Force('charge').strength(-30).distanceMax(100);
                // 2. Link force: 
                // - Tight for Word->Hub
                // - Loose but present for Hub->Root (keeps clusters near center but not overlapping)
                fg.d3Force('link').distance({
                    "ForceGraphVisualization.useEffect": (link)=>{
                        if (link.target?.id?.startsWith('cluster-hub')) return 150; // Distance from center
                        return 30; // Distance from word to hub
                    }
                }["ForceGraphVisualization.useEffect"]);
                // Zoom
                setTimeout({
                    "ForceGraphVisualization.useEffect": ()=>{
                        fg.zoomToFit(400, 50);
                    }
                }["ForceGraphVisualization.useEffect"], 200);
            }
        }
    }["ForceGraphVisualization.useEffect"], [
        data
    ]);
    const graphData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ForceGraphVisualization.useMemo[graphData]": ()=>{
            // 1. Create Cluster "Hub" Nodes
            const clusterNodes = data.clusters.map({
                "ForceGraphVisualization.useMemo[graphData].clusterNodes": (cluster)=>({
                        id: `cluster-hub-${cluster.id}`,
                        text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cluster$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClusterLabel"])(cluster, {
                            maxWords: 2
                        }),
                        cluster: cluster.id,
                        val: 20,
                        color: cluster.color,
                        isClusterNode: true
                    })
            }["ForceGraphVisualization.useMemo[graphData].clusterNodes"]);
            // 2. Map original nodes (the "words")
            const wordNodes = data.nodes.map({
                "ForceGraphVisualization.useMemo[graphData].wordNodes": (node)=>{
                    // Find if this node is a top generative term to maybe highlight it?
                    // For now just keep them strictly as leaves
                    return {
                        ...node,
                        id: node.id,
                        val: 5,
                        color: node.cluster !== undefined ? data.clusters.find({
                            "ForceGraphVisualization.useMemo[graphData].wordNodes": (c)=>c.id === node.cluster
                        }["ForceGraphVisualization.useMemo[graphData].wordNodes"])?.color || '#999' : '#999',
                        isClusterNode: false
                    };
                }
            }["ForceGraphVisualization.useMemo[graphData].wordNodes"]);
            // 3. Create Links: Hub -> Word
            // We largely ignore the original 'links' (co-occurrences) to cleaner visualization
            // or we could keep them with very low opacity? 
            // The user request suggests: "Cluster ... link ke ... 'diciptakan'" implying a tree/star structure using the cluster as root.
            const clusterLinks = data.nodes.map({
                "ForceGraphVisualization.useMemo[graphData].clusterLinks": (node)=>({
                        source: `cluster-hub-${node.cluster}`,
                        target: node.id,
                        value: 2,
                        color: data.clusters.find({
                            "ForceGraphVisualization.useMemo[graphData].clusterLinks": (c)=>c.id === node.cluster
                        }["ForceGraphVisualization.useMemo[graphData].clusterLinks"])?.color
                    })
            }["ForceGraphVisualization.useMemo[graphData].clusterLinks"]);
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
                fx: 0,
                fy: 0
            };
            const rootLinks = clusterNodes.map({
                "ForceGraphVisualization.useMemo[graphData].rootLinks": (hub)=>({
                        source: 'root-center',
                        target: hub.id,
                        value: 1,
                        color: 'transparent',
                        isInvisible: true
                    })
            }["ForceGraphVisualization.useMemo[graphData].rootLinks"]);
            return {
                nodes: [
                    rootNode,
                    ...clusterNodes,
                    ...wordNodes
                ],
                links: [
                    ...rootLinks,
                    ...clusterLinks
                ]
            };
        }
    }["ForceGraphVisualization.useMemo[graphData]"], [
        data
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative h-full min-h-[500px] bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                            className: "w-4 h-4 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: [
                                data.totalTokens,
                                " nodes • ",
                                data.links.length,
                                " connections"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-lg max-w-md border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 rounded-t-lg",
                        onClick: ()=>setIsLegendOpen(!isLegendOpen),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
                                children: [
                                    "Clusters (",
                                    data.clusters.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                                children: isLegendOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                    lineNumber: 147,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                    lineNumber: 147,
                                    columnNumber: 65
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    isLegendOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 pt-0 border-t border-gray-100 dark:border-gray-700/50 space-y-2 max-h-96 overflow-y-auto",
                        children: data.clusters.map((cluster)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors pointer-events-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full mt-0.5 flex-shrink-0",
                                        style: {
                                            backgroundColor: cluster.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cluster$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClusterLabel"])(cluster)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                                        children: [
                                                            "(",
                                                            cluster.size,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, this),
                                            cluster.words.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1",
                                                children: cluster.words.slice(0, 3).map((word, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1 text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-1.5 py-0.5 rounded",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: word.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-blue-600 dark:text-blue-400 font-bold",
                                                                children: word.weight.toFixed(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                                lineNumber: 169,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, cluster.id, true, {
                                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ForceGraph2D, {
                ref: graphRef,
                graphData: graphData,
                width: dimensions.width,
                height: dimensions.height,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                nodeLabel: (node)=>{
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
                },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                nodeColor: (node)=>node.color,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                nodeVal: (node)=>node.val || 1,
                nodeRelSize: 4,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                linkColor: (link)=>link.isInvisible ? 'transparent' : link.color || 'rgba(150, 150, 150, 0.2)',
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                linkWidth: (link)=>link.value ? link.value * 0.5 : 1,
                linkDirectionalParticles: 0,
                backgroundColor: "transparent",
                enableNodeDrag: true,
                enableZoomInteraction: true,
                enablePanInteraction: true,
                cooldownTicks: 100,
                onEngineStop: ()=>graphRef.current?.zoomToFit(400, 50),
                // Draw text label directly on graph for Cluster Nodes
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                nodeCanvasObject: (node, ctx, globalScale)=>{
                    if (node.isRoot) return; // Don't draw root
                    const label = node.text;
                    const fontSize = node.isClusterNode ? 16 / globalScale : 12 / globalScale; // Dynamic font size
                    ctx.font = `${node.isClusterNode ? 'bold' : ''} ${fontSize}px Sans-Serif`;
                    if (node.isClusterNode) {
                        // Draw circle for cluster node
                        ctx.fillStyle = node.color;
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, node.val || 5, 0, 2 * Math.PI);
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
                        ctx.arc(node.x, node.y, node.val || 2, 0, 2 * Math.PI);
                        ctx.fill();
                        // Only show word labels if zoomed in or if it's a significant word?
                        // For now, let's keep graph clean and only show labels on Hover (default behavior if we don't draw text)
                        // BUT, if we define nodeCanvasObject, we are responsible for drawing everything!
                        // Let's Draw tiny text if zoomed in enough
                        if (globalScale > 2) {
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillStyle = '#666';
                            ctx.font = `${10 / globalScale}px Sans-Serif`;
                            ctx.fillText(label, node.x, node.y + (node.val || 2) + 2);
                        }
                    }
                },
                nodeCanvasObjectMode: ()=>'replace'
            }, void 0, false, {
                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s(ForceGraphVisualization, "fKTQQzT2ns0fYf4vSWDoeJ8RrRY=");
_c1 = ForceGraphVisualization;
var _c, _c1;
__turbopack_context__.k.register(_c, "ForceGraph2D");
__turbopack_context__.k.register(_c1, "ForceGraphVisualization");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/visualizations/ForceGraphVisualization.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/visualizations/ForceGraphVisualization.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_6eb0b367._.js.map