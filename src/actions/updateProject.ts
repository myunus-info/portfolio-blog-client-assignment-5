'use server';

export const updateProject = async (id: string, data: FormData) => {
  const projectData = Object.fromEntries(data.entries());
  const res = await fetch(`https://personal-portfolio-blog-server.vercel.app/api/projects/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(projectData),
  });

  const updatedProject = await res.json();

  return updatedProject;
};
