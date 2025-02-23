'use client';
import { Button, Form, Input, Textarea } from '@heroui/react';
import { createNoteAction } from '../util/actions';

export default function CreateNote({ userId }: { userId: string }) {
    return (
        <Form action={createNoteAction} className="m-auto lg:w-1/2">
            <Input type="hidden" name="userId" value={userId} />
            <Input name="title" label="Title" />
            <Textarea name="content" label="Content" />
            <Button className="m-auto bg-blue-700" type="submit">
                Create
            </Button>
        </Form>
    );
}
