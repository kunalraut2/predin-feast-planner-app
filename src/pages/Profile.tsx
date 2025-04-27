
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, SettingsIcon, UserIcon } from "lucide-react";
import { format } from "date-fns";

const reservations = [
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
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="https://i.pravatar.cc/150" alt="Profile picture" />
                  <AvatarFallback><UserIcon className="h-12 w-12" /></AvatarFallback>
                </Avatar>
                <h2 className="mt-4 text-xl font-semibold">John Doe</h2>
                <p className="text-neutral-gray">john.doe@example.com</p>
                <Button className="mt-4 w-full" variant="outline">Edit Profile</Button>
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
                                <Button variant="ghost" size="sm" className="ml-2">Modify</Button>
                                <Button variant="ghost" size="sm" className="text-destructive">Cancel</Button>
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
                        {/* More settings would go here */}
                        <p className="text-sm text-neutral-gray">Configure your notification settings</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Privacy Settings</h3>
                      <div className="space-y-2">
                        <p className="text-sm text-neutral-gray">Manage your privacy preferences</p>
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
    </div>
  );
};

export default Profile;
