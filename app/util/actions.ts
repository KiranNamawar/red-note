'use server';

import { revalidatePath } from "next/cache";
import prisma from "./prisma";

export async function createNoteAction({ userId, content }: { userId: string, content: string }) {
    const note = await prisma.note.create({
        data: {
            userId,
            content,
        },
    });
    revalidatePath('/');
    console.log(note);
}

export async function updateNoteAction({ id, content }: { id: string, content: string }) {
    await prisma.note.update({
        where: {
            id,
        },
        data: {
            content,
        },
    });
    revalidatePath('/');
}

export async function deleteNoteAction({ id }: { id: string }) {
    await prisma.note.delete({
        where: {
            id,
        },
    });
    revalidatePath('/');
}