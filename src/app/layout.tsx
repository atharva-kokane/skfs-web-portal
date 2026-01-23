import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { CategoryNav } from '@/components/layout/CategoryNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Skfs Web Portal',
    description: 'Furniture store portal',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <CategoryNav />
                    <main className="flex-grow">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}
