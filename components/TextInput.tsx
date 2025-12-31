'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquareQuote } from 'lucide-react';

interface TextInputProps {
  text: string;
  setText: (text: string) => void;
  isLoading: boolean;
}

const SAMPLE_TEXT_TECH = `Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by humans or animals. Leading AI textbooks define the field as the study of "intelligent agents": any system that perceives its environment and takes actions that maximize its chance of achieving its goals. Some popular accounts use the term "artificial intelligence" to describe machines that mimic "cognitive" functions that humans associate with the human mind, such as "learning" and "problem solving".

Machine learning (ML) is the study of computer algorithms that improve automatically through experience. It is seen as a subset of artificial intelligence. Machine learning algorithms build a model based on sample data, known as "training data", in order to make predictions or decisions without being explicitly programmed to do so. Machine learning algorithms are used in a wide variety of applications, such as email filtering and computer vision, where it is difficult or unfeasible to develop conventional algorithms to perform the needed tasks.

Deep learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised. Deep learning architectures such as deep neural networks, deep belief networks, recurrent neural networks and convolutional neural networks have been applied to fields including computer vision, speech recognition, natural language processing, audio recognition, social network filtering, machine translation, bioinformatics, drug design, medical image analysis, material inspection and board game programs, where they have produced results comparable to and in some cases superior to human experts.`;

const SAMPLE_TEXT_ID = `Kecerdasan buatan (bahasa Inggris: Artificial Intelligence, disingkat AI) didefinisikan sebagai kecerdasan entitas ilmiah. Sistem seperti ini umumnya dianggap komputer. Kecerdasan diciptakan dan dimasukkan ke dalam suatu mesin (komputer) agar dapat melakukan pekerjaan seperti yang dapat dilakukan manusia. Beberapa macam bidang yang menggunakan kecerdasan buatan antara lain sistem pakar, permainan komputer (games), logika fuzzy, jaringan saraf tiruan dan robotika.

Pembelajaran mesin atau Machine Learning adalah cabang dari aplikasi kecerdasan buatan (Artificial Intelligence) dikembangkan untuk dapat bekerja sendiri tanpa harus diprogram secara eksplisit/berulang. Aplikasi Machine Learning membutuhkan data sebagai bahan belajar (training) sebelum mengeluarkan output. Aplikasi machine learning dapat meningkatkan kinerjanya seiring dengan meningkatnya data yang dipelajari.

Deep learning (juga dikenal sebagai pembelajaran terstruktur dalam atau pembelajaran hierarkis) adalah bagian dari keluarga metode pembelajaran mesin yang lebih luas berdasarkan jaringan saraf tiruan dengan pembelajaran representasi. Pembelajaran dapat diawasi, semi-diawasi atau tidak diawasi. Arsitektur deep learning seperti jaringan syaraf dalam, jaringan kepercayaan dalam, jaringan syaraf berulang dan jaringan syaraf konvolusional telah diterapkan.`;

export default function TextInput({ text, setText, isLoading }: TextInputProps) {
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="flex flex-col h-full gap-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
           <MessageSquareQuote className="w-3 h-3" /> Input Data
        </label>
        
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setText(SAMPLE_TEXT_TECH)}
            disabled={isLoading}
            className="h-6 text-[10px] px-2 font-medium"
          >
            English
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setText(SAMPLE_TEXT_ID)}
            disabled={isLoading}
            className="h-6 text-[10px] px-2 font-medium"
          >
            Bahasa
          </Button>
          {(text.length > 0) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setText('')}
              disabled={isLoading}
              className="h-6 text-[10px] px-2 text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              Clear
            </Button>
          )}
        </div>
      </div>

      <div className="relative flex-1 group min-h-[160px]">
        <Textarea
          placeholder="Paste or type text for analysis..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={isLoading}
          className="h-full resize-none p-4 bg-background border-input focus:ring-1 focus:ring-primary/20 rounded-lg text-sm leading-relaxed scrollbar-thin transition-shadow shadow-sm focus:shadow-md"
        />
        <div className="absolute bottom-2 right-2 text-[10px] font-medium text-muted-foreground bg-background/80 px-2 py-0.5 rounded border shadow-sm pointer-events-none">
          {wordCount} words
        </div>
      </div>
    </div>
  );
}
