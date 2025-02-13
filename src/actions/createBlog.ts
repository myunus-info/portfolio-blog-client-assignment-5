'use server';

export const createBlog = async (data: FormData) => {
  const blogData = Object.fromEntries(data.entries());
  const res = await fetch('https://personal-portfolio-blog-server.vercel.app/api/blogs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blogData),
  });

  const blog = await res.json();

  return blog;
};
