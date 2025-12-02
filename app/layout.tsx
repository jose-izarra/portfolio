import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jose Izarra",
  description: "Personal website",
  keywords: ["portfolio", "nextjs", "react", "typescript"],
  authors: [{ name: "Jose Izarra" }],
  creator: "Jose Izarra",
  openGraph: {
    title: "Jose Izarra",
    description: "Personal website",
    url: "https://joseizarra.com",
    type: "website",
    locale: "es_ES",
    siteName: "Jose Izarra",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RCRTV0NMCG"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RCRTV0NMCG');
            `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
