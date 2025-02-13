'use client';

import Image from 'next/image';
import { TBlogCard } from '@/components/Cards/BlogCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const BlogDetailsCard = ({ blog }: { blog: TBlogCard }) => {
  const router = useRouter();
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 2xl:grid-cols-2 gap-6 items-center">
      <div className="lg:aspect-[16/9] w-full">
        <Image
          src={blog?.image}
          alt={blog?.title}
          width={800}
          height={450}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold">{blog?.title}</h1>
        <Badge className="mt-2">{blog?.category}</Badge>
        <p className="mt-4 text-gray-700">{blog?.content}</p>
        <Button onClick={() => router.push('/dashboard/blogs')} variant="default" className="mt-6">
          Back to Blogs
        </Button>
      </div>
    </div>
  );
};

export default BlogDetailsCard;
