
import React from 'react';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import MoodTracker from '@/components/MoodTracker';
import BreathingExercise from '@/components/BreathingExercise';
import MeditationTimer from '@/components/MeditationTimer';
import JournalCard from '@/components/JournalCard';
import ActivityCard from '@/components/ActivityCard';
import { Headphones, BookOpenText, Smile, Wind, Music, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  // Inspirational quote of the day
  const dailyQuote = {
    quote: "You don't have to control your thoughts. You just have to stop letting them control you.",
    author: "Dan Millman",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back</h1>
            <p className="text-muted-foreground">How are you feeling today?</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <QuoteCard quote={dailyQuote.quote} author={dailyQuote.author} />
          <MoodTracker />
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Quick access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          <Link to="/meditate">
            <ActivityCard
              title="Meditate"
              description="Find your calm center"
              icon={Headphones}
              color="bg-wellness-blue"
            />
          </Link>
          <Link to="/journal">
            <ActivityCard
              title="Journal"
              description="Reflect on your thoughts"
              icon={BookOpenText}
              color="bg-wellness-purple"
            />
          </Link>
          <Link to="/mood">
            <ActivityCard
              title="Mood"
              description="Track your emotions"
              icon={Smile}
              color="bg-primary"
            />
          </Link>
          <Link to="/breathe">
            <ActivityCard
              title="Breathe"
              description="Guided breathing exercises"
              icon={Wind}
              color="bg-green-500"
            />
          </Link>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Today's recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BreathingExercise />
          <MeditationTimer />
        </div>
      </main>
    </div>
  );
};

export default Index;
