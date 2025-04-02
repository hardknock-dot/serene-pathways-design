
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle, BookOpen, Calendar, Edit, Trash } from 'lucide-react';

interface JournalEntry {
  id: number;
  title: string;
  content: string;
  date: string;
}

const Journal: React.FC = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: 1,
      title: 'Finding peace in the morning',
      content: 'Today I woke up early and practiced mindfulness for 10 minutes. It really helped me feel centered for the rest of the day.',
      date: '2023-08-15'
    },
    {
      id: 2,
      title: 'Overcoming a challenge',
      content: 'I was feeling anxious about my presentation, but I used deep breathing techniques and it helped me stay calm and focused.',
      date: '2023-08-14'
    }
  ]);
  
  const [newEntry, setNewEntry] = useState({
    title: '',
    content: ''
  });
  
  const { toast } = useToast();
  
  const handleAddEntry = () => {
    if (newEntry.title.trim() && newEntry.content.trim()) {
      const today = new Date().toISOString().split('T')[0];
      
      setEntries([
        {
          id: Date.now(),
          title: newEntry.title,
          content: newEntry.content,
          date: today
        },
        ...entries
      ]);
      
      setNewEntry({
        title: '',
        content: ''
      });
      
      toast({
        title: "Journal entry added",
        description: "Your thoughts have been saved successfully.",
      });
    }
  };
  
  const handleDeleteEntry = (id: number) => {
    setEntries(entries.filter(entry => entry.id !== id));
    
    toast({
      title: "Entry deleted",
      description: "Your journal entry has been removed.",
    });
  };
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center mb-6">
          <BookOpen className="h-8 w-8 text-primary mr-3" />
          <h1 className="text-3xl font-bold text-foreground">Journal</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PlusCircle className="h-5 w-5 mr-2" />
                  New Entry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input 
                      id="title" 
                      value={newEntry.title}
                      onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
                      placeholder="What's on your mind?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="content">Your thoughts</Label>
                    <Textarea 
                      id="content"
                      value={newEntry.content}
                      onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}
                      placeholder="Write freely about your feelings, thoughts, and experiences..."
                      className="min-h-32"
                    />
                  </div>
                  
                  <Button 
                    onClick={handleAddEntry}
                    className="w-full" 
                    disabled={!newEntry.title.trim() || !newEntry.content.trim()}
                  >
                    Save Entry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Your Journal Entries</h2>
            
            {entries.length === 0 ? (
              <Card>
                <CardContent className="p-6 text-center text-muted-foreground">
                  No journal entries yet. Start writing to record your thoughts!
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {entries.map((entry) => (
                  <Card key={entry.id} className="card-hover-effect">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-lg">{entry.title}</h3>
                        <div className="flex items-center space-x-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => handleDeleteEntry(entry.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-xs text-muted-foreground mb-3">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(entry.date)}
                      </div>
                      
                      <p className="whitespace-pre-line">{entry.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Journal;
