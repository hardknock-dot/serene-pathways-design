
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface QuoteCardProps {
  quote: string;
  author: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author }) => {
  return (
    <Card className="card-gradient card-hover-effect overflow-hidden">
      <CardContent className="p-6 relative">
        <Quote size={24} className="text-primary/20 absolute top-4 left-4" />
        <div className="pt-6">
          <p className="text-lg font-medium text-foreground/80 mb-3 italic">
            "{quote}"
          </p>
          <p className="text-sm text-foreground/60 text-right">— {author}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;
