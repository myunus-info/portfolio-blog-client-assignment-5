'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { MoreVertical } from 'lucide-react';
import Image from 'next/image';
import ViewProjectModal from './ViewProjectModal';
import { EditProjectModal } from './EditProjectModal';
import { DeleteProjectModal } from './DeleteProjectModal';

export type TProject = {
  _id: string;
  image: string;
  title: string;
  description: string;
};

export const columns: ColumnDef<TProject>[] = [
  {
    accessorKey: 'image',
    header: 'Image',
    cell: ({ row }) => (
      <Image
        src={row.original.image}
        alt={row.original.title}
        width={50}
        height={50}
        className="rounded-md object-cover"
      />
    ),
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => <span className="font-medium">{row.original.title}</span>,
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => <p className="text-gray-600">{row.original.description.slice(0, 50)}</p>,
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreVertical className="w-5 h-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <ViewProjectModal project={row.original} />
          <EditProjectModal {...row.original} />
          <DeleteProjectModal id={row.original._id} projectTitle={row.original.title} />
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
