import { Badge } from '../ui/badge';
import { TProject } from '../Projects/column';
import ProjectCard from './ProjectCard';

export async function Projects() {
  const res = await fetch('https://personal-portfolio-blog-server.vercel.app/api/projects', {
    cache: 'no-store',
  });
  const projects = await res.json();

  return (
    <section className="py-20 my-10 px-4 bg-secondary/50" id="projects">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          Portfolio
        </Badge>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold">Featured Projects</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.data?.slice(0, 3)?.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}
