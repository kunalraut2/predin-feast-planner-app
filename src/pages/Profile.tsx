
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, SettingsIcon, UserIcon, PencilIcon } from "lucide-react";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Sample user data - would be replaced with actual auth data
const userData = {
  id: "user-123",
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://i.pravatar.cc/150"
};

// Sample reservations - would be fetched from database
const initialReservations = [
  {
    id: 1,
    restaurant: "Pasta Paradise",
    date: new Date(2025, 4, 30, 19, 0), // May 30, 2025, 7:00 PM
    guests: 2,
    status: "confirmed"
  },
  {
    id: 2,
    restaurant: "Sushi Supreme",
    date: new Date(2025, 5, 15, 20, 30), // June 15, 2025, 8:30 PM
    guests: 4,
    status: "pending"
  }
];

const Profile = () => {
  const [reservations, setReservations] = useState(initialReservations);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: userData.name,
    email: userData.email,
    phone: "+1 (555) 123-4567",
    avatar: userData.avatar
  });
  
  const [editForm, setEditForm] = useState({
    name: userProfile.name,
    email: userProfile.email,
    phone: userProfile.phone
  });
  
  const { toast } = useToast();
  
  // Fetch user's bookings
  useEffect(() => {
    const fetchUserBookings = async () => {
      try {
        // In a real implementation, we would use auth user id
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .limit(10);
          
        if (error) throw error;
        
        if (data && data.length) {
          console.log("Fetched user bookings:", data);
          // Transform data format as needed
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    
    fetchUserBookings();
  }, []);
  
  const handleEditProfile = () => {
    setEditForm({
      name: userProfile.name,
      email: userProfile.email,
      phone: userProfile.phone
    });
    setIsEditDialogOpen(true);
  };
  
  const handleSaveProfile = async () => {
    try {
      // In a real implementation, we would update the user profile in the database
      // For now, we'll just update the local state
      setUserProfile({
        ...userProfile,
        name: editForm.name,
        email: editForm.email,
        phone: editForm.phone
      });
      
      setIsEditDialogOpen(false);
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully."
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Update failed",
        description: "There was an error updating your profile. Please try again.",
        variant: "destructive"
      });
    }
  };
  
  const handleCancelReservation = async (id) => {
    try {
      // In a real implementation, we would update the booking status in the database
      const updatedReservations = reservations.filter(res => res.id !== id);
      setReservations(updatedReservations);
      
      toast({
        title: "Reservation cancelled",
        description: "Your reservation has been cancelled successfully."
      });
    } catch (error) {
      console.error("Error cancelling reservation:", error);
      toast({
        title: "Cancellation failed",
        description: "There was an error cancelling your reservation. Please try again.",
        variant: "destructive"
      });
    }
  };
  
  const handleModifyReservation = (id) => {
    toast({
      title: "Feature coming soon",
      description: "Reservation modification will be available in the next update."
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={userProfile.avatar} alt="Profile picture" />
                  <AvatarFallback><UserIcon className="h-12 w-12" /></AvatarFallback>
                </Avatar>
                <h2 className="mt-4 text-xl font-semibold">{userProfile.name}</h2>
                <p className="text-neutral-gray">{userProfile.email}</p>
                <p className="text-sm text-neutral-gray">{userProfile.phone}</p>
                <Button 
                  className="mt-4 w-full" 
                  variant="outline"
                  onClick={handleEditProfile}
                >
                  <PencilIcon className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:w-2/3">
          <Tabs defaultValue="reservations">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="reservations">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Reservations
              </TabsTrigger>
              <TabsTrigger value="settings">
                <SettingsIcon className="mr-2 h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="reservations" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>My Reservations</CardTitle>
                  <CardDescription>View and manage your dining reservations</CardDescription>
                </CardHeader>
                <CardContent>
                  {reservations.length > 0 ? (
                    <div className="space-y-4">
                      {reservations.map((reservation) => (
                        <Card key={reservation.id}>
                          <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row justify-between">
                              <div>
                                <h3 className="font-semibold">{reservation.restaurant}</h3>
                                <p className="text-neutral-gray">
                                  {format(reservation.date, "PPP")} at {format(reservation.date, "p")}
                                </p>
                                <p className="text-sm">{reservation.guests} {reservation.guests === 1 ? 'guest' : 'guests'}</p>
                              </div>
                              <div className="mt-4 md:mt-0 flex items-center">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                  reservation.status === 'confirmed' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                                </span>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="ml-2"
                                  onClick={() => handleModifyReservation(reservation.id)}
                                >
                                  Modify
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="text-destructive"
                                  onClick={() => handleCancelReservation(reservation.id)}
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <CalendarIcon className="mx-auto h-12 w-12 text-neutral-gray/50" />
                      <p className="mt-4 text-neutral-gray">You don't have any reservations yet</p>
                      <Button className="mt-4 bg-primary-purple hover:bg-secondary-purple">
                        Book a Table
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Notification Preferences</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="email-notifications">Email notifications</Label>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm" className="h-8">On</Button>
                            <Button variant="ghost" size="sm" className="h-8">Off</Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="sms-notifications">SMS notifications</Label>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm" className="h-8">On</Button>
                            <Button variant="ghost" size="sm" className="h-8">Off</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Privacy Settings</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="share-profile">Share my dining preferences</Label>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="h-8">Yes</Button>
                            <Button variant="outline" size="sm" className="h-8">No</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-primary-purple hover:bg-secondary-purple">Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Edit Profile Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Your Profile</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 my-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Name</Label>
              <Input 
                id="edit-name" 
                value={editForm.name}
                onChange={(e) => setEditForm({...editForm, name: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="edit-email">Email</Label>
              <Input 
                id="edit-email" 
                type="email"
                value={editForm.email}
                onChange={(e) => setEditForm({...editForm, email: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="edit-phone">Phone</Label>
              <Input 
                id="edit-phone" 
                type="tel"
                value={editForm.phone}
                onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Profile Picture</Label>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={userProfile.avatar} />
                  <AvatarFallback><UserIcon className="h-8 w-8" /></AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">
                  Change Picture
                </Button>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button 
              className="bg-primary-purple hover:bg-secondary-purple"
              onClick={handleSaveProfile}
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
