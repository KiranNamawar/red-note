'use server'

import prisma from "./prisma";

export async function createNoteAction(formData: FormData) {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    console.log(title, content);
    const note = await prisma.note.create({
        data: {
            title,
            content
        }
    });
    console.log(note);
}
