(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/utils/colors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clusterColors",
    ()=>clusterColors,
    "generateColorPalette",
    ()=>generateColorPalette,
    "getClusterColor",
    ()=>getClusterColor,
    "getNodeColor",
    ()=>getNodeColor
]);
// Color palette generator for cluster visualization
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$category10$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__schemeCategory10$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale-chromatic/src/categorical/category10.js [app-client] (ecmascript) <export default as schemeCategory10>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$Set3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__schemeSet3$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale-chromatic/src/categorical/Set3.js [app-client] (ecmascript) <export default as schemeSet3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$Paired$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__schemePaired$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale-chromatic/src/categorical/Paired.js [app-client] (ecmascript) <export default as schemePaired>");
;
const clusterColors = [
    '#3b82f6',
    '#8b5cf6',
    '#ec4899',
    '#f59e0b',
    '#10b981',
    '#06b6d4',
    '#f97316',
    '#6366f1',
    '#14b8a6',
    '#ef4444',
    '#84cc16',
    '#a855f7'
];
function getClusterColor(clusterId) {
    return clusterColors[clusterId % clusterColors.length];
}
function generateColorPalette(numClusters) {
    if (numClusters <= clusterColors.length) {
        return clusterColors.slice(0, numClusters);
    }
    // For more clusters, use d3 color schemes
    const colors = [];
    const schemes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$category10$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__schemeCategory10$3e$__["schemeCategory10"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$Set3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__schemeSet3$3e$__["schemeSet3"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$Paired$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__schemePaired$3e$__["schemePaired"]
    ];
    for(let i = 0; i < numClusters; i++){
        const schemeIndex = Math.floor(i / 10) % schemes.length;
        const colorIndex = i % 10;
        colors.push(schemes[schemeIndex][colorIndex]);
    }
    return colors;
}
function getNodeColor(node, opacity = 1) {
    const baseColor = getClusterColor(node.cluster);
    if (opacity === 1) {
        return baseColor;
    }
    // Convert hex to rgba
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/colors.ts [app-client] (ecmascript)");
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
                // Zoom to fit after data loads
                setTimeout({
                    "ForceGraphVisualization.useEffect": ()=>{
                        graphRef.current?.zoomToFit(400, 50);
                    }
                }["ForceGraphVisualization.useEffect"], 100);
            }
        }
    }["ForceGraphVisualization.useEffect"], [
        data
    ]);
    const graphData = {
        nodes: data.nodes.map((node)=>({
                ...node,
                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeColor"])(node, 1)
            })),
        links: data.links
    };
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
                            lineNumber: 60,
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
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                lineNumber: 58,
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
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                                children: isLegendOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                    lineNumber: 75,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                    lineNumber: 75,
                                    columnNumber: 65
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                        lineNumber: 69,
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
                                        lineNumber: 83,
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
                                                        lineNumber: 89,
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
                                                        lineNumber: 92,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                                lineNumber: 88,
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
                                                                lineNumber: 103,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-blue-600 dark:text-blue-400 font-bold",
                                                                children: word.weight.toFixed(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                                lineNumber: 97,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, cluster.id, true, {
                                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ForceGraph2D, {
                ref: graphRef,
                graphData: graphData,
                width: dimensions.width,
                height: dimensions.height,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                nodeLabel: (node)=>{
                    const cluster = data.clusters.find((c)=>c.id === node.cluster);
                    const clusterName = cluster ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cluster$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClusterLabel"])(cluster) : `Cluster ${node.cluster}`;
                    return `
             <div style="background: rgba(0,0,0,0.8); color: white; padding: 8px 12px; border-radius: 6px; font-size: 12px; max-width: 200px; font-family: sans-serif;">
               <div style="font-weight: bold; margin-bottom: 4px; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 4px;">${clusterName}</div>
               <div>${node.text}</div>
             </div>
           `;
                },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                nodeColor: (node)=>node.color,
                nodeRelSize: 6,
                nodeVal: 8,
                linkColor: ()=>'rgba(100, 116, 139, 0.3)',
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                linkWidth: (link)=>Math.max(1, (link.value || 1) * 3),
                linkDirectionalParticles: 2,
                linkDirectionalParticleWidth: 2,
                linkDirectionalParticleSpeed: 0.005,
                backgroundColor: "transparent",
                enableNodeDrag: true,
                enableZoomInteraction: true,
                enablePanInteraction: true,
                cooldownTicks: 100,
                onEngineStop: ()=>graphRef.current?.zoomToFit(400, 50)
            }, void 0, false, {
                fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/visualizations/ForceGraphVisualization.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(ForceGraphVisualization, "VovRqdDu/dilhkkuB6vw7LdHFCc=");
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
"[project]/node_modules/d3-scale-chromatic/src/colors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(specifier) {
    var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
    while(i < n)colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
    return colors;
}
}),
"[project]/node_modules/d3-scale-chromatic/src/categorical/category10.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3-scale-chromatic/src/colors.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
}),
"[project]/node_modules/d3-scale-chromatic/src/categorical/category10.js [app-client] (ecmascript) <export default as schemeCategory10>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schemeCategory10",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$category10$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$category10$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3-scale-chromatic/src/categorical/category10.js [app-client] (ecmascript)");
}),
"[project]/node_modules/d3-scale-chromatic/src/categorical/Set3.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3-scale-chromatic/src/colors.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
}),
"[project]/node_modules/d3-scale-chromatic/src/categorical/Set3.js [app-client] (ecmascript) <export default as schemeSet3>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schemeSet3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$Set3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$Set3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3-scale-chromatic/src/categorical/Set3.js [app-client] (ecmascript)");
}),
"[project]/node_modules/d3-scale-chromatic/src/categorical/Paired.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3-scale-chromatic/src/colors.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
}),
"[project]/node_modules/d3-scale-chromatic/src/categorical/Paired.js [app-client] (ecmascript) <export default as schemePaired>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schemePaired",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$Paired$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$Paired$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3-scale-chromatic/src/categorical/Paired.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_f533225c._.js.map