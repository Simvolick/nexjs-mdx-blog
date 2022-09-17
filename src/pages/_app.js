import '../../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
      <title>Next and MDX Blog</title>
    </Head>
    <div>
      <Nav/>
      <main>
    <Component {...pageProps} />
      </main>
    </div>
    </>
  )
}

export default MyApp
