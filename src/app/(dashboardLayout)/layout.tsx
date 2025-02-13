import { AppSidebar } from '@/components/Sidebar/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React, { ReactNode } from 'react';
import { Toaster } from 'sonner';
import { TUserSessionProps } from '../(commonLayout)/layout';

const Dashboard = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar session={session as TUserSessionProps} />
        <main>{children}</main>
        <Toaster />
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
