
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MeditationTimer from '@/components/MeditationTimer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Moon, Waves, Wind, Birds, Volume2, Play, Pause } from 'lucide-react';

// Create custom icons for sounds
const Birds = Wind;

const Meditate: React.FC = () => {
  const [activeSound, setActiveSound] = useState<string | null>(null);
  
  const sounds = [
    { id: 'rain', name: 'Rain', icon: Waves },
    { id: 'forest', name: 'Forest', icon: Birds },
    { id: 'night', name: 'Night', icon: Moon },
    { id: 'white-noise', name: 'White Noise', icon: Volume2 },
  ];
  
  const toggleSound = (id: string) => {
    if (activeSound === id) {
      setActiveSound(null);
    } else {
      setActiveSound(id);
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-6">Meditation</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <MeditationTimer />
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Ambient Sounds</h2>
                <div className="grid grid-cols-2 gap-4">
                  {sounds.map((sound) => {
                    const Icon = sound.icon;
                    const isActive = activeSound === sound.id;
                    
                    return (
                      <Button
                        key={sound.id}
                        variant={isActive ? 'default' : 'outline'}
                        className="flex-col h-24 py-2"
                        onClick={() => toggleSound(sound.id)}
                      >
                        <Icon className="h-6 w-6 mb-2" />
                        <span>{sound.name}</span>
                        {isActive && <Pause className="h-3 w-3 mt-1" />}
                        {!isActive && <Play className="h-3 w-3 mt-1" />}
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-to-br from-wellness-lavender to-wellness-blue/10 h-fit">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Meditation Tips</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center font-semibold text-sm mr-2 mt-0.5">1</span>
                  <p>Find a quiet, comfortable place to sit</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center font-semibold text-sm mr-2 mt-0.5">2</span>
                  <p>Set a timer so you can fully relax</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center font-semibold text-sm mr-2 mt-0.5">3</span>
                  <p>Focus on your breath, in and out</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center font-semibold text-sm mr-2 mt-0.5">4</span>
                  <p>When your mind wanders, gently bring it back</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center font-semibold text-sm mr-2 mt-0.5">5</span>
                  <p>Be kind to yourself, meditation takes practice</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Meditate;
