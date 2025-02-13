'use server';

export const createProject = async (data: FormData) => {
  const projectData = Object.fromEntries(data.entries());
  const res = await fetch('https://personal-portfolio-blog-server.vercel.app/api/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(projectData),
  });

  const project = await res.json();

  return project;
};
