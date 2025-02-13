'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { TProject } from '../Projects/column';

const ProjectDetailsCard = ({ project }: { project: TProject }) => {
  const router = useRouter();
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 2xl:grid-cols-2 gap-6 items-center">
      <div className="lg:aspect-[16/9] w-full">
        <Image
          src={project?.image}
          alt={project?.title}
          width={800}
          height={450}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold">{project?.title}</h1>

        <p className="mt-4 text-gray-700">{project?.description}</p>
        <Button onClick={() => router.push('/')} variant="default" className="mt-6">
          Go back
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
