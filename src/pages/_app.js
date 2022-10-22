import '../../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import EmailForm from '../components/EmailForm'

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
    <EmailForm/>
      </main>
    </div>
    <Footer/>
    </>
  )
}

export default MyApp
