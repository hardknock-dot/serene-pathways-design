
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { BookOpenText } from 'lucide-react';

const JournalCard: React.FC = () => {
  const [entry, setEntry] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = () => {
    if (entry.trim()) {
      toast({
        title: "Journal entry saved",
        description: "Your thoughts have been recorded.",
      });
      setEntry('');
    }
  };
  
  return (
    <Card className="card-hover-effect">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center">
          <BookOpenText className="w-5 h-5 mr-2 text-primary" />
          Quick Journal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write down your thoughts..."
          className="mb-3 min-h-24"
        />
        <Button
          onClick={handleSubmit}
          className="w-full"
          disabled={!entry.trim()}
        >
          Save Entry
        </Button>
      </CardContent>
    </Card>
  );
};

export default JournalCard;
