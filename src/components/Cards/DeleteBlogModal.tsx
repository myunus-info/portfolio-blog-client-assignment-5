import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { deleteBlog } from '@/actions/deleteBlog';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';

export function DeleteBlogModal({ id, blogTitle }: { id: string; blogTitle: string }) {
  const handleDelete = async () => {
    const blog = await deleteBlog(id);
    if (blog) {
      toast.success('Blog deleted successfully');
      redirect('/dashboard/blogs');
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <p>
          Do you really want to delete the blog &quot;{blogTitle}&quot;? This action cannot be
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
