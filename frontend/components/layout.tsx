import Head from 'next/head';
import NavBar from './navbar';
import Footer from './footer';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

// shadcn
import { cn } from "../lib/utils"
import { Inter as FontSans } from "next/font/google"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function Layout({ children, title, page }) { 
  return (
    <>
      <Head>
        {/* <SEO /> */}
        <title>{title}</title>
        <meta name="description" content="Jose Izarra's Personal Portfolio" />
        <meta name="author" content="Jose Izarra"/>
        <meta name="keywords" content='Software Developer, Web Developer, Full Stack Developer, Jose Izarra, Jose Izarra Portfolio, Jose Izarra Software Developer, Jose Izarra Web Developer, Jose Izarra Full Stack Developer,  Jose Izarra Full Stack Engineer, Jose Izarra Web, Jose Izarra Full Stack, Jose Izarra Software'/>
        <link rel="canonical" href={`https://joseizarra.com/${page !== 'Home' ? page.toLowerCase() : ''}`}/>
        
        {/* og tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Jose Izarra's Personal Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joseizarra.com/" />

      </Head>
      {/* { page !== 'CV' && <NavBar page={page} />} */}
      <NavBar page={page} />
      <main className={cn("min-h-screen  font-sans antialiased", fontSans.variable)}>
          {children}
          <Analytics />
          <SpeedInsights />
      </main>
      { page !== 'CV' && <Footer /> }
    </>
  )
  }