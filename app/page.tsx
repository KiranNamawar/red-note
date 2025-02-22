import { connection } from "next/server";
import AllNotes from "./components/all-notes";
import CreateNote from "./components/create-note";
import prisma from "./util/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
  await connection()
  const { userId } = await auth();
  if (!userId) {
    return  <Link href="/signin">Sign in</Link>
  }
  const user = await currentUser()
  if (!user) {
    return <Link href="/signin">Sign in</Link>
  }
  const email = user?.emailAddresses[0].emailAddress
  if (!email) {
    return <Link href="/signin">Sign in</Link>
  }

  let dbUser = (await prisma.user.findUnique(
    {
      where: {
        email
      }
    }
  ))
  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        email
      }
    })
  }

  const notes = await prisma.note.findMany({
    where: {
      userId: dbUser?.id
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  return (
    <main className="m-1 min-h-screen">
      <h1 className="text-4xl text-red-500 text-center m-4 font-bold">Red Notes</h1>
      <CreateNote userId={dbUser.id} />
      <AllNotes notes={notes} />
    </main>
  )
}