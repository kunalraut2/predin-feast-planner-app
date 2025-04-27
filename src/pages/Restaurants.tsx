
import React from 'react';
import { MapPinIcon, StarIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const restaurantData = [
  {
    id: 1,
    name: "Pasta Special",
    cuisine: "Indian",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    address: "123 Flour Street, Pasta City",
    phone: "9689545085"
  },
  {
    id: 2,
    name: "Sushi Supreme",
    cuisine: "Japanese",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    address: "456 Rice Avenue, Sushi Town",
    phone: "9689545084"
  },
  {
    id: 3,
    name: "Spice Garden",
    cuisine: "Indian",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    address: "789 Curry Lane, Spice City",
    phone: "9689545083"
  }
];

const Restaurants = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Restaurants</h1>
        <p className="text-lg text-neutral-gray">Find and book the perfect dining experience</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurantData.map((restaurant) => (
          <Card key={restaurant.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={restaurant.image} 
                alt={restaurant.name} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle>{restaurant.name}</CardTitle>
              <CardDescription>{restaurant.cuisine}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-2">
                <MapPinIcon className="h-4 w-4 mr-2 text-neutral-gray" />
                <span className="text-sm text-neutral-gray">{restaurant.address}</span>
              </div>
              <div className="flex items-center mb-2">
                <PhoneIcon className="h-4 w-4 mr-2 text-neutral-gray" />
                <span className="text-sm text-neutral-gray">{restaurant.phone}</span>
              </div>
              <div className="flex items-center">
                <StarIcon className="h-4 w-4 mr-2 text-yellow-500 fill-yellow-500" />
                <span className="font-medium">{restaurant.rating}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-primary-purple hover:bg-secondary-purple w-full">Book a Table</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
