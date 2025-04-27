
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CalendarIcon, MenuIcon, HomeIcon, MapPinIcon, UserIcon } from "lucide-react";

const NavBar = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary-purple">
            Predin
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-neutral-gray hover:text-primary-purple transition-colors font-medium flex items-center">
            <HomeIcon className="mr-1 h-4 w-4" /> Home
          </Link>
          <Link to="/restaurants" className="text-neutral-gray hover:text-primary-purple transition-colors font-medium flex items-center">
            <MapPinIcon className="mr-1 h-4 w-4" /> Restaurants
          </Link>
          <Link to="/menu" className="text-neutral-gray hover:text-primary-purple transition-colors font-medium flex items-center">
            <MenuIcon className="mr-1 h-4 w-4" /> Menu
          </Link>
          <Link to="/bookings" className="text-neutral-gray hover:text-primary-purple transition-colors font-medium flex items-center">
            <CalendarIcon className="mr-1 h-4 w-4" /> Bookings
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/profile">
            <Button variant="ghost" className="rounded-full p-2">
              <UserIcon className="h-5 w-5 text-primary-purple" />
            </Button>
          </Link>
          <Link to="/bookings" className="hidden md:block">
            <Button className="bg-primary-purple hover:bg-secondary-purple text-white transition-colors">
              Book a Table
            </Button>
          </Link>
          <Button className="md:hidden" variant="ghost">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
