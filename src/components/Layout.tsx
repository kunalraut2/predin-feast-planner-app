
import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-purple to-soft-blue">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="bg-white/90 backdrop-blur-sm mt-auto py-6">
        <div className="container mx-auto px-4 text-center text-neutral-gray">
          <p>© {new Date().getFullYear()} Predin - Prebooking Dining Planner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
