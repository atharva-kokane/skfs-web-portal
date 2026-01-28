"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { CategoryNav } from "@/components/layout/CategoryNav";
import Footer from "@/components/ui/Footer";

export default function ClientLayout({ children }) {
    const pathname = usePathname();
    const isAdminPage = pathname?.startsWith("/admin");

    if (isAdminPage) {
        return <main className="flex-grow">{children}</main>;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <CategoryNav />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}
