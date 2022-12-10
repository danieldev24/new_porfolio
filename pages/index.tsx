import type { NextPage } from 'next'
import Head from 'next/head'
import { Landing } from '../components/Home'
import logo from '../assets/logo-light.svg'

const Home: NextPage = () => {
  return (
    <div>
      <Head>

        <title>Hoang Son</title>
        <meta name="description" content="personal portfolio app" />

        <meta property="og:url" content="https://godmod.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Le Tran Hoang Son" />
        <meta property="og:description" content="personal portfolio app" />
        <meta property="og:image" content={logo} />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#323538" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

      </Head>
      <main>
        <Landing />
      </main>
    </div>
  )
}

export default Home