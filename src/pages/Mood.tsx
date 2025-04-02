
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MoodTracker from '@/components/MoodTracker';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  SmilePlus, 
  Smile, 
  Meh, 
  Frown, 
  FrownOpen, 
  BarChart, 
  Calendar 
} from 'lucide-react';
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const moods = [
  { value: 'great', icon: SmilePlus, color: '#22c55e', label: 'Great' },
  { value: 'good', icon: Smile, color: '#3b82f6', label: 'Good' },
  { value: 'okay', icon: Meh, color: '#eab308', label: 'Okay' },
  { value: 'bad', icon: Frown, color: '#f97316', label: 'Bad' },
  { value: 'awful', icon: FrownOpen, color: '#ef4444', label: 'Awful' }
];

// Sample data for mood history
const moodHistory = [
  { date: 'Aug 10', mood: 'great' },
  { date: 'Aug 11', mood: 'good' },
  { date: 'Aug 12', mood: 'okay' },
  { date: 'Aug 13', mood: 'good' },
  { date: 'Aug 14', mood: 'great' },
  { date: 'Aug 15', mood: 'good' },
  { date: 'Aug 16', mood: 'okay' }
];

// Transform data for charts - numerical value for charting (5=great, 1=awful)
const chartData = moodHistory.map(entry => ({
  date: entry.date,
  value: entry.mood === 'great' ? 5 : 
         entry.mood === 'good' ? 4 : 
         entry.mood === 'okay' ? 3 : 
         entry.mood === 'bad' ? 2 : 1,
  mood: entry.mood
}));

// Count occurrences of each mood
const moodCounts = moods.map(mood => ({
  name: mood.label,
  value: moodHistory.filter(entry => entry.mood === mood.value).length,
  color: mood.color
}));

const MoodTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const moodLabel = moods.find(m => m.value === data.mood)?.label;
    
    return (
      <div className="bg-white p-2 border rounded shadow-sm">
        <p className="text-sm">{`${data.date}: ${moodLabel}`}</p>
      </div>
    );
  }
  
  return null;
};

const Mood: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center mb-6">
          <Smile className="h-8 w-8 text-primary mr-3" />
          <h1 className="text-3xl font-bold text-foreground">Mood Tracker</h1>
        </div>
        
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Track your daily moods to gain insights into your emotional patterns and identify what influences your mental wellbeing.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-1">
            <MoodTracker />
          </div>
          
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Your Mood History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                    <XAxis dataKey="date" />
                    <YAxis
                      domain={[0, 5]}
                      ticks={[1, 2, 3, 4, 5]} 
                      tickFormatter={(value) => {
                        const labels = ['', 'Awful', 'Bad', 'Okay', 'Good', 'Great'];
                        return labels[value];
                      }}
                    />
                    <Tooltip content={<MoodTooltip />} />
                    <Bar 
                      dataKey="value" 
                      fill="#8884d8"
                      radius={[4, 4, 0, 0]}
                      barSize={30}
                    />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="h-5 w-5 mr-2" />
              Mood Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={moodCounts} layout="vertical" margin={{ top: 20, right: 20, bottom: 20, left: 60 }}>
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip />
                  <Bar 
                    dataKey="value" 
                    radius={[0, 4, 4, 0]}
                    barSize={30}
                  >
                    {moodCounts.map((entry, index) => (
                      <rect 
                        key={`rect-${index}`} 
                        fill={entry.color} 
                      />
                    ))}
                  </Bar>
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Mood;
