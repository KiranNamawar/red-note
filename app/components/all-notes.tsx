'use client';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Modal,
    ModalContent,
    useDisclosure,
} from '@heroui/react';
import { Note } from '@prisma/client';
import lastUpdated from '../util/last-updated';
import { deleteNoteAction } from '../util/actions';
import TipTap from './tip-tap';

export default function AllNotes({ notes }: { notes: Note[] }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <section className="m-auto my-4 flex w-4/5 flex-col gap-4 md:w-1/2">
            {notes.map((note) => (
                <Card
                    key={note.id}
                    className="rounded-md border-2 border-red-500"
                >
                    <CardHeader className="flex justify-between">
                        <Button onPress={onOpen}>Edit </Button>
                        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                            <TipTap
                                                note={note}
                                            userId={note.id}
                                            onClose={onClose}
                                            />
                                        
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                        <Button
                            onPress={() => deleteNoteAction({ id: note.id })}
                        >
                            Delete
                        </Button>
                    </CardHeader>
                    <CardBody
                        dangerouslySetInnerHTML={{ __html: note.content }}
                    />
                    <CardFooter className="flex justify-end text-small text-gray-400">
                        {lastUpdated(note.updatedAt)}
                    </CardFooter>
                </Card>
            ))}
        </section>
    );
}
