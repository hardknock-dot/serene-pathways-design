
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  onClick?: () => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
  onClick,
}) => {
  return (
    <Card
      className="card-hover-effect cursor-pointer h-full"
      onClick={onClick}
    >
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className={`${color} p-3 rounded-full mb-4`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-sm text-foreground/60">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
