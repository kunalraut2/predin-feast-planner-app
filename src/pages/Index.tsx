
import React from 'react';
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPinIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-purple to-soft-blue flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center bg-white/90 rounded-2xl shadow-2xl backdrop-blur-sm">
        <h1 className="text-5xl font-bold mb-6 text-dark-purple">
          Predin 
          <span className="text-primary-purple block text-3xl mt-2">
            Preboking Dining Planner
          </span>
        </h1>
        
        <p className="text-xl text-neutral-gray mb-8 leading-relaxed">
          Simplify your dining experience with easy table reservations and personalized dining plans.
        </p>
        
        <div className="flex justify-center space-x-4">
          <Button className="bg-primary-purple hover:bg-secondary-purple text-white transition-colors duration-300">
            <CalendarIcon className="mr-2" /> Book a Table
          </Button>
          <Button variant="outline" className="border-primary-purple text-primary-purple hover:bg-soft-purple/20">
            <MapPinIcon className="mr-2" /> Find Restaurants
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
