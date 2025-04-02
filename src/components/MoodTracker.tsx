
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SmilePlus, Smile, Meh, Frown, FrownOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const moods = [
  { value: 'great', icon: SmilePlus, color: 'text-green-500', label: 'Great' },
  { value: 'good', icon: Smile, color: 'text-blue-500', label: 'Good' },
  { value: 'okay', icon: Meh, color: 'text-yellow-500', label: 'Okay' },
  { value: 'bad', icon: Frown, color: 'text-orange-500', label: 'Bad' },
  { value: 'awful', icon: FrownOpen, color: 'text-red-500', label: 'Awful' },
];

const MoodTracker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const { toast } = useToast();

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    toast({
      title: "Mood logged",
      description: `You're feeling ${mood} today.`,
    });
  };

  return (
    <Card className="card-hover-effect">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">How are you feeling today?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          {moods.map((mood) => {
            const Icon = mood.icon;
            return (
              <Button
                key={mood.value}
                variant="ghost"
                className={`flex flex-col items-center py-2 ${selectedMood === mood.value ? 'bg-secondary' : ''}`}
                onClick={() => handleMoodSelect(mood.value)}
              >
                <Icon className={`h-8 w-8 mb-1 ${mood.color}`} />
                <span className="text-xs">{mood.label}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default MoodTracker;
