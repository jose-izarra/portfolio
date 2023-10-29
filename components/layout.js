import Head from 'next/head';
import Link from 'next/link';
import NavBar from './navbar';
import Footer from './footer';


export default function Layout({ children }) { // {home}
  return (
    <>
      <Head>
        {/* <SEO /> */}
        <title>Jose Izarra</title>
      </Head>
        <NavBar />
        <main>{children}</main>
        <Footer />
    </>
  )
  }