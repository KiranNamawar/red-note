'use client'

import { Button, Card, CardBody } from "@heroui/react"
import { useEffect, useState } from "react"
import { db } from "../db"

export default function AllNotes({ noteCount, onRefesh }: any) {
    const [notes, setNotes] = useState([{ id: 0, title: "", content: "" }]);
    
    async function refresh() {
        if (noteCount === 0) {
            location.href = location.href
        }
        await db.notes.clear();
        onRefesh();
    }

    useEffect(() => {
        async function getNotes() {
            const notes = await db.notes.toArray();
            setNotes(notes);
        }
        getNotes();
    }, [noteCount]);
    return (
        <section className="md:w-1/2 w-4/5 py-5">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-orange-200">All Notes</h2>
                <Button className="bg-blue-500 text-white" onPress={refresh}>Refresh</Button>
            </div>
            {notes.map(note => (
                <Card key={note.id} className="my-2">
                    <CardBody>
                        <h3 className="text-xl font-semibold text-blue-300">{note.title}</h3>
                        <p className="text-white">{note.content}</p>
                    </CardBody>
                </Card>
            ))}
        </section>
    )
}