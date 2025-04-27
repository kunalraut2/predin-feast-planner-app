
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
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [restaurant, setRestaurant] = useState<string>("");
  const [guests, setGuests] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string>("");
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!restaurant || !guests || !time || !date || !name || !email || !phone) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Format date and time for storage
      const bookingDateTime = new Date(date);
      const [hours, minutes] = time.split(':').map(Number);
      bookingDateTime.setHours(hours, minutes);
      
      // Prepare booking data
      const bookingData = {
        restaurant_id: restaurant,
        booking_date: bookingDateTime.toISOString(),
        guest_count: parseInt(guests),
        special_requests: specialRequests,
        status: 'pending',
        user_id: null, // Will be updated with auth integration
        booking_amount: 0
      };
      
      // Insert booking into database
      const { data, error } = await supabase
        .from('bookings')
        .insert(bookingData)
        .select('id')
        .single();
      
      if (error) throw error;
      
      // Show confirmation dialog
      setShowConfirmation(true);
      
    } catch (error) {
      console.error('Error creating booking:', error);
      toast({
        title: "Booking failed",
        description: "There was an error creating your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const viewBookings = () => {
    setShowConfirmation(false);
    navigate('/profile'); // Redirect to profile page where bookings are shown
  };

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
              <Select value={restaurant} onValueChange={setRestaurant}>
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
              <Select value={guests} onValueChange={setGuests}>
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
              <Select value={time} onValueChange={setTime}>
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
            <Input 
              id="name" 
              placeholder="Your full name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="Your phone number" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
            <Input 
              id="specialRequests" 
              placeholder="Any special requirements or notes" 
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-primary-purple hover:bg-secondary-purple"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Confirm Reservation"}
          </Button>
        </CardFooter>
      </Card>
      
      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reservation Confirmed!</DialogTitle>
            <DialogDescription>
              Your table has been reserved successfully. We look forward to serving you!
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 my-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <p><strong>Restaurant:</strong> {restaurant?.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
              <p><strong>Date & Time:</strong> {date ? format(date, "PPP") : ""} at {time ? `${time.split(':')[0]}:${time.split(':')[1]} ${parseInt(time.split(':')[0]) >= 12 ? 'PM' : 'AM'}` : ""}</p>
              <p><strong>Guests:</strong> {guests} {parseInt(guests) === 1 ? 'person' : 'people'}</p>
            </div>
          </div>
          <DialogFooter>
            <Button 
              className="bg-primary-purple hover:bg-secondary-purple"
              onClick={viewBookings}
            >
              View My Bookings
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Bookings;
