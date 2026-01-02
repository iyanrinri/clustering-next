(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/visualizations/WordCloudVisualization.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WordCloudVisualization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function WordCloudVisualization({ data }) {
    _s();
    // Merge all words into a single array for a global cloud
    const allWords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WordCloudVisualization.useMemo[allWords]": ()=>{
            return data.clusters.flatMap({
                "WordCloudVisualization.useMemo[allWords]": (cluster)=>cluster.words.map({
                        "WordCloudVisualization.useMemo[allWords]": (word)=>({
                                ...word,
                                color: cluster.color,
                                clusterId: cluster.id
                            })
                    }["WordCloudVisualization.useMemo[allWords]"])
            }["WordCloudVisualization.useMemo[allWords]"]).sort({
                "WordCloudVisualization.useMemo[allWords]": (a, b)=>b.weight - a.weight
            }["WordCloudVisualization.useMemo[allWords]"]);
        }
    }["WordCloudVisualization.useMemo[allWords]"], [
        data
    ]);
    const displayWords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WordCloudVisualization.useMemo[displayWords]": ()=>{
            return allWords.slice(0, 150);
        }
    }["WordCloudVisualization.useMemo[displayWords]"], [
        allWords
    ]);
    const maxWeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WordCloudVisualization.useMemo[maxWeight]": ()=>{
            return Math.max(...displayWords.map({
                "WordCloudVisualization.useMemo[maxWeight]": (w)=>w.weight
            }["WordCloudVisualization.useMemo[maxWeight]"]));
        }
    }["WordCloudVisualization.useMemo[maxWeight]"], [
        displayWords
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-slate-900 rounded-xl border border-slate-800 p-6 overflow-hidden flex flex-col items-center justify-center relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-6 z-10 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-white/90",
                        children: "WordCloud"
                    }, void 0, false, {
                        fileName: "[project]/components/visualizations/WordCloudVisualization.tsx",
                        lineNumber: 35,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-white/50",
                        children: "Top terms across all clusters"
                    }, void 0, false, {
                        fileName: "[project]/components/visualizations/WordCloudVisualization.tsx",
                        lineNumber: 36,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/visualizations/WordCloudVisualization.tsx",
                lineNumber: 34,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-x-4 gap-y-2 max-w-4xl mx-auto content-center h-full p-8 overflow-y-auto scrollbar-thin",
                children: displayWords.map((word, idx)=>{
                    const minSize = 14;
                    const maxSize = 64;
                    // Logarithmic scale often looks better for word clouds
                    const fontSize = minSize + word.weight / maxWeight * (maxSize - minSize);
                    // Random rotation for some words to create the cloud effect
                    // Use deterministic randomness based on word text to avoid hydration mismatch
                    const rotation = word.text.length % 3 === 0 ? -90 : 0;
                    const isVertical = rotation === -90;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold transition-all duration-300 hover:scale-125 hover:z-50 cursor-default select-none leading-none",
                        style: {
                            fontSize: `${fontSize}px`,
                            color: word.color,
                            opacity: 0.8 + word.weight / maxWeight * 0.2,
                            // We'll stick to horizontal for readability unless we want true chaotic cloud
                            writingMode: isVertical ? 'vertical-rl' : 'horizontal-tb'
                        },
                        title: `${word.text} (Weight: ${word.weight.toFixed(2)})`,
                        children: word.text
                    }, `${word.text}-${idx}`, false, {
                        fileName: "[project]/components/visualizations/WordCloudVisualization.tsx",
                        lineNumber: 53,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/visualizations/WordCloudVisualization.tsx",
                lineNumber: 40,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/visualizations/WordCloudVisualization.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(WordCloudVisualization, "Ih9zQZ2U8YHPZXDjxmHjD4rpmec=");
_c = WordCloudVisualization;
var _c;
__turbopack_context__.k.register(_c, "WordCloudVisualization");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/visualizations/WordCloudVisualization.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/visualizations/WordCloudVisualization.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_visualizations_WordCloudVisualization_tsx_769ec2c5._.js.map