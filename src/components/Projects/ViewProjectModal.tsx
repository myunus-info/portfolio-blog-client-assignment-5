'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { TProject } from './column';

const ViewProjectModal = ({ project }: { project: TProject }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-blue-600 w-full">
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{project?.title}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1  gap-6 items-center">
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
            <p className="mt-4 text-gray-700">{project?.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewProjectModal;
