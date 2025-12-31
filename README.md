# Text Clustering Visualizer 🎯

A modern **Next.js application** that performs intelligent text clustering and visualizes results through interactive force-directed graphs. Built with React, TypeScript, and machine learning algorithms.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🧠 **Multiple Clustering Algorithms**: K-Means and Hierarchical clustering
- 📊 **Interactive Visualization**: Force-directed graph with drag, zoom, and pan
- 🎨 **Premium UI/UX**: Modern design with glassmorphism and smooth animations
- 🌐 **Multi-language Support**: Indonesian and English stopword filtering
- ⚡ **Fast Processing**: TF-IDF vectorization with optimized algorithms
- 📈 **Detailed Analytics**: Cluster statistics and distribution insights
- 💾 **Export Functionality**: Download results as JSON

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd clustering-next

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 How to Use

1. **Input Text**: Paste your text or load a sample
2. **Configure**: Choose algorithm, token type, and cluster count
3. **Cluster**: Click "Start Clustering" button
4. **Explore**: Interact with the visualization and view statistics
5. **Export**: Download results for further analysis

## 🏗️ Architecture

```
clustering-next/
├── app/                    # Next.js App Router
│   ├── api/cluster/       # Clustering API endpoint
│   ├── page.tsx           # Main page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── TextInput.tsx      # Text input with samples
│   ├── ControlPanel.tsx   # Clustering controls
│   ├── ClusterVisualization.tsx  # Force graph
│   └── ClusterSummary.tsx # Statistics panel
├── lib/                   # Core logic
│   ├── types.ts           # TypeScript types
│   └── clustering/        # Clustering algorithms
│       ├── preprocessor.ts
│       ├── vectorizer.ts
│       ├── kmeans.ts
│       └── hierarchical.ts
└── utils/                 # Utilities
    ├── stopwords.ts       # Stopword lists
    └── colors.ts          # Color palette
```

## 🧪 Clustering Algorithms

### K-Means

- **Type**: Partition-based
- **Speed**: Fast (O(n×k×i))
- **Best for**: Clear, distinct clusters
- **Use case**: General text clustering

### Hierarchical

- **Type**: Tree-based (agglomerative)
- **Speed**: Moderate (O(n²))
- **Best for**: Nested cluster structures
- **Use case**: Exploratory analysis

## 🎨 Tech Stack

### Frontend

- **Next.js 16**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Component library
- **Lucide React**: Icon library

### Clustering & Visualization

- **ml-kmeans**: K-means implementation
- **react-force-graph-2d**: Interactive graphs
- **d3-scale-chromatic**: Color schemes
- **natural**: NLP utilities

### Backend

- **Next.js API Routes**: Server-side processing
- **Custom TF-IDF**: Text vectorization
- **Custom Hierarchical**: Agglomerative clustering

## 📊 Performance

- **Processing Time**: 100-500ms for typical inputs
- **Supported Size**: Up to 500 tokens
- **Visualization**: 60fps with WebGL
- **Memory**: Optimized for client-side processing

## 🎯 Use Cases

- **Content Analysis**: Analyze blog posts, articles, documents
- **Topic Discovery**: Find themes in large text collections
- **Keyword Extraction**: Identify important terms per cluster
- **Text Exploration**: Visual exploration of text relationships
- **Research**: Academic text analysis and categorization

## 🔧 Configuration

### Token Types

- **Words**: Individual words (fastest)
- **Phrases**: 2-word combinations (more context)
- **Sentences**: Full sentences (semantic grouping)

### Cluster Count

- Range: 2-10 clusters
- Recommendation: 3-5 for most texts

## 📝 API Reference

### POST `/api/cluster`

**Request Body**:

```json
{
  "text": "Your text here...",
  "algorithm": "kmeans",
  "numClusters": 5,
  "tokenType": "word"
}
```

**Response**:

```json
{
  "nodes": [...],
  "links": [...],
  "clusters": [...],
  "totalTokens": 87,
  "processingTime": 150
}
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Docker

```bash
docker build -t clustering-next .
docker run -p 3000:3000 clustering-next
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Clustering algorithms from [ml.js](https://github.com/mljs)
- Visualization powered by [react-force-graph](https://github.com/vasturiano/react-force-graph)

---

**Built with ❤️ using Next.js and React**
