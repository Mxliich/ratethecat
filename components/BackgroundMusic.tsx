'use client';

import { useEffect, useRef } from 'react';

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3; // ضبط مستوى الصوت
      
      // محاولة تشغيل الموسيقى عند تحميل الصفحة
      const playAudio = async () => {
        try {
          await audioRef.current?.play();
        } catch (error) {
          console.log('لم يتم تشغيل الموسيقى تلقائياً:', error);
          
          // إضافة مستمع للتفاعل مع المستخدم
          const handleUserInteraction = async () => {
            try {
              await audioRef.current?.play();
              document.removeEventListener('click', handleUserInteraction);
              document.removeEventListener('keydown', handleUserInteraction);
            } catch (error) {
              console.log('فشل تشغيل الموسيقى:', error);
            }
          };

          document.addEventListener('click', handleUserInteraction);
          document.addEventListener('keydown', handleUserInteraction);
        }
      };

      playAudio();
    }
  }, []);

  return (
    <audio 
      ref={audioRef} 
      src="/j1ggescats.mp3" 
      preload="auto"
    />
  );
} 