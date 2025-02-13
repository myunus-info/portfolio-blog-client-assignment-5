import React from 'react';
import { Badge } from '../ui/badge';
import { TBlogCard } from '../Cards/BlogCard';
import BlogCard from './BlogCard';

const Blogs = async () => {
  const res = await fetch('https://personal-portfolio-blog-server.vercel.app/api/blogs', {
    cache: 'no-store',
  });
  const blogs = await res.json();

  return (
    <section className="px-4 py-20 bg-[#f9f9fA]" id="blogs">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Blogs
          </Badge>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">Latest Blogs</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs?.data?.slice(0, 3)?.map((blog: TBlogCard) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
