module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/utils/stopwords.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Indonesian and English stopwords for text preprocessing
__turbopack_context__.s([
    "combinedStopwords",
    ()=>combinedStopwords,
    "englishStopwords",
    ()=>englishStopwords,
    "indonesianStopwords",
    ()=>indonesianStopwords,
    "isStopword",
    ()=>isStopword
]);
const indonesianStopwords = new Set([
    'yang',
    'dan',
    'di',
    'ke',
    'dari',
    'ini',
    'itu',
    'dengan',
    'untuk',
    'pada',
    'adalah',
    'ada',
    'akan',
    'atau',
    'oleh',
    'sebagai',
    'dalam',
    'juga',
    'tidak',
    'telah',
    'dapat',
    'sudah',
    'saya',
    'kami',
    'kita',
    'mereka',
    'dia',
    'ia',
    'anda',
    'kamu',
    'nya',
    'mu',
    'ku',
    'kah',
    'lah',
    'pun',
    'per',
    'si',
    'sang',
    'para',
    'mana',
    'bila',
    'kalau',
    'jika',
    'apabila',
    'agar',
    'supaya',
    'bisa',
    'harus',
    'perlu',
    'mau',
    'ingin',
    'hendak',
    'banyak',
    'sedikit',
    'semua',
    'setiap',
    'tiap',
    'beberapa',
    'suatu',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
    'sepuluh',
    'seratus',
    'seribu',
    'pertama',
    'kedua',
    'ketiga',
    'sangat',
    'lebih',
    'paling',
    'agak',
    'cukup',
    'terlalu',
    'amat',
    'begitu',
    'demikian',
    'sekali',
    'nanti',
    'kemudian',
    'sekarang',
    'sedang',
    'masih',
    'belum',
    'pernah',
    'sering',
    'selalu',
    'jarang',
    // News/Journalism additions
    'kepada',
    'bila',
    'seorang',
    'tersebut',
    'kata',
    'saat',
    'lalu',
    'namun',
    'tetapi',
    'sehingga',
    'karena',
    'yaitu',
    'yakni',
    'adapun',
    'bagaimana',
    'apa',
    'siapa',
    'dimana',
    'kapan',
    'mengapa',
    'hal',
    'ini',
    'itu',
    'di',
    'pada',
    'juga'
]);
const englishStopwords = new Set([
    'the',
    'be',
    'to',
    'of',
    'and',
    'a',
    'in',
    'that',
    'have',
    'i',
    'it',
    'for',
    'not',
    'on',
    'with',
    'he',
    'as',
    'you',
    'do',
    'at',
    'this',
    'but',
    'his',
    'by',
    'from',
    'they',
    'we',
    'say',
    'her',
    'she',
    'or',
    'an',
    'will',
    'my',
    'one',
    'all',
    'would',
    'there',
    'their',
    'what',
    'so',
    'up',
    'out',
    'if',
    'about',
    'who',
    'get',
    'which',
    'go',
    'me',
    'when',
    'make',
    'can',
    'like',
    'time',
    'no',
    'just',
    'him',
    'know',
    'take',
    'people',
    'into',
    'year',
    'your',
    'good',
    'some',
    'could',
    'them',
    'see',
    'other',
    'than',
    'then',
    'now',
    'look',
    'only',
    'come',
    'its',
    'over',
    'think',
    'also',
    'back',
    'after',
    'use',
    'two',
    'how',
    'our',
    'work',
    'first',
    'well',
    'way',
    'even',
    'new',
    'want',
    'because',
    'any',
    'these',
    'give',
    'day',
    'most',
    'us',
    'is',
    'was',
    'are',
    'been',
    'has',
    'had',
    'were',
    'said',
    'did',
    'having',
    'may',
    'should',
    'am',
    'being',
    'does'
]);
const combinedStopwords = new Set([
    ...indonesianStopwords,
    ...englishStopwords
]);
function isStopword(word, language = 'both') {
    const lowerWord = word.toLowerCase();
    switch(language){
        case 'id':
            return indonesianStopwords.has(lowerWord);
        case 'en':
            return englishStopwords.has(lowerWord);
        case 'both':
        default:
            return combinedStopwords.has(lowerWord);
    }
}
}),
"[project]/lib/clustering/preprocessor.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Text preprocessing utilities
__turbopack_context__.s([
    "normalizeText",
    ()=>normalizeText,
    "preprocessText",
    ()=>preprocessText,
    "removeStopwords",
    ()=>removeStopwords,
    "tokenize",
    ()=>tokenize,
    "tokenizeByPhrase",
    ()=>tokenizeByPhrase,
    "tokenizeBySentence",
    ()=>tokenizeBySentence,
    "tokenizeByWord",
    ()=>tokenizeByWord
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$stopwords$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/stopwords.ts [app-route] (ecmascript)");
;
function normalizeText(text) {
    return text.toLowerCase().replace(/[^\w\s\u00C0-\u024F]/g, ' ') // Keep letters, numbers, spaces, and accented chars
    .replace(/\s+/g, ' ').trim();
}
function tokenizeByWord(text) {
    const normalized = normalizeText(text);
    return normalized.split(/\s+/).filter((word)=>word.length > 0);
}
function tokenizeByPhrase(text, phraseLength = 2) {
    const words = tokenizeByWord(text);
    const phrases = [];
    for(let i = 0; i <= words.length - phraseLength; i++){
        const phrase = words.slice(i, i + phraseLength).join(' ');
        phrases.push(phrase);
    }
    return phrases;
}
function tokenizeBySentence(text) {
    // Split by sentence delimiters
    const sentences = text.split(/[.!?]+/).map((s)=>s.trim()).filter((s)=>s.length > 0);
    return sentences.map(normalizeText);
}
function tokenize(text, type) {
    switch(type){
        case 'word':
            return tokenizeByWord(text);
        case 'phrase':
            return tokenizeByPhrase(text);
        case 'sentence':
            return tokenizeBySentence(text);
        default:
            return tokenizeByWord(text);
    }
}
function removeStopwords(tokens) {
    return tokens.filter((token)=>{
        // For phrases and sentences, check if majority of words are not stopwords
        const words = token.split(/\s+/);
        if (words.length === 1) {
            return !__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$stopwords$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combinedStopwords"].has(token.toLowerCase()) && token.length > 2;
        }
        const nonStopwordCount = words.filter((word)=>!__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$stopwords$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combinedStopwords"].has(word.toLowerCase())).length;
        return nonStopwordCount / words.length > 0.5;
    });
}
function preprocessText(text, tokenType) {
    const tokens = tokenize(text, tokenType);
    const filtered = removeStopwords(tokens);
    // Remove duplicates while preserving order
    return Array.from(new Set(filtered));
}
}),
"[project]/lib/clustering/vectorizer.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TF-IDF Vectorization implementation
__turbopack_context__.s([
    "calculateIDF",
    ()=>calculateIDF,
    "calculateTF",
    ()=>calculateTF,
    "cosineSimilarity",
    ()=>cosineSimilarity,
    "euclideanDistance",
    ()=>euclideanDistance,
    "vectorize",
    ()=>vectorize
]);
function calculateTF(document) {
    const words = document.split(/\s+/);
    const tf = {};
    const totalWords = words.length;
    for (const word of words){
        tf[word] = (tf[word] || 0) + 1;
    }
    // Normalize by document length
    for(const word in tf){
        tf[word] = tf[word] / totalWords;
    }
    return tf;
}
function calculateIDF(documents) {
    const df = {};
    const numDocuments = documents.length;
    for (const doc of documents){
        const uniqueWords = new Set(doc.split(/\s+/));
        for (const word of uniqueWords){
            df[word] = (df[word] || 0) + 1;
        }
    }
    const idf = {};
    for(const word in df){
        idf[word] = Math.log(numDocuments / df[word]);
    }
    return idf;
}
function vectorize(tokens) {
    const numDocs = tokens.length;
    if (numDocs === 0) {
        return {
            tokens: [],
            vectors: [],
            vocabulary: []
        };
    }
    // Calculate IDF
    const idf = calculateIDF(tokens);
    const vocabulary = Object.keys(idf).sort();
    const vocabIndex = new Map(vocabulary.map((word, idx)=>[
            word,
            idx
        ]));
    // Calculate TF-IDF vectors
    const vectors = [];
    for (const token of tokens){
        const tf = calculateTF(token);
        const vector = new Array(vocabulary.length).fill(0);
        for(const word in tf){
            const idx = vocabIndex.get(word);
            if (idx !== undefined) {
                vector[idx] = tf[word] * idf[word];
            }
        }
        // L2 Normalize the vector to unit length
        // This allows Euclidean distance to approximate Cosine similarity behavior
        let magnitude = 0;
        for (const val of vector){
            magnitude += val * val;
        }
        magnitude = Math.sqrt(magnitude);
        if (magnitude > 0) {
            for(let i = 0; i < vector.length; i++){
                vector[i] = vector[i] / magnitude;
            }
        }
        vectors.push(vector);
    }
    return {
        tokens,
        vectors,
        vocabulary
    };
}
function cosineSimilarity(vec1, vec2) {
    let dotProduct = 0;
    let norm1 = 0;
    let norm2 = 0;
    for(let i = 0; i < vec1.length; i++){
        dotProduct += vec1[i] * vec2[i];
        norm1 += vec1[i] * vec1[i];
        norm2 += vec2[i] * vec2[i];
    }
    if (norm1 === 0 || norm2 === 0) {
        return 0;
    }
    return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
}
function euclideanDistance(vec1, vec2) {
    let sum = 0;
    for(let i = 0; i < vec1.length; i++){
        const diff = vec1[i] - vec2[i];
        sum += diff * diff;
    }
    return Math.sqrt(sum);
}
}),
"[project]/lib/clustering/kmeans.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findClosestCentroid",
    ()=>findClosestCentroid,
    "performKMeans",
    ()=>performKMeans
]);
// K-means clustering implementation
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ml$2d$kmeans$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ml-kmeans/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ml$2d$kmeans$2f$lib$2f$kmeans$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ml-kmeans/lib/kmeans.js [app-route] (ecmascript)");
;
// Custom euclidean distance function
function euclideanDistance(a, b) {
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        const diff = a[i] - b[i];
        sum += diff * diff;
    }
    return Math.sqrt(sum);
}
// Simple seeded random number generator (Linear Congruential Generator)
class SeededRandom {
    seed;
    constructor(seed){
        this.seed = seed;
    }
    next() {
        // LCG constants
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280;
    }
}
function performKMeans(vectors, k, options) {
    const maxIterations = options?.maxIterations || 100;
    const tolerance = options?.tolerance || 1e-4;
    const baseSeed = options?.seed || 42;
    const attempts = options?.attempts || 10; // Try 10 times by default
    if (vectors.length === 0) {
        return {
            clusters: [],
            centroids: [],
            iterations: 0
        };
    }
    // Ensure k is not greater than number of vectors
    const numClusters = Math.min(k, vectors.length);
    // Store the original Math.random
    const originalRandom = Math.random;
    let bestResult = null;
    let minInertia = Infinity; // Lower is better (Within-Cluster Sum of Squares)
    try {
        for(let attempt = 0; attempt < attempts; attempt++){
            // Use different seed for each attempt but deterministic overall
            const currentSeed = baseSeed + attempt * 7919;
            const rng = new SeededRandom(currentSeed);
            Math.random = ()=>rng.next();
            try {
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ml$2d$kmeans$2f$lib$2f$kmeans$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["kmeans"])(vectors, numClusters, {
                    maxIterations,
                    tolerance,
                    distanceFunction: euclideanDistance
                });
                // Calculate Inertia (Sum of squared distances to closest centroid)
                // WCSS = Sum(Distance(points, assigned_centroid)^2)
                let currentInertia = 0;
                for(let i = 0; i < vectors.length; i++){
                    const centroid = result.centroids[result.clusters[i]];
                    const dist = euclideanDistance(vectors[i], centroid);
                    currentInertia += dist * dist;
                }
                // If this attempt is better, or first attempts, keep it
                // We also punish "empty" clusters or super lop-sided ones if we wanted to forced balance
                // but inertia naturally favors compact clusters.
                // Simple heuristic: If we have ANY empty clusters (rare with k-means but possible), 
                // treat inertia as high? No, ml-kmeans usually avoids empty.
                if (currentInertia < minInertia) {
                    minInertia = currentInertia;
                    bestResult = {
                        clusters: result.clusters,
                        centroids: result.centroids,
                        iterations: result.iterations
                    };
                }
            } catch (err) {
                console.warn(`K-Means attempt ${attempt} failed`, err);
            // Continue to next attempt
            }
        }
        if (!bestResult) {
            throw new Error('All K-Means attempts failed');
        }
        return bestResult;
    } catch (error) {
        console.error('K-means clustering error:', error);
        // Fallback: assign randomly or all to 0
        return {
            clusters: new Array(vectors.length).fill(0),
            centroids: [
                vectors[0] || []
            ],
            iterations: 0
        };
    } finally{
        // Always restore original Math.random
        Math.random = originalRandom;
    }
}
function findClosestCentroid(vector, centroids) {
    let minDistance = Infinity;
    let closestIndex = 0;
    for(let i = 0; i < centroids.length; i++){
        const dist = euclideanDistance(vector, centroids[i]);
        if (dist < minDistance) {
            minDistance = dist;
            closestIndex = i;
        }
    }
    return closestIndex;
}
}),
"[project]/lib/clustering/hierarchical.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "performHierarchical",
    ()=>performHierarchical
]);
// Hierarchical clustering implementation
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clustering$2f$vectorizer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/clustering/vectorizer.ts [app-route] (ecmascript)");
;
function performHierarchical(vectors, k) {
    if (vectors.length === 0) {
        return [];
    }
    if (vectors.length <= k) {
        return vectors.map((_, idx)=>idx);
    }
    // Build dendrogram using agglomerative clustering
    const dendrogram = buildDendrogram(vectors);
    // Cut dendrogram to get k clusters
    return cutDendrogram(dendrogram, k, vectors.length);
}
function buildDendrogram(vectors) {
    // Initialize each point as a cluster
    let clusters = vectors.map((_, idx)=>({
            distance: 0,
            indices: [
                idx
            ]
        }));
    // Merge clusters until only one remains
    while(clusters.length > 1){
        // Find closest pair of clusters
        let minDistance = Infinity;
        let mergeI = 0;
        let mergeJ = 1;
        for(let i = 0; i < clusters.length; i++){
            for(let j = i + 1; j < clusters.length; j++){
                const distance = clusterDistance(clusters[i], clusters[j], vectors);
                if (distance < minDistance) {
                    minDistance = distance;
                    mergeI = i;
                    mergeJ = j;
                }
            }
        }
        // Merge the closest clusters
        const newCluster = {
            left: clusters[mergeI],
            right: clusters[mergeJ],
            distance: minDistance,
            indices: [
                ...clusters[mergeI].indices,
                ...clusters[mergeJ].indices
            ]
        };
        // Remove old clusters and add new one
        clusters = clusters.filter((_, idx)=>idx !== mergeI && idx !== mergeJ);
        clusters.push(newCluster);
    }
    return clusters[0];
}
function clusterDistance(cluster1, cluster2, vectors) {
    // Average linkage: average distance between all pairs
    let totalDistance = 0;
    let count = 0;
    for (const i of cluster1.indices){
        for (const j of cluster2.indices){
            totalDistance += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clustering$2f$vectorizer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["euclideanDistance"])(vectors[i], vectors[j]);
            count++;
        }
    }
    return count > 0 ? totalDistance / count : 0;
}
function cutDendrogram(root, k, totalPoints) {
    // Assign cluster IDs to each point
    const assignments = new Array(totalPoints).fill(-1);
    // Get k clusters by cutting the dendrogram
    const clusters = getClusters(root, k);
    // Assign cluster IDs
    clusters.forEach((cluster, clusterId)=>{
        for (const idx of cluster.indices){
            assignments[idx] = clusterId;
        }
    });
    return assignments;
}
function getClusters(root, k) {
    if (k === 1) {
        return [
            root
        ];
    }
    const queue = [
        root
    ];
    const result = [];
    while(queue.length + result.length < k && queue.length > 0){
        // Sort by distance (descending) to split largest clusters first
        queue.sort((a, b)=>b.distance - a.distance);
        const cluster = queue.shift();
        if (cluster.left && cluster.right) {
            queue.push(cluster.left, cluster.right);
        } else {
            result.push(cluster);
        }
    }
    // Add remaining clusters
    result.push(...queue);
    return result;
}
}),
"[project]/utils/colors.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$category10$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__schemeCategory10$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale-chromatic/src/categorical/category10.js [app-route] (ecmascript) <export default as schemeCategory10>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$Set3$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__schemeSet3$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale-chromatic/src/categorical/Set3.js [app-route] (ecmascript) <export default as schemeSet3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$Paired$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__schemePaired$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale-chromatic/src/categorical/Paired.js [app-route] (ecmascript) <export default as schemePaired>");
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
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$category10$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__schemeCategory10$3e$__["schemeCategory10"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$Set3$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__schemeSet3$3e$__["schemeSet3"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$Paired$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__schemePaired$3e$__["schemePaired"]
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
}),
"[project]/app/api/cluster/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
// API Route for text clustering
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clustering$2f$preprocessor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/clustering/preprocessor.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clustering$2f$vectorizer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/clustering/vectorizer.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clustering$2f$kmeans$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/clustering/kmeans.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clustering$2f$hierarchical$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/clustering/hierarchical.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$colors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/colors.ts [app-route] (ecmascript)");
;
;
;
;
;
;
async function POST(request) {
    const startTime = Date.now();
    try {
        const body = await request.json();
        const { text, algorithm, numClusters, tokenType } = body;
        // Validate input
        if (!text || text.trim().length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Text input is required'
            }, {
                status: 400
            });
        }
        if (numClusters < 2 || numClusters > 20) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Number of clusters must be between 2 and 20'
            }, {
                status: 400
            });
        }
        // Step 1: Preprocess text
        const tokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clustering$2f$preprocessor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["preprocessText"])(text, tokenType);
        if (tokens.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No valid tokens found after preprocessing'
            }, {
                status: 400
            });
        }
        if (tokens.length < numClusters) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Not enough tokens (${tokens.length}) for ${numClusters} clusters. Try reducing the number of clusters or using a different token type.`
            }, {
                status: 400
            });
        }
        // Step 2: Vectorization Strategy
        // CRITICAL FIX: If we are clustering WORDS, we cannot treat them as independent documents.
        // We must cluster them based on their CO-OCCURRENCE in sentences.
        // Otherwise, every word is orthogonal to every other word (Distance = 1.0), causing the "Giant Cluster" issue.
        let vectors;
        let vocabulary;
        let clusterItems;
        if (tokenType === 'word') {
            // 1. Split text into context windows (sentences)
            const sentences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clustering$2f$preprocessor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["preprocessText"])(text, 'sentence');
            // 2. Get unique words to cluster
            clusterItems = Array.from(new Set(tokens));
            if (clusterItems.length < numClusters) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `Not enough unique words (${clusterItems.length}) for ${numClusters} clusters.`
                }, {
                    status: 400
                });
            }
            // 3. Build Co-occurrence Matrix
            // Rows = Words, Cols = Sentences
            // If word W appears in Sentence S, value is 1 (or tf-idf in S)
            vectors = clusterItems.map((word)=>{
                const vec = new Array(sentences.length).fill(0);
                sentences.forEach((sentence, sIdx)=>{
                    // Simple regex to match whole word to avoid substr issues (e.g. 'cat' in 'catch')
                    // Escape special logic not really needed for simpler word matching here 
                    // but 'includes' is safer for now. Ideally use tokenized sentence set.
                    if (sentence.toLowerCase().includes(word.toLowerCase())) {
                        vec[sIdx] = 1; // Simple binary occurrence
                    }
                });
                // L2 Normalize row
                let mag = 0;
                for (const v of vec)mag += v * v;
                mag = Math.sqrt(mag);
                if (mag > 0) {
                    for(let i = 0; i < vec.length; i++)vec[i] /= mag;
                }
                return vec;
            });
            // Vocabulary for "Word Clustering" is actually the Sentences (Technically)
            vocabulary = sentences;
        } else {
            // Standard TF-IDF Document Clustering (for Sentences/Paragraphs)
            clusterItems = tokens;
            const vectResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clustering$2f$vectorizer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["vectorize"])(tokens);
            vectors = vectResult.vectors;
            vocabulary = vectResult.vocabulary;
        }
        // Step 3: Perform clustering
        let clusterAssignments;
        if (algorithm === 'kmeans') {
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clustering$2f$kmeans$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["performKMeans"])(vectors, numClusters, {
                attempts: 15
            });
            clusterAssignments = result.clusters;
        } else {
            clusterAssignments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clustering$2f$hierarchical$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["performHierarchical"])(vectors, numClusters);
        }
        // Step 4: Build graph structure
        const nodes = clusterItems.map((token, idx)=>({
                id: `node_${idx}`,
                text: token,
                cluster: clusterAssignments[idx]
            }));
        // Step 5: Create links based on similarity
        // Reuse existing link logic but map indices correctly
        const links = [];
        const similarityThreshold = 0.2; // Lower threshold for co-occurence
        for(let i = 0; i < vectors.length; i++){
            for(let j = i + 1; j < vectors.length; j++){
                const similarity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clustering$2f$vectorizer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cosineSimilarity"])(vectors[i], vectors[j]);
                if (similarity > similarityThreshold) {
                    links.push({
                        source: `node_${i}`,
                        target: `node_${j}`,
                        value: similarity
                    });
                }
            }
        }
        // Step 6: Calculate cluster statistics
        const clusterMap = new Map();
        clusterAssignments.forEach((cluster, idx)=>{
            if (!clusterMap.has(cluster)) {
                clusterMap.set(cluster, []);
            }
            clusterMap.get(cluster).push(idx);
        });
        const clusters = Array.from(clusterMap.entries()).map(([id, indices])=>{
            // For Word clustering, the "top words" are the words themselves in the cluster
            let clusterWords;
            if (tokenType === 'word') {
                // Calculate frequency/weight for sorting
                // Since we don't have global TF-IDF easily accessible here for the words (we used sentences as docs),
                // let's use the Raw Frequency of the word in the original text or just the raw occurrences in sentences.
                // We can re-scan sentences for these specific words efficiently or just assume
                // we want to highlight the most "connected" words.
                // But Frequency is easiest and expected.
                // Actually, we can assume 'token' array has all word occurrences if we tokenized by word?
                // Wait, 'tokens' input to this route is: const tokens = preprocessText(text, tokenType);
                // If tokenType='word', 'tokens' contains EVERY word instance (e.g. ['jakarta', 'seorang', 'oknum', ...])
                // So we can just count occurrences in 'tokens'!
                // Re-tokenize raw text to get actual word counts (including duplicates)
                // preprocessText() returns unique set, so we can't use 'tokens' variable for counts.
                const rawTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clustering$2f$preprocessor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["removeStopwords"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clustering$2f$preprocessor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tokenize"])(text, tokenType));
                const freqMap = new Map();
                rawTokens.forEach((t)=>{
                    freqMap.set(t, (freqMap.get(t) || 0) + 1);
                });
                clusterWords = indices.map((idx)=>({
                        text: clusterItems[idx],
                        weight: freqMap.get(clusterItems[idx]) || 1
                    })).sort((a, b)=>b.weight - a.weight) // Sort by frequency
                .slice(0, 15);
            } else {
                // Use original logic for Sentence clustering
                clusterWords = calculateClusterWords(indices, clusterItems, vectors, vocabulary, 10);
            }
            return {
                id,
                size: indices.length,
                words: clusterWords,
                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$colors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getClusterColor"])(id)
            };
        });
        const processingTime = Date.now() - startTime;
        const result = {
            nodes,
            links,
            clusters,
            totalTokens: clusterItems.length,
            processingTime,
            algorithm: algorithm === 'kmeans' ? 'K-Means' : 'Hierarchical'
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
    } catch (error) {
        console.error('Clustering error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error during clustering'
        }, {
            status: 500
        });
    }
}
function calculateClusterWords(indices, tokens, vectors, vocabulary, topN) {
    // Calculate average TF-IDF scores for each word in the cluster
    const wordScores = new Map();
    for (const idx of indices){
        const token = tokens[idx];
        const vector = vectors[idx];
        // Extract words from token and their TF-IDF scores
        const words = token.split(/\s+/);
        words.forEach((word)=>{
            const vocabIdx = vocabulary.indexOf(word);
            if (vocabIdx !== -1) {
                const tfidfScore = vector[vocabIdx];
                const currentScore = wordScores.get(word) || 0;
                wordScores.set(word, currentScore + tfidfScore);
            }
        });
    }
    // Calculate average scores
    const clusterSize = indices.length;
    wordScores.forEach((score, word)=>{
        wordScores.set(word, score / clusterSize);
    });
    // Sort by weight and return top N
    return Array.from(wordScores.entries()).sort((a, b)=>b[1] - a[1]).slice(0, topN).map(([text, weight])=>({
            text,
            weight: Math.round(weight * 100) / 100
        }));
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d8c85ad3._.js.map