import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';
import { deleteProject } from '@/actions/deleteProject';

export function DeleteProjectModal({ id, projectTitle }: { id: string; projectTitle: string }) {
  const handleDelete = async () => {
    const blog = await deleteProject(id);
    if (blog) {
      toast.success('Project deleted successfully');
      redirect('/dashboard/projects');
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-red-600 w-full">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <p>
          Do you really want to delete the project &quot;{projectTitle}&quot;? This action cannot be
          undone.
        </p>
        <DialogFooter>
          <Button onClick={handleDelete} variant="destructive">
            Confirm Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
