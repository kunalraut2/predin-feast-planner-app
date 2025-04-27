
import React from 'react';
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPinIcon, SearchIcon } from "lucide-react";
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-16 px-4 bg-white/90 rounded-2xl shadow-2xl backdrop-blur-sm">
        <h1 className="text-5xl font-bold mb-6 text-dark-purple">
          Predin
          <span className="text-primary-purple block text-3xl mt-2">
            Prebooking Dining Planner
          </span>
        </h1>
        
        <p className="text-xl text-neutral-gray mb-8 max-w-2xl mx-auto leading-relaxed">
          Simplify your dining experience with easy table reservations and personalized dining plans.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input 
                placeholder="Search for restaurants, cuisine, or location" 
                className="w-full h-12 pl-4 pr-12 rounded-lg"
              />
            </div>
            <Button className="bg-primary-purple hover:bg-secondary-purple md:w-auto h-12">
              <SearchIcon className="mr-2 h-5 w-5" /> Search
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/bookings">
            <Button className="bg-primary-purple hover:bg-secondary-purple text-white transition-colors duration-300 w-full sm:w-auto">
              <CalendarIcon className="mr-2" /> Book a Table
            </Button>
          </Link>
          <Link to="/restaurants">
            <Button variant="outline" className="border-primary-purple text-primary-purple hover:bg-soft-purple/20 w-full sm:w-auto">
              <MapPinIcon className="mr-2" /> Find Restaurants
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Featured Restaurants Section */}
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-dark-purple">Featured Restaurants</h2>
          <p className="text-neutral-gray">Discover top dining experiences in your area</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3" 
                alt="Pasta Paradise" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">Pasta Paradise</h3>
              <p className="text-sm text-neutral-gray mb-2">Italian Cuisine</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-1 text-neutral-gray" />
                  <span className="text-xs text-neutral-gray">2 miles away</span>
                </span>
                <Link to="/restaurants">
                  <Button variant="link" className="text-primary-purple p-0 h-auto">View Details</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3" 
                alt="Sushi Supreme" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">Sushi Supreme</h3>
              <p className="text-sm text-neutral-gray mb-2">Japanese Cuisine</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-1 text-neutral-gray" />
                  <span className="text-xs text-neutral-gray">1.5 miles away</span>
                </span>
                <Link to="/restaurants">
                  <Button variant="link" className="text-primary-purple p-0 h-auto">View Details</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3" 
                alt="Spice Garden" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">Spice Garden</h3>
              <p className="text-sm text-neutral-gray mb-2">Indian Cuisine</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-1 text-neutral-gray" />
                  <span className="text-xs text-neutral-gray">3 miles away</span>
                </span>
                <Link to="/restaurants">
                  <Button variant="link" className="text-primary-purple p-0 h-auto">View Details</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-6">
          <Link to="/restaurants">
            <Button variant="outline" className="border-primary-purple text-primary-purple hover:bg-soft-purple/20">
              View All Restaurants
            </Button>
          </Link>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="bg-white/90 rounded-2xl shadow-md backdrop-blur-sm p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-dark-purple">How Predin Works</h2>
          <p className="text-neutral-gray">Simple steps to enhance your dining experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-soft-purple rounded-full p-4 mb-4">
              <SearchIcon className="h-8 w-8 text-primary-purple" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Find</h3>
            <p className="text-neutral-gray">Discover restaurants and browse their menus</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-soft-purple rounded-full p-4 mb-4">
              <CalendarIcon className="h-8 w-8 text-primary-purple" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Book</h3>
            <p className="text-neutral-gray">Reserve your table in just a few clicks</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-soft-purple rounded-full p-4 mb-4">
              <svg className="h-8 w-8 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Enjoy</h3>
            <p className="text-neutral-gray">Experience a seamless dining experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
