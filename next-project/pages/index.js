import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NYIT Pair</title>
        <meta name = "description" content = "Created by Team 1" />
        <meta name = "viewport" content = "width=device-width, initial-scale=1" />
        <link rel = "icon" href = "/bluepair.png" />
      </Head>

      <main className = {styles.main} >
        <div className = {styles.description}>
          <p>Welcome to NYIT Pair!</p>
              By Team 1!
        </div>

        <div className = {styles.center}>
          <Image
            className = {styles.logo}
            src = "\nyitlogo_adobe_express.svg"
            alt = "Next.js Logo"
            width = {180}
            height = {200}
            priority
          />

          <div className = {styles.thirteen}>
            <Image
              src = "/bluepair.png"
              alt = "13"
              width = {160}
              height = {160}
              priority
            />
          </div>
        </div>
      
        <div className = {styles.card}>
          <Link href = "/guest/login">
            <h2 className = {inter.className}>
              Login <span>-&gt;</span>
            </h2>
            <p className = {inter.className}>
              Login here!
            </p>
          </Link>
          </div>
          
      </main>
    </>
  )
}