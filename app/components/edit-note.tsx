'use client'

import { Button, Form, Input, Textarea } from "@heroui/react";
import { Note } from "@prisma/client";
import { editNoteAction } from "../util/actions";

export default function EditNote({note}: {note: Note}) {
    return (
        <Form action={editNoteAction} >
            <Input hidden name="id" defaultValue={note.id} />
            <Input defaultValue={note.title} label="Title" name="title" />
            <Textarea defaultValue={note.content} label="Content" name="content" />
            <Button type="submit">Save</Button>
        </Form>
    );

}