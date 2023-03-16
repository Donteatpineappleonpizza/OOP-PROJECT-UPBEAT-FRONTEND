import React, { useState, useEffect } from 'react';
import sound from '../Music/fire.mp3'

function MusicPlayer() {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const isMusicPlaying = localStorage.getItem('isMusicPlaying');

    if (!isMusicPlaying) {
      const audioInstance = new Audio({sound});
      audioInstance.loop = true;
      audioInstance.muted = true;
      audioInstance.play();
      setAudio(audioInstance);

      // Unmute audio after user interaction
      const handleUserInteraction = () => {
        audioInstance.muted = false;
        localStorage.setItem('isMusicPlaying', true);

        // Remove the event listeners after the first interaction
        window.removeEventListener('click', handleUserInteraction);
        window.removeEventListener('keydown', handleUserInteraction);
      };

      window.addEventListener('click', handleUserInteraction);
      window.addEventListener('keydown', handleUserInteraction);

      return () => {
        window.removeEventListener('click', handleUserInteraction);
        window.removeEventListener('keydown', handleUserInteraction);
      };
    }

    return () => {
      if (audio) {
        audio.pause();
      }
      localStorage.removeItem('isMusicPlaying');
    };
  }, [audio]);

  return null;
}

export default MusicPlayer;
