'use server';

export const deleteBlog = async (id: string) => {
  const res = await fetch(`https://personal-portfolio-blog-server.vercel.app/api/blogs/${id}`, {
    method: 'DELETE',
  });

  return await res.json();
};
