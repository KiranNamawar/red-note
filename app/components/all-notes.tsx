'use client'
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { Note } from "@prisma/client";

export default function AllNotes({notes}: {notes : Note[]}) {
    return (
        <>
            <h2 className="text-2xl text-orange-300 font-bold mt-4">All Notes</h2>
            <div className="m-4 grid md:grid-cols-3 gap-4">
                {notes.map(note => (
                    <Card className="bg-gray-700" id={note.id} key={note.id}>
                        <CardHeader className="font-bold text-blue-500">{note.title}</CardHeader>
                        <CardBody className="font-serif text-white">{note.content}</CardBody>
                        <CardFooter className="text-sm">{note.createdAt.toDateString()}</CardFooter>
                    </Card>
                ))}
            </div>
        </>
    )
}