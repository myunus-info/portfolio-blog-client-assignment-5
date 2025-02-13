'use client';

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { TProject } from '../Projects/column';

const ProjectCard = ({ project }: { project: TProject }) => {
  const router = useRouter();
  return (
    <Card key={project.title} className="project-card overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-playfair">{project.title}</CardTitle>
        <CardDescription className="mt-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto pt-0">
        <Button
          onClick={() => router.push(`/projects/${project._id}`)}
          variant="outline"
          className="w-full"
        >
          <Eye className="mr-2 h-4 w-4" /> View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
