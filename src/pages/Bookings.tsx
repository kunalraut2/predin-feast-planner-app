
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

const Bookings = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Book a Table</h1>
      <p className="text-lg text-neutral-gray mb-6">Reserve your dining experience in advance</p>
      
      <Card>
        <CardHeader>
          <CardTitle>Reservation Details</CardTitle>
          <CardDescription>Please fill in the information to make your booking</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="restaurant">Restaurant</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a restaurant" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pasta-paradise">Pasta Paradise</SelectItem>
                  <SelectItem value="sushi-supreme">Sushi Supreme</SelectItem>
                  <SelectItem value="spice-garden">Spice Garden</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select number" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? 'Person' : 'People'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label>Time</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="17:00">5:00 PM</SelectItem>
                  <SelectItem value="17:30">5:30 PM</SelectItem>
                  <SelectItem value="18:00">6:00 PM</SelectItem>
                  <SelectItem value="18:30">6:30 PM</SelectItem>
                  <SelectItem value="19:00">7:00 PM</SelectItem>
                  <SelectItem value="19:30">7:30 PM</SelectItem>
                  <SelectItem value="20:00">8:00 PM</SelectItem>
                  <SelectItem value="20:30">8:30 PM</SelectItem>
                  <SelectItem value="21:00">9:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your full name" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email address" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="Your phone number" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
            <Input id="specialRequests" placeholder="Any special requirements or notes" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-primary-purple hover:bg-secondary-purple">Confirm Reservation</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Bookings;
