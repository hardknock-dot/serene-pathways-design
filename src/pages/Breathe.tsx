
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import BreathingExercise from '@/components/BreathingExercise';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wind } from 'lucide-react';

const Breathe: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center mb-6">
          <Wind className="h-8 w-8 text-primary mr-3" />
          <h1 className="text-3xl font-bold text-foreground">Breathing Exercises</h1>
        </div>
        
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Breathing exercises can help reduce stress and anxiety, improve lung function, and promote relaxation.
          Try one of these techniques whenever you need to center yourself.
        </p>
        
        <Tabs defaultValue="4-7-8">
          <TabsList className="mb-6">
            <TabsTrigger value="4-7-8">4-7-8 Breathing</TabsTrigger>
            <TabsTrigger value="box">Box Breathing</TabsTrigger>
            <TabsTrigger value="deep">Deep Breathing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="4-7-8" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>4-7-8 Breathing Technique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The 4-7-8 breathing technique, developed by Dr. Andrew Weil, is a breathing pattern that can help reduce anxiety, help you fall asleep, and manage cravings.
                </p>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>Exhale completely through your mouth, making a whoosh sound.</li>
                  <li>Close your mouth and inhale quietly through your nose to a mental count of 4.</li>
                  <li>Hold your breath for a count of 7.</li>
                  <li>Exhale completely through your mouth, making a whoosh sound to a count of 8.</li>
                  <li>This is one breath. Now inhale again and repeat the cycle three more times.</li>
                </ol>
              </CardContent>
            </Card>
            
            <div className="max-w-md mx-auto">
              <BreathingExercise />
            </div>
          </TabsContent>
          
          <TabsContent value="box" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Box Breathing Technique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Box breathing, also known as square breathing, is a technique that can help calm your mind, reduce stress, and improve focus. It's often used by athletes, police officers, and nurses.
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Slowly exhale all of your air out.</li>
                  <li>Inhale through your nose to a count of 4.</li>
                  <li>Hold your breath for a count of 4.</li>
                  <li>Exhale through your mouth for a count of 4.</li>
                  <li>Hold your breath for a count of 4.</li>
                  <li>Repeat this cycle at least 4 times.</li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="deep" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Deep Breathing Technique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Deep breathing is a simple yet powerful relaxation technique. It's easy to learn, can be practiced almost anywhere, and provides a quick way to reduce stress.
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Sit comfortably with your back straight.</li>
                  <li>Put one hand on your chest and the other on your stomach.</li>
                  <li>Breathe in deeply through your nose, letting your stomach push your hand out. Your chest should not move.</li>
                  <li>Breathe out through pursed lips as if you were whistling. Feel the hand on your stomach go in and use it to push all the air out.</li>
                  <li>Repeat this cycle 3 to 10 times, taking your time with each breath.</li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Breathe;
