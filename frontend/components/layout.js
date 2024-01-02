import Head from 'next/head';
import NavBar from './navbar';
import Footer from './footer';
import styles from './styles/layout.module.css';


export default function Layout({ children, title, page }) { // {home}
  return (
    <>
      <Head>
        {/* <SEO /> */}
        <title>{title}</title>
      </Head>
      {/* {
        page !== 'Home' && <NavBar page={page} />
      } */}
      <NavBar page={page} />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
  }