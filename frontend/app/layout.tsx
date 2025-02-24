import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
    title: "Jose Izarra",
    description: "Personal website",
    keywords: ["portfolio", "nextjs", "react", "typescript"],
    authors: [{ name: "Jose Izarra"}],
    creator: "Jose Izarra",
    openGraph: {
        title: "Jose Izarra",
        description: "Personal website",
        url: "https://joseizarra.com",
        type: "website",
        locale: "es_ES",
        siteName: "Jose Izarra",
    }
}

// Component imports
import Footer from "@/components/Footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
        <html lang="en" className="">
            <body className={`${inter.className} `}>
                {children}
                <Footer />
            </body>
        </html>
    )
}
