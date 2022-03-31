import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from './components/Nav'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reece Runnells</title>
        <meta name="description" content="Reece Runnells: Content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Have a ton to do...
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
