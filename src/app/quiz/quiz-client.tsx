"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Logo } from '@/components/ui/Logo';
import { quizSteps } from '@/lib/quizData';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);

  const router = useRouter();

  const stepData = quizSteps[currentStep];
  const progress = ((currentStep) / (quizSteps.length - 1)) * 100;
  
  const totalQuestions = quizSteps.filter(step => step.type === 'question').length;
  const questionIndex = quizSteps.slice(0, currentStep + 1).filter(step => step.type === 'question').length;
  const remainingQuestions = totalQuestions - questionIndex;

  useEffect(() => {
    if (stepData.type === 'impact' && stepData.title?.includes('gerando seu diagnóstico')) {
      setIsGenerating(true);
      setGenerationProgress(0);
      
      const interval = setInterval(() => {
        setGenerationProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsGenerating(false);
            return 100;
          }
          return prev + 2; 
        });
      }, 50); 
      
      return () => clearInterval(interval);
    }
  }, [currentStep, stepData]);

  useEffect(() => {
    router.prefetch('/vendas');
  }, [router]);

  const handleAnswer = (answer: string | null) => {
    if (answer) {
      setUserAnswers([...userAnswers, answer]);
    }
    
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      router.push('/vendas');
    }
  };

  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col font-sans">
      <div className="absolute top-0 w-full z-50">
        <ProgressBar progress={progress} />
        <div className="flex justify-center pt-0 pb-0 w-full -mt-2 md:-mt-6">
          <Logo className="w-[280px] sm:w-[340px] md:w-[420px]" />
        </div>
      </div>
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 pt-36 md:p-12 md:pt-48 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="w-full max-w-xl z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Card className="flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400 opacity-50" />
                
                {stepData.type === 'intro' && (
                  <div className="text-center space-y-6 pt-2">
                    <h1 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-white mb-4">
                      {stepData.title}
                    </h1>
                    <p className="text-text-secondary text-base lg:text-lg leading-relaxed">
                      {stepData.subtitle}
                    </p>
                    <Button size="lg" className="w-full mt-6 animate-pulse hover:animate-none bg-[#2563eb] hover:bg-[#1d4ed8] text-white border-none font-bold shadow-lg shadow-[#2563eb]/20" onClick={() => handleAnswer(null)}>
                      {stepData.buttonText}
                    </Button>
                  </div>
                )}

                {stepData.type === 'question' && (
                  <div className="space-y-6">
                    <div className="flex bg-zinc-900/60 p-3 rounded-xl border border-zinc-800 items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-primary">
                        Pergunta {questionIndex} de {totalQuestions}
                      </span>
                      <span className="text-xs font-medium text-text-secondary bg-black px-3 py-1 rounded-full shadow-inner border border-zinc-800">
                        {remainingQuestions === 0 ? 'Última pergunta' : `Faltam ${remainingQuestions} perguntas`}
                      </span>
                    </div>

                    <h2 className="text-lg md:text-xl font-semibold mb-6 text-white leading-relaxed">
                      {stepData.question}
                    </h2>
                    
                    <div className="flex flex-col gap-3">
                      {stepData.options?.map((option, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.3 }}
                        >
                          <Button
                            variant="secondary"
                            className="w-full justify-start text-left h-auto py-4 px-6 text-[15px] font-medium whitespace-normal transition-all hover:pl-8 hover:border-primary/40 hover:bg-zinc-800"
                            onClick={() => handleAnswer(option)}
                          >
                            {option}
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {stepData.type === 'impact' && (
                  <div className="text-center space-y-6 py-4 border-t-0">
                    {stepData.title?.includes('gerando') && isGenerating && (
                      <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 relative drop-shadow-md">
                        <motion.div 
                           className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full"
                           animate={{ rotate: 360 }}
                           transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        />
                      </div>
                    )}
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {stepData.title}
                    </h2>
                    
                    <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-md mx-auto">
                      {stepData.text}
                    </p>
                    
                    {stepData.title?.includes('gerando') ? (
                      <div className="mt-8 space-y-3">
                         <div className="w-full h-4 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 relative shadow-inner">
                            <motion.div 
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-blue-400"
                              initial={{ width: '0%' }}
                              animate={{ width: `${generationProgress}%` }}
                              transition={{ duration: 0.1 }}
                            />
                         </div>
                         <div className="text-sm font-bold text-primary tracking-widest text-right absolute w-[calc(100%-6rem)]">
                           {generationProgress}%
                         </div>
                         
                         <AnimatePresence>
                           {!isGenerating && (
                             <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="pt-[1.5rem]">
                               <Button size="lg" className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white border-none transition-all font-bold shadow-lg shadow-[#2563eb]/20" onClick={() => handleAnswer(null)}>
                                 {stepData.buttonText}
                               </Button>
                             </motion.div>
                           )}
                         </AnimatePresence>
                      </div>
                    ) : (
                      <Button size="lg" className="w-full mt-8 bg-[#2563eb] hover:bg-[#1d4ed8] text-white transition-all font-bold shadow-lg shadow-[#2563eb]/20 border-none" onClick={() => handleAnswer(null)}>
                        {stepData.buttonText}
                      </Button>
                    )}
                  </div>
                )}

                {stepData.type === 'result' && (
                  <div className="text-center space-y-6 py-8">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
                      {stepData.title}
                    </h2>
                    
                    <p className="text-text-secondary text-base font-medium leading-relaxed max-w-md mx-auto">
                      {stepData.text}
                    </p>
                    
                    <Button size="lg" className="w-full mt-8 text-lg py-6 bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-xl shadow-[#2563eb]/30 transform hover:scale-105 transition-all font-extrabold tracking-tight border-none" onClick={() => handleAnswer(null)}>
                      {stepData.buttonText}
                    </Button>
                  </div>
                )}
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
