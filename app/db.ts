import Dexie, { type EntityTable } from "dexie";

interface Note {
    id: number;
    title: string;
    content: string;
    created_at: Date;
}

const db = new Dexie("MyDatabase") as Dexie & {
    notes: EntityTable<Note, 'id'
    >;
};

db.version(1).stores({
    notes: "++id, title, content, created_at"
});

export type { Note };
export { db };