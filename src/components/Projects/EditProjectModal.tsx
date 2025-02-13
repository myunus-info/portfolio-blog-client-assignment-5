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
import { useState } from 'react';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';
import { TProject } from './column';
import { updateProject } from '@/actions/updateProject';

export function EditProjectModal({ _id, title, description, image }: TProject) {
  const [newTitle, setTitle] = useState(title);
  const [newDescription, setDescription] = useState(description);
  const [newImageUrl, setImageUrl] = useState(image);

  const handleSubmit = async (data: FormData) => {
    const blog = await updateProject(_id, data);
    if (blog) {
      toast.success('Project updated successfully');
      redirect('/dashboard/projects');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm" className="text-green-600 w-full ">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Project</DialogTitle>
        </DialogHeader>

        <Form action={handleSubmit} className="space-y-4">
          <Input
            name="title"
            placeholder="Title"
            value={newTitle}
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea
            name="description"
            placeholder="Description"
            value={newDescription}
            onChange={e => setDescription(e.target.value)}
          />
          <Input
            name="image"
            placeholder="Image URL"
            value={newImageUrl}
            onChange={e => setImageUrl(e.target.value)}
          />

          <Button type="submit" variant="default">
            Submit
          </Button>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
