'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { TBlogCard } from '../Cards/BlogCard';

const BlogCard = ({ blog }: { blog: TBlogCard }) => {
  const router = useRouter();
  return (
    <Card key={blog._id} className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          width={300}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-medium">{blog.title}</CardTitle>
        <Badge className="text-sm text-gray-100">Category: {blog.category}</Badge>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{blog.content}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => router.push(`/blogs/${blog._id}`)}
          variant="outline"
          className="w-full"
        >
          <Eye className="mr-2 h-4 w-4" /> View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
