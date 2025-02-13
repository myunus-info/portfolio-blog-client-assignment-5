import Header from '@/components/Header/Header';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React, { ReactNode } from 'react';
import { Toaster } from 'sonner';

export type TUserSessionProps = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};

const CommonLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Header session={session as TUserSessionProps} />
      <main>{children}</main>
      <Toaster />
    </div>
  );
};

export default CommonLayout;
