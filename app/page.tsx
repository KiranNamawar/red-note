import { connection } from "next/server";
import AllNotes from "./components/all-notes";
import CreateNote from "./components/create-note";
import prisma from "./util/prisma";

export default async function Home() {
  await connection()
  const notes = (await prisma.note.findMany()).toReversed()
  return (
    <main className="m-1 min-h-screen">
      <h1 className="text-4xl text-red-500 text-center m-4 font-bold">Red Notes</h1>
      <CreateNote />
      <AllNotes notes={notes} />
    </main>
  )
}