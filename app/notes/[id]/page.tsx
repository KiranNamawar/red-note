import EditNote from "@/app/components/edit-note";
import prisma from "@/app/util/prisma";
import Link from "next/link";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const id = (await params).id;
    const note = await prisma.note.findUnique({
        where: {
            id
        }
    })
    if (note === null) {
        return <div><Link href={"/"}>Create New Note</Link></div>
    }

    return (
        <div>
            <h1>Note {id}</h1>
            <EditNote note={note} />
        </div>
    );
}
