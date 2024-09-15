import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../SideBar';

export const MainLayout: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <main className="flex-1 px-8 bg-slate-900 w-full h-full">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};