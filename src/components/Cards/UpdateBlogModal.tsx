'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Form from 'next/form';
import { updateBlog } from '@/actions/updateBlog';
import { useState } from 'react';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';

export type TBlogCard = {
  _id: string;
  title: string;
  content: string;
  image: string;
  category: string;
};

export function UpdateBlogModal({ _id, title, content, image, category }: TBlogCard) {
  const [newTitle, setTitle] = useState(title);
  const [newContent, setContent] = useState(content);
  const [newImageUrl, setImageUrl] = useState(image);
  const [newCategory, setCategory] = useState(category);

  const handleSubmit = async (data: FormData) => {
    const blog = await updateBlog(_id, data);
    if (blog) {
      toast.success('Blog updated successfully');
      redirect('/dashboard/blogs');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Update</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Blog</DialogTitle>
        </DialogHeader>

        <Form action={handleSubmit} className="space-y-4">
          <Input
            name="title"
            placeholder="Title"
            value={newTitle}
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea
            name="content"
            placeholder="Content"
            value={newContent}
            onChange={e => setContent(e.target.value)}
          />
          <Input
            name="image"
            placeholder="Image URL"
            value={newImageUrl}
            onChange={e => setImageUrl(e.target.value)}
          />
          <Input
            name="category"
            placeholder="Category"
            value={newCategory}
            onChange={e => setCategory(e.target.value)}
          />
          <Button type="submit" variant="default">
            Submit
          </Button>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
