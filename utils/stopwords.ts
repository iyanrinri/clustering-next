// Indonesian and English stopwords for text preprocessing

export const indonesianStopwords = new Set([
  'yang', 'dan', 'di', 'ke', 'dari', 'ini', 'itu', 'dengan', 'untuk', 'pada',
  'adalah', 'ada', 'akan', 'atau', 'oleh', 'sebagai', 'dalam', 'juga', 'tidak',
  'telah', 'dapat', 'sudah', 'saya', 'kami', 'kita', 'mereka', 'dia', 'ia',
  'anda', 'kamu', 'nya', 'mu', 'ku', 'kah', 'lah', 'pun', 'per', 'si', 'sang',
  'para', 'mana', 'bila', 'kalau', 'jika', 'apabila', 'agar', 'supaya', 'bisa',
  'harus', 'perlu', 'mau', 'ingin', 'hendak', 'banyak', 'sedikit', 'semua',
  'setiap', 'tiap', 'beberapa', 'suatu', 'satu', 'dua', 'tiga', 'empat', 'lima',
  'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'seratus', 'seribu',
  'pertama', 'kedua', 'ketiga', 'sangat', 'lebih', 'paling', 'agak', 'cukup',
  'terlalu', 'amat', 'begitu', 'demikian', 'sekali', 'nanti', 'kemudian',
  'sekarang', 'sedang', 'masih', 'belum', 'pernah', 'sering', 'selalu', 'jarang',
  // News/Journalism additions
  'kepada', 'bila', 'seorang', 'tersebut', 'kata', 'saat', 'lalu', 'namun', 
  'tetapi', 'sehingga', 'karena', 'yaitu', 'yakni', 'adapun', 'bagaimana', 'apa',
  'siapa', 'dimana', 'kapan', 'mengapa', 'hal', 'ini', 'itu', 'di', 'pada', 'juga'
]);

export const englishStopwords = new Set([
  'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i', 'it', 'for',
  'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this', 'but', 'his',
  'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my',
  'one', 'all', 'would', 'there', 'their', 'what', 'so', 'up', 'out', 'if',
  'about', 'who', 'get', 'which', 'go', 'me', 'when', 'make', 'can', 'like',
  'time', 'no', 'just', 'him', 'know', 'take', 'people', 'into', 'year', 'your',
  'good', 'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now', 'look',
  'only', 'come', 'its', 'over', 'think', 'also', 'back', 'after', 'use', 'two',
  'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because',
  'any', 'these', 'give', 'day', 'most', 'us', 'is', 'was', 'are', 'been', 'has',
  'had', 'were', 'said', 'did', 'having', 'may', 'should', 'am', 'being', 'does'
]);

export const combinedStopwords = new Set([
  ...indonesianStopwords,
  ...englishStopwords
]);

export function isStopword(word: string, language: 'id' | 'en' | 'both' = 'both'): boolean {
  const lowerWord = word.toLowerCase();
  
  switch (language) {
    case 'id':
      return indonesianStopwords.has(lowerWord);
    case 'en':
      return englishStopwords.has(lowerWord);
    case 'both':
    default:
      return combinedStopwords.has(lowerWord);
  }
}
