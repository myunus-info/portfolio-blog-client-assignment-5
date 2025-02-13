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
import { toast } from 'sonner';
import { redirect } from 'next/navigation';
import { createProject } from '@/actions/createProject';

export function AddProjectModal() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (data: FormData) => {
    const project = await createProject(data);
    if (project) {
      toast.success('Project created successfully');
      redirect('/dashboard/projects');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Add New Project</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a New Project</DialogTitle>
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
            name="description"
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
          <Input
            name="image"
            placeholder="Image URL"
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
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
