import ProjectDetailsCard from '@/components/Home/ProjectDetailsCard';
import { TProject } from '@/components/Projects/column';

type TProjectId = {
  params: Promise<{ id: string }>;
};

export const generateStaticParams = async () => {
  const res = await fetch('https://personal-portfolio-blog-server.vercel.app/api/projects');
  const projects = await res.json();

  return projects?.data?.slice(0, 3)?.map((project: TProject) => ({ id: project._id }));
};

export const generateMetadata = async ({ params }: TProjectId) => {
  const { id } = await params;
  const res = await fetch(`https://personal-portfolio-blog-server.vercel.app/api/projects/${id}`);
  const project = await res.json();

  return {
    title: project?.data?.title,
    description: project?.data?.description,
  };
};

const ProjectDetails = async ({ params }: TProjectId) => {
  const { id } = await params;
  const res = await fetch(`https://personal-portfolio-blog-server.vercel.app/api/projects/${id}`);
  const project = await res.json();

  return (
    <div className="my-10">
      <ProjectDetailsCard project={project?.data} />
    </div>
  );
};

export default ProjectDetails;
