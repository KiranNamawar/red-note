'use server';

import { revalidatePath } from 'next/cache';
import prisma from './prisma';
import { redirect } from 'next/navigation';

export async function createNoteAction(formData: FormData) {
    const userId = formData.get('userId') as string;
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    console.log(title, content);
    const note = await prisma.note.create({
        data: {
            title,
            content,
            userId,
        },
    });
    revalidatePath('/');
    console.log(note);
}

export async function deleteAllNotesAction() {
    await prisma.note.deleteMany();
    revalidatePath('/');
}

export async function editNoteAction(formData: FormData) {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const id = formData.get('id') as string;
    await prisma.note.update({
        where: {
            id,
        },
        data: {
            title,
            content,
        },
    });
    revalidatePath('/');
    redirect('/');
}
