import { ReactNode } from 'react';
import { Toaster } from 'sonner';

const Providers = ({ children }: { children: ReactNode }) => {
  return <Toaster>{children}</Toast>;
};

export default Providers;
