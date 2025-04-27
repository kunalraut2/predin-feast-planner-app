
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and basil",
    price: 12.99,
    category: "Main Course",
    isVegetarian: true,
    isGlutenFree: false,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Chicken Alfredo",
    description: "Creamy pasta with grilled chicken and parmesan",
    price: 15.99,
    category: "Main Course",
    isVegetarian: false,
    isGlutenFree: false,
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with caesar dressing and croutons",
    price: 9.99,
    category: "Starter",
    isVegetarian: true,
    isGlutenFree: false,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center",
    price: 8.99,
    category: "Dessert",
    isVegetarian: true,
    isGlutenFree: false,
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
  }
];

const Menu = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
        <p className="text-lg text-neutral-gray">Explore our delicious options</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{item.name}</CardTitle>
                <span className="font-bold text-primary-purple">${item.price}</span>
              </div>
              <CardDescription>{item.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-gray">{item.description}</p>
            </CardContent>
            <CardFooter className="flex gap-2">
              {item.isVegetarian && (
                <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-200">Vegetarian</Badge>
              )}
              {item.isGlutenFree && (
                <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-200">Gluten Free</Badge>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Menu;
