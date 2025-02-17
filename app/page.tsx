'use client'
import { useState } from "react";
import AllNotes from "./components/all-notes"
import NewNote from "./components/new-note";

export default function Home() {
    const [noteCount, setNoteCount] = useState(0);

  const handleNoteAdded = () => {
    setNoteCount(noteCount + 1);
  };
  const handleRefresh = () => {
    setNoteCount(0);
  }
    return (
        <div className="">
            <main className="flex flex-col items-center py-2">
                <h1 className="font-semibold text-5xl text-red-500 p-5">Red Note</h1>
                <NewNote onNoteAdded={handleNoteAdded} />
                <AllNotes noteCount={noteCount} onRefesh={handleRefresh} />
            </main>
        </div>
    );
}