import { AddBlogModal } from '@/components/Cards/AddBlogModal';
import BlogCard, { TBlogCard } from '@/components/Cards/BlogCard';
import ContentWrappter from '@/components/ContentWrappter/ContentWrappter';

const Blogs = async () => {
  const res = await fetch('https://personal-portfolio-blog-server.vercel.app/api/blogs', {
    cache: 'no-store',
  });
  const blogs = await res.json();

  return (
    <ContentWrappter breadcrumb1="Blog Management" breadcrumb2="Blogs">
      <div className="container mx-auto">
        <div className="flex justify-between p-6">
          <h1 className="text-2xl font-bold">Manage Blogs</h1>
          <AddBlogModal />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 px-3">
          {blogs?.data?.map((blog: TBlogCard, index: number) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </ContentWrappter>
  );
};

export default Blogs;
