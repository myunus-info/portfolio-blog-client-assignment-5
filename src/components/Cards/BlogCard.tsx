'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { UpdateBlogModal } from './UpdateBlogModal';
import { DeleteBlogModal } from './DeleteBlogModal';

export type TBlogCard = {
  _id: string;
  title: string;
  content: string;
  image: string;
  category: string;
};

export default function BlogCard({ title, content, image, category, _id }: TBlogCard) {
  const router = useRouter();
  return (
    <Card className="w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
      <Image
        src={image}
        alt={title || 'blog-image'}
        width={400}
        height={144}
        className="w-full h-36 object-cover"
      />
      <CardHeader>
        <Badge className="mb-2">{category}</Badge>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-3">{content}</p>
        <div className="mt-4 flex justify-between items-center">
          <Button onClick={() => router.push(`/dashboard/blogs/${_id}`)} variant="default">
            View Details
          </Button>
          <UpdateBlogModal {...{ title, content, image, category, _id }} />
          <DeleteBlogModal id={_id} blogTitle={title} />
        </div>
      </CardContent>
    </Card>
  );
}
