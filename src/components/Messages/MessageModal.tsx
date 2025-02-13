'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { TMessage } from '@/app/(dashboardLayout)/dashboard/messages/page';

interface MessageModalProps {
  message: TMessage;
  onClose: () => void;
}

const MessageModal = ({ message, onClose }: MessageModalProps) => {
  return (
    <Dialog open={!!message} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{message.subject}</DialogTitle>
          <DialogDescription>
            Received on {new Date(message.createdAt).toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            <strong>From:</strong> {message.name} ({message.email})
          </p>
          <p className="text-gray-700">{message.message}</p>
        </div>
        <DialogFooter>
          <Button onClick={onClose} variant="secondary">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MessageModal;
