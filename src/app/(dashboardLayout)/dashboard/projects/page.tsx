import ContentWrappter from '@/components/ContentWrappter/ContentWrappter';
import { AddProjectModal } from '@/components/Projects/AddProjectModal';
import { columns } from '@/components/Projects/column';
import { DataTable } from '@/components/Projects/data-table';

export default async function DemoPage() {
  const res = await fetch('https://personal-portfolio-blog-server.vercel.app/api/projects', {
    cache: 'no-store',
  });
  const projects = await res.json();

  return (
    <ContentWrappter breadcrumb1="Project Management" breadcrumb2="Projects">
      <div className="container mx-auto">
        <div className="flex justify-between pt-6 px-6">
          <h1 className="text-2xl font-bold">Manage Projects</h1>
          <AddProjectModal />
        </div>
        <div className="container mx-auto py-10 px-5">
          <DataTable columns={columns} data={projects?.data} />
        </div>
      </div>
    </ContentWrappter>
  );
}
