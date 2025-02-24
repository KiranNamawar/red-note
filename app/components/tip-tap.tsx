'use client';

import { Button, ButtonGroup } from '@heroui/react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { createNoteAction, updateNoteAction } from '../util/actions';
import { Note } from '@prisma/client';

export default function TipTap({ userId, note, onClose }: { userId: string, note?: Note, onClose?: () => void }) {
   
    const editor = useEditor({
        extensions: [StarterKit],
        content: note?.content || '',
    });
    if (!editor) {
        return null;
    }

    const handleSave = async () => {
        const content = editor.getHTML();
        if (!note) {
            await createNoteAction({ userId, content });
        } else {
            await updateNoteAction({ id: note.id, content });
        }
        onClose?.();
    }

    return (
        <section className="m-auto flex w-4/5 flex-col gap-4 rounded-md border-2 border-sky-500 bg-green-500 bg-opacity-10 p-2 backdrop-blur-md backdrop-filter md:w-1/2">
            <ButtonGroup className='w-3/4 m-auto'>
                <Button
                    onPress={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'bg-button-bg' : ''}
                >
                    Bold
                </Button>
                <Button
                    onPress={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'bg-button-bg' : ''}
                >
                    Italic
                </Button>
                <Button
                    onPress={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'bg-button-bg' : ''}
                >
                    Strike
                </Button>
                <Button
                    onPress={() => editor.chain().focus().toggleCode().run()}
                    className={editor.isActive('code') ? 'bg-button-bg' : ''}
                >
                    Code
                </Button>
            </ButtonGroup>
            <EditorContent
                editor={editor}
                className="border-b-1 border-red-300"
            />
            <div className="flex items-center justify-center">
                <Button onPress={handleSave} className="hover:bg-button-bg">
                    Save
                </Button>
                {onClose && (
                    <Button onPress={onClose} className="hover:bg-button-bg">
                        Cancel
                    </Button>
                )}
            </div>
        </section>
    );
}
