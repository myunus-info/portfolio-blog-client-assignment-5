'use server';

export const deleteProject = async (id: string) => {
  const res = await fetch(`https://personal-portfolio-blog-server.vercel.app/api/projects/${id}`, {
    method: 'DELETE',
  });

  return await res.json();
};
