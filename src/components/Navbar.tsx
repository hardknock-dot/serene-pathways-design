
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-sm py-3 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu size={20} />
          </Button>
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-wellness-blue bg-clip-text text-transparent">Serene</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/meditate" className="text-foreground hover:text-primary transition-colors">Meditate</Link>
          <Link to="/journal" className="text-foreground hover:text-primary transition-colors">Journal</Link>
          <Link to="/mood" className="text-foreground hover:text-primary transition-colors">Mood</Link>
          <Link to="/breathe" className="text-foreground hover:text-primary transition-colors">Breathe</Link>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-foreground">
            <Bell size={20} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground rounded-full">
                <User size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
