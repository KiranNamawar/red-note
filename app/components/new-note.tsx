'use client'
import { Button, Form, Input, Textarea } from "@heroui/react";
import { db } from "../db";
import { useRef } from "react";

export default function NewNote({ onNoteAdded }) {
   const formRef = useRef(null);
    async function onSubmit (e) {
        e.preventDefault();

        const {title, content} = Object.fromEntries(new FormData(e.target)) as { title: string, content: string };
        const id = await db.notes.add({
            title,
            content,
            created_at: new Date()
        })
        console.log(id, title, content);
        formRef.current.reset();

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