'use server';

export const updateBlog = async (id: string, data: FormData) => {
  const blogData = Object.fromEntries(data.entries());
  const res = await fetch(`https://personal-portfolio-blog-server.vercel.app/api/blogs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blogData),
  });

  const updatedBlog = await res.json();

  return updatedBlog;
};
