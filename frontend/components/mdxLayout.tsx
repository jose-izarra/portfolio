import Head from 'next/head';
import NavBar from './navbar';
import Footer from './footer';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

// shadcn
import { Inter as FontSans } from "next/font/google"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})



export default function MdxLayout({ children, title } : { children: React.ReactNode, title: string }) {
  return (
    <>
      <Head>
        <title>{title}</title>

      </Head>

      <main>
        {children}
        <Analytics />
        <SpeedInsights />
      </main>
    </>
  )
}