import { TBlogCard } from '@/components/Cards/BlogCard';
import BlogDetailsCard from '@/components/Home/BlogDetailsCard';

type TBlogId = {
  params: Promise<{ id: string }>;
};

export const generateStaticParams = async () => {
  const res = await fetch('https://personal-portfolio-blog-server.vercel.app/api/blogs');
  const blogs = await res.json();

  return blogs?.data?.slice(0, 3).map((blog: TBlogCard) => ({ id: blog._id }));
};

export const generateMetadata = async ({ params }: TBlogId) => {
  const { id } = await params;
  const res = await fetch(`https://personal-portfolio-blog-server.vercel.app/api/blogs/${id}`);
  const blog = await res.json();

  return {
    title: blog?.data?.title,
    description: blog?.data?.content,
  };
};

const BlogDetails = async ({ params }: TBlogId) => {
  const { id } = await params;
  const res = await fetch(`https://personal-portfolio-blog-server.vercel.app/api/blogs/${id}`);
  const blog = await res.json();

  return (
    <div className="my-10">
      <BlogDetailsCard blog={blog?.data} />
    </div>
  );
};

export default BlogDetails;
