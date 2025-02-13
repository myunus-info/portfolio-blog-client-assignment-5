'use client';

import * as React from 'react';
import { FolderGit2, LucideNotebookText, Mail } from 'lucide-react';

import { NavMain } from '@/components/Sidebar/nav-main';
import { NavUser } from '@/components/Sidebar/nav-user';
import { TeamSwitcher } from '@/components/Sidebar/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { TUserSessionProps } from '@/app/(commonLayout)/layout';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: 'https://github.com/shadcn.png',
  },
  navMain: [
    {
      title: 'Blog Management',
      url: '#',
      icon: LucideNotebookText,
      isActive: true,
      items: [
        {
          title: 'Blogs',
          url: '/dashboard/blogs',
        },
      ],
    },
    {
      title: 'Project Management',
      url: '#',
      icon: FolderGit2,
      items: [
        {
          title: 'Projects',
          url: '/dashboard/projects',
        },
      ],
    },
    {
      title: 'Message Management',
      url: '#',
      icon: Mail,
      items: [
        {
          title: 'Messages',
          url: '/dashboard/messages',
        },
      ],
    },
  ],
};

export function AppSidebar({ session }: { session: TUserSessionProps }) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={session?.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
