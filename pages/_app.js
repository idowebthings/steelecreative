import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return <>
  <Head>
    <title>Dylan&apos;s Portfolio</title>
    <meta name="description" content="Dylan Steele&apos;s digital portfolio" />
    <link rel="icon" href='/favicon.ico' />
  </Head>
    <header>
      <Navbar />
    </header>
    <main className='flex min-h-screen flex-col items-center justify-between pt-32 px-8 lg:px-24'>
      <Component {...pageProps} />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
}
