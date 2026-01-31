import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata = {
    title: "Shree Krishna Furniture Store",
    description: "Crafted furniture for your home",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning className={poppins.variable}>
            <head>
                {/* Remix Icon CDN */}
                <link
                    href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
                    rel="stylesheet"
                />
            </head>
            <body className="font-sans antialiased">
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
