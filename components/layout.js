import Head from 'next/head';
import NavBar from './navbar';
import Footer from './footer';
import styles from './styles/layout.module.css';


export default function Layout({ children }) { // {home}
  return (
    <>
      <Head>
        {/* <SEO /> */}
        <title>Jose Izarra</title>
      </Head>
      <NavBar />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
  }