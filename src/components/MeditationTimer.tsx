
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, RefreshCw } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const MeditationTimer: React.FC = () => {
  const [duration, setDuration] = useState(5); // Default 5 minutes
  const [timeLeft, setTimeLeft] = useState(duration * 60); // Convert to seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(duration * 60);
  };

  const changeDuration = (value: number[]) => {
    const newDuration = value[0];
    setDuration(newDuration);
    if (!isActive) {
      setTimeLeft(newDuration * 60);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="card-hover-effect">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Meditation Timer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center mb-4">
          <span className="text-4xl font-bold mb-2 text-primary">
            {formatTime(timeLeft)}
          </span>
          {!isActive && (
            <div className="w-full px-1 mb-4">
              <div className="flex justify-between mb-1 text-sm text-foreground/60">
                <span>Duration: {duration} min</span>
              </div>
              <Slider
                defaultValue={[duration]}
                min={1}
                max={30}
                step={1}
                onValueChange={changeDuration}
                disabled={isActive}
              />
            </div>
          )}
        </div>
        
        <div className="flex space-x-2">
          <Button onClick={toggleTimer} className="flex-1">
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
          <Button onClick={resetTimer} variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MeditationTimer;
