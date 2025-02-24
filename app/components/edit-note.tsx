'use client';

import { Button, Divider, Form} from '@heroui/react';
import { Note } from '@prisma/client';
import { editNoteAction } from '../util/actions';
import lastUpdated from '../util/last-updated';

export default function EditNote({ note }: { note: Note }) {
    return (
        <Form action={editNoteAction} className="md:w-1/2 md:m-auto m-4 bg-cyan-900 rounded-md">
            <input hidden name="id" defaultValue={note.id} />
            <div className="p-4 m-auto w-full" >
                
                <input
                    className="w-full bg-cyan-900 text-2xl font-semibold text-orange-200"
                    defaultValue={note.title}
                    name="title"
                />
                <Divider />
                <textarea
                    rows={10}
                    className="h-fit w-full bg-cyan-900 p-4"
                    defaultValue={note.content}
                    name="content"
                />
            </div>
            <Button className="m-auto mb-4 bg-orange-100 text-black" type="submit">
                Save
            </Button>
            <div className="m-auto mb-4 text-white">
                {lastUpdated(note.updatedAt)}
            </div>
        </Form>
    );
}
