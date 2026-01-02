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
"[project]/components/visualizations/TreemapVisualization.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TreemapVisualization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$Treemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/Treemap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cluster$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cluster-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Custom content renderer for Treemap tiles
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomizedContent = (props)=>{
    const { x, y, width, height, payload, depth, name, size, fill } = props;
    // Safety check to ensure we don't crash if props are missing
    if (!width || !height) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: x,
                y: y,
                width: width,
                height: height,
                style: {
                    fill: payload && payload.fill || fill || '#8884d8',
                    stroke: '#fff',
                    strokeWidth: 2 / (depth + 1e-10),
                    strokeOpacity: 1 / (depth + 1e-10)
                }
            }, void 0, false, {
                fileName: "[project]/components/visualizations/TreemapVisualization.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            depth > 0 && width > 50 && height > 50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
                x: x,
                y: y,
                width: width,
                height: height,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center w-full h-full p-2 text-center overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white font-bold text-sm leading-tight line-clamp-2",
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/components/visualizations/TreemapVisualization.tsx",
                            lineNumber: 37,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white/80 text-xs mt-1",
                            children: size
                        }, void 0, false, {
                            fileName: "[project]/components/visualizations/TreemapVisualization.tsx",
                            lineNumber: 40,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/visualizations/TreemapVisualization.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/visualizations/TreemapVisualization.tsx",
                lineNumber: 35,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/visualizations/TreemapVisualization.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CustomizedContent;
function TreemapVisualization({ data }) {
    _s();
    const treeData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TreemapVisualization.useMemo[treeData]": ()=>{
            if (!data || !data.clusters) return [];
            return data.clusters.map({
                "TreemapVisualization.useMemo[treeData]": (cluster)=>{
                    const clusterName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cluster$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClusterLabel"])(cluster);
                    return {
                        name: clusterName,
                        size: cluster.size,
                        fill: cluster.color
                    };
                }
            }["TreemapVisualization.useMemo[treeData]"]);
        }
    }["TreemapVisualization.useMemo[treeData]"], [
        data
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-slate-900 rounded-xl border border-slate-800 p-4 overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-0 right-0 text-center z-10 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-white font-semibold",
                    children: "Cluster Distribution"
                }, void 0, false, {
                    fileName: "[project]/components/visualizations/TreemapVisualization.tsx",
                    lineNumber: 69,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/visualizations/TreemapVisualization.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$Treemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Treemap"], {
                    data: treeData,
                    dataKey: "size",
                    aspectRatio: 4 / 3,
                    stroke: "#fff",
                    fill: "#8884d8",
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomizedContent, {}, void 0, false, {
                        fileName: "[project]/components/visualizations/TreemapVisualization.tsx",
                        lineNumber: 78,
                        columnNumber: 22
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        content: ({ active, payload })=>{
                            if (active && payload && payload.length) {
                                const data = payload[0].payload;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 border border-slate-700 p-2 rounded shadow-xl text-white text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold",
                                            children: data.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/TreemapVisualization.tsx",
                                            lineNumber: 86,
                                            columnNumber: 25
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Size: ",
                                                data.size
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/visualizations/TreemapVisualization.tsx",
                                            lineNumber: 87,
                                            columnNumber: 25
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/visualizations/TreemapVisualization.tsx",
                                    lineNumber: 85,
                                    columnNumber: 23
                                }, void 0);
                            }
                            return null;
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/visualizations/TreemapVisualization.tsx",
                        lineNumber: 80,
                        columnNumber: 14
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/visualizations/TreemapVisualization.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/visualizations/TreemapVisualization.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/visualizations/TreemapVisualization.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(TreemapVisualization, "JlawwiIe9+3Sc+ntSTsRFbG16Go=");
_c1 = TreemapVisualization;
var _c, _c1;
__turbopack_context__.k.register(_c, "CustomizedContent");
__turbopack_context__.k.register(_c1, "TreemapVisualization");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/visualizations/TreemapVisualization.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/visualizations/TreemapVisualization.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_7f901bcd._.js.map