'use server'

import { revalidatePath } from "next/cache";
import prisma from "./prisma";

export async function createNoteAction(formData: FormData) {
    const userId = formData.get('userId') as string;
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    console.log(title, content);
    const note = await prisma.note.create({
        data: {
            title,
            content,
            userId
        }
    });
    revalidatePath('/');
    console.log(note);
}

export async function deleteAllNotesAction() {
    await prisma.note.deleteMany();
    revalidatePath('/');
}
