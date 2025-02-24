'use client';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
} from '@heroui/react';
import { Note } from '@prisma/client';
import { deleteAllNotesAction } from '../util/actions';
import Link from 'next/link';
import lastUpdated from '../util/last-updated';

export default function AllNotes({ notes }: { notes: Note[] }) {
    return (
        <>
            <Divider className="my-4" />
            <div className="flex justify-around">
                <h2 className="mt-4 text-2xl font-bold text-orange-300">
                    All Notes
                </h2>
                <Button className="bg-blue-700" onPress={deleteAllNotesAction}>
                    Refresh
                </Button>
            </div>
            <div className="m-4 grid gap-4 md:grid-cols-3">
                {notes.map((note) => (
                    <Link href={`notes/${note.id}`} key={note.id}>
                        <Card className="">
                            <CardHeader className="font-bold text-blue-500">
                                {note.title}
                            </CardHeader>
                            <CardBody className="font-sans text-white">
                                {note.content}
                            </CardBody>
                            <CardFooter className="flex justify-end text-sm text-yellow-200">
                                {lastUpdated(note.updatedAt)}
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </>
    );
}
