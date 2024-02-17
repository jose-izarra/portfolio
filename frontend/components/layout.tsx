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
        <meta name="description" content="Software developer: Jose Izarra's personal portfolio" />
        <meta name="author" content="Jose Izarra"/>
        <meta name="keywords" content='Software Developer, Web Developer, Full Stack Developer, Jose Izarra'/>
        <link rel="canonical" href="https://joseizarra.com/"/>
        
        {/* og tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Jose Izarra's Personal Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joseizarra.com/" />

      </Head>
      <NavBar page={page} />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
  }