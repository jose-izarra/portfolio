import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

// Component imports
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
        <html lang="en" className="">
            <body className={`${inter.className} `}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
