import { connection } from 'next/server';
import prisma from './util/prisma';
import { auth, currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import TipTap from './components/tip-tap';
import AllNotes from './components/all-notes';
import Image from 'next/image';

export default async function Home() {
    await connection();
    const { userId } = await auth();
    if (!userId) {
        return <Link href="/signin">Sign in</Link>;
    }
    const user = await currentUser();
    if (!user) {
        return <Link href="/signin">Sign in</Link>;
    }
    const email = user?.emailAddresses[0].emailAddress;
    if (!email) {
        return <Link href="/signin">Sign in</Link>;
    }

    let dbUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (!dbUser) {
        dbUser = await prisma.user.create({
            data: {
                email,
            },
        });
    }

    const notes = await prisma.note.findMany({
        where: {
            userId: dbUser?.id,
        },
        orderBy: {
            updatedAt: 'desc',
        },
    });
    console.log(notes);
    return (
        <main className="m-1 min-h-screen">
            <Image alt="" fill src='https://images.unsplash.com/photo-1740386072835-938733c974e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <TipTap userId={dbUser.id} />
            <AllNotes notes={notes} />
        </main>
    );
}
