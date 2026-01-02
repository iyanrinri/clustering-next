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
"[project]/components/visualizations/BubbleChartVisualization.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BubbleChartVisualization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cluster$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cluster-utils.ts [app-client] (ecmascript)");
'use client';
;
;
function BubbleChartVisualization({ data }) {
    // Calculate bubble positions and sizes
    const maxSize = Math.max(...data.clusters.map((c)=>c.size));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4",
                children: "Cluster Sizes"
            }, void 0, false, {
                fileName: "[project]/components/visualizations/BubbleChartVisualization.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-[500px] flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-4 items-center justify-center",
                    children: [
                        ...data.clusters
                    ].sort((a, b)=>{
                        // Deterministic pseudo-random sort based on ID to ensure consistent but "random" order across renders
                        const hashA = (a.id * 9301 + 49297) % 233280;
                        const hashB = (b.id * 9301 + 49297) % 233280;
                        return hashA - hashB;
                    }).map((cluster)=>{
                        const size = 60 + cluster.size / maxSize * 140; // 60-200px
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group cursor-pointer transition-transform hover:scale-110",
                            style: {
                                width: `${size}px`,
                                height: `${size}px`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:brightness-110",
                                    style: {
                                        backgroundColor: cluster.color,
                                        opacity: 0.8
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-white px-2 overflow-hidden w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-sm md:text-base leading-tight truncate",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cluster$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClusterLabel"])(cluster, {
                                                    maxWords: 1
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/visualizations/BubbleChartVisualization.tsx",
                                                lineNumber: 49,
                                                columnNumber: 21
                                            }, this),
                                            size > 100 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] md:text-xs opacity-90 mt-0.5 font-medium",
                                                children: [
                                                    cluster.size,
                                                    " items"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/visualizations/BubbleChartVisualization.tsx",
                                                lineNumber: 53,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/visualizations/BubbleChartVisualization.tsx",
                                        lineNumber: 48,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/BubbleChartVisualization.tsx",
                                    lineNumber: 41,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold mb-1",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cluster$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClusterLabel"])(cluster)
                                            }, void 0, false, {
                                                fileName: "[project]/components/visualizations/BubbleChartVisualization.tsx",
                                                lineNumber: 63,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    cluster.size,
                                                    " items"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/visualizations/BubbleChartVisualization.tsx",
                                                lineNumber: 64,
                                                columnNumber: 21
                                            }, this),
                                            cluster.words.slice(0, 3).map((word, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-300 dark:text-gray-600",
                                                    children: [
                                                        word.text,
                                                        ": ",
                                                        word.weight.toFixed(2)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/components/visualizations/BubbleChartVisualization.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 23
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/visualizations/BubbleChartVisualization.tsx",
                                        lineNumber: 62,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/BubbleChartVisualization.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, cluster.id, true, {
                            fileName: "[project]/components/visualizations/BubbleChartVisualization.tsx",
                            lineNumber: 33,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/visualizations/BubbleChartVisualization.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/visualizations/BubbleChartVisualization.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/visualizations/BubbleChartVisualization.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = BubbleChartVisualization;
var _c;
__turbopack_context__.k.register(_c, "BubbleChartVisualization");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/visualizations/BubbleChartVisualization.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/visualizations/BubbleChartVisualization.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_09c3afad._.js.map