'use client'
import { Button, Form, Input, Textarea } from "@heroui/react";
import { createNoteAction } from "../util/actions";

export default function CreateNote() {
    return (
        <Form action={createNoteAction} className="lg:w-1/2 m-auto">
            <Input name="title" label="Title" />
            <Textarea name="content" label="Content" />
            <Button className="bg-blue-700 m-auto" type="submit" onPress={function temp() {
                location.href = location.href
            }}>Create</Button>
        </Form>
    )
}