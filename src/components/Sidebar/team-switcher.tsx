'use client';

import * as React from 'react';
import { useSidebar } from '@/components/ui/sidebar';
import logo3 from '../../assets/logo3.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function TeamSwitcher() {
  const { isMobile } = useSidebar();
  const router = useRouter();

  return (
    <div className="flex justify-center items-center">
      <Image
        className={`${isMobile ? 'w-fit' : 'w-[93%]'}  h-16 rounded-sm cursor-pointer`}
        src={logo3}
        alt="blog-logo"
        width={200}
        height={100}
        onClick={() => router.push('/')}
      />
    </div>
  );
}
