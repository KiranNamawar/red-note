import type { Metadata } from 'next';
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs';
import './globals.css';
import { Providers } from './providers';
import { dark } from '@clerk/themes';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Red Note',
    description: 'A note taking app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider appearance={{ baseTheme: dark }}>
            <html lang="en" className="dark">
                <body>
                    <header className="flex h-16 items-center justify-around gap-4 p-4">
                        <h1 className="text-2xl font-bold text-red-500">
                            <Link href="/">Red Note</Link>
                        </h1>
                        <SignedOut>
                            <SignInButton />
                            <SignUpButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </header>
                    <Providers>{children}</Providers>
                </body>
            </html>
        </ClerkProvider>
    );
}
