
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

const BreathingExercise: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentPhase, setCurrentPhase] = useState('inhale');
  const [secondsLeft, setSecondsLeft] = useState(4);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev === 1) {
            // Switch phases
            if (currentPhase === 'inhale') {
              setCurrentPhase('hold1');
              return 7; // Hold duration
            } else if (currentPhase === 'hold1') {
              setCurrentPhase('exhale');
              return 8; // Exhale duration
            } else if (currentPhase === 'exhale') {
              setCurrentPhase('hold2');
              return 3; // Second hold duration
            } else {
              setCurrentPhase('inhale');
              return 4; // Inhale duration
            }
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, currentPhase]);

  const toggleActive = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setCurrentPhase('inhale');
      setSecondsLeft(4);
    }
  };

  const getInstructions = () => {
    switch (currentPhase) {
      case 'inhale':
        return 'Inhale slowly through your nose';
      case 'hold1':
        return 'Hold your breath';
      case 'exhale':
        return 'Exhale slowly through your mouth';
      case 'hold2':
        return 'Pause before inhaling again';
      default:
        return '';
    }
  };

  return (
    <Card className="card-hover-effect">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">4-7-8 Breathing</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative mb-6 mt-2">
          <div 
            className={`h-32 w-32 rounded-full bg-wellness-blue/20 flex items-center justify-center ${isActive ? 'animate-breathing' : ''}`}
          >
            <div className="h-24 w-24 rounded-full bg-wellness-blue/30 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-wellness-blue/60 flex items-center justify-center text-white font-bold text-2xl">
                {secondsLeft}
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-center mb-4 text-foreground/80 h-6">
          {isActive ? getInstructions() : 'Reduce anxiety with deep breathing'}
        </p>
        
        <Button onClick={toggleActive} className="w-full">
          {isActive ? (
            <>
              <Pause className="mr-2 h-4 w-4" /> Pause
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" /> Start
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BreathingExercise;
