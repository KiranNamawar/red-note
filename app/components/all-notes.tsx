'use client'
import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import { Note } from "@prisma/client";
import { deleteAllNotesAction } from "../util/actions";

export default function AllNotes({notes}: {notes : Note[]}) {
    return (
        <>
            <Divider className="my-4" />
            <div className="flex justify-around">
                <h2 className="text-2xl text-orange-300 font-bold mt-4">All Notes</h2>
                <Button className="bg-blue-700" onPress={deleteAllNotesAction}>Refresh</Button>
            </div>
            <div className="m-4 grid md:grid-cols-3 gap-4">
                {notes.map(note => (
                    <Card className="bg-gray-700" id={note.id} key={note.id}>
                        <CardHeader className="font-bold text-blue-500">{note.title}</CardHeader>
                        <CardBody className="font-serif text-white">{note.content}</CardBody>
                        <CardFooter className="text-sm flex justify-end text-yellow-200">{note.createdAt.toDateString()}</CardFooter>
                    </Card>
                ))}
            </div>
        </>
    )
}