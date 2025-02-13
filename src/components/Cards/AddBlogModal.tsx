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
import { useState } from 'react';
import Form from 'next/form';
import { createBlog } from '@/actions/createBlog';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';

export function AddBlogModal() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (data: FormData) => {
    const blog = await createBlog(data);
    if (blog) {
      toast.success('Blog created successfully');
      redirect('/dashboard/blogs');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Add New Blog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a New Blog</DialogTitle>
        </DialogHeader>

        <Form action={handleSubmit} className="space-y-4">
          <Input
            name="title"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <Textarea
            name="content"
            placeholder="Content"
            value={content}
            onChange={e => setContent(e.target.value)}
            required
          />
          <Input
            name="image"
            placeholder="Image URL"
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            required
          />
          <Input
            name="category"
            placeholder="Category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
          />
          <Button type="submit" variant="default">
            Submit
          </Button>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
