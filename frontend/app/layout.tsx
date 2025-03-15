import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from '@vercel/analytics/next';
import Script from "next/script";
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
            <head>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-54D6PWBZ8R"></Script>
                <Script id="google-analytics">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-54D6PWBZ8R');
                    `}
                </Script>
            </head>
            <body className={`${inter.className} `}>
                {children}
                <Footer />
                <Analytics />
            </body>
        </html>
    )
}
