import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Dashboard from './dashboard'

export default function Home() {
  return (
    <div className="border-box">
      <Head>
        <title>Tailwind assignment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/faea57e258.js" crossorigin="anonymous"></script>
      </Head>
      <div>
        <Dashboard/>
      </div>

    </div>
  )
}
