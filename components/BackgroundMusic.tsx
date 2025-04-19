'use client';

import { useEffect, useRef } from 'react';

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3; // ضبط مستوى الصوت
      audioRef.current.play().catch(error => {
        console.log('لم يتم تشغيل الموسيقى تلقائياً:', error);
      });
    }
  }, []);

  return (
    <audio ref={audioRef} src="/j1ggescats.mp3" />
  );
} 