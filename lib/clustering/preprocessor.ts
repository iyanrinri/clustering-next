// Text preprocessing utilities
import { TokenType } from '../types';
import { combinedStopwords } from '@/utils/stopwords';

export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s\u00C0-\u024F]/g, ' ') // Keep letters, numbers, spaces, and accented chars
    .replace(/\s+/g, ' ')
    .trim();
}

export function tokenizeByWord(text: string): string[] {
  const normalized = normalizeText(text);
  return normalized.split(/\s+/).filter(word => word.length > 0);
}

export function tokenizeByPhrase(text: string, phraseLength: number = 2): string[] {
  const words = tokenizeByWord(text);
  const phrases: string[] = [];
  
  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(' ');
    phrases.push(phrase);
  }
  
  return phrases;
}

export function tokenizeBySentence(text: string): string[] {
  // Split by sentence delimiters
  const sentences = text
    .split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);
  
  return sentences.map(normalizeText);
}

export function tokenize(text: string, type: TokenType): string[] {
  switch (type) {
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

export function removeStopwords(tokens: string[]): string[] {
  return tokens.filter(token => {
    // For phrases and sentences, check if majority of words are not stopwords
    const words = token.split(/\s+/);
    if (words.length === 1) {
      return !combinedStopwords.has(token.toLowerCase()) && token.length > 2;
    }
    
    const nonStopwordCount = words.filter(
      word => !combinedStopwords.has(word.toLowerCase())
    ).length;
    
    return nonStopwordCount / words.length > 0.5;
  });
}

export function preprocessText(text: string, tokenType: TokenType): string[] {
  const tokens = tokenize(text, tokenType);
  const filtered = removeStopwords(tokens);
  
  // Remove duplicates while preserving order
  return Array.from(new Set(filtered));
}
