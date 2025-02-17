'use client'
import { Button, Form, Input, Textarea } from "@heroui/react";
import { db } from "../db";
import { useRef } from "react";

export default function NewNote({ onNoteAdded }: { onNoteAdded: () => void }) {
   const formRef = useRef<HTMLFormElement>(null);
    async function onSubmit (e: any) {
        e.preventDefault();

        const {title, content} = Object.fromEntries(new FormData(e.target)) as { title: string, content: string };
        const id = await db.notes.add({
            title,
            content,
            created_at: new Date()
        })
        console.log(id, title, content);
        if (formRef.current) {
            formRef.current.reset();
        }

        onNoteAdded()
    }
    return (
        <Form ref={formRef} className="md:w-1/2 w-4/5" onSubmit={onSubmit}>
            <Input name="title" type="text" placeholder="Title" />
            <Textarea name="content" placeholder="Content"></Textarea>
            <Button className="self-center" type="submit">Create</Button>
        </Form>
    )
}