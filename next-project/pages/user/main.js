import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/link';
import { useContext } from 'react';
import { ActiveUserContext } from '../../src/ActiveUserContext';

const inter = Inter({ subsets: ['latin'] })

export default function UserHome() {
  const { loggedUser } = useContext(ActiveUserContext);

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

        <h2 className = {`${inter.className} ${styles.intro}`}>Welcome to Pair, {loggedUser && loggedUser.name}</h2>

      
        <div className = {styles.grid}>
          <Link href = "/user/userProfile" className = {styles.card}>
            <h2 className = {inter.className}>
              Your Profile <span>-&gt;</span>
            </h2>
            <p className = {inter.className}>
              Edit or add details here!
            </p>
          </Link>

          <Link href = "/user/userSchedule" className = {styles.card}>
            <h2 className = {inter.className}>
              Your Schedule <span>-&gt;</span>
            </h2>
            <p className = {inter.className}>
              Edit schedule or adjust classes here!
            </p>
          </Link>

          <Link href = "/user/report" className = {styles.card}>
            <h2 className = {inter.className}>
              Report <span>-&gt;</span>
            </h2>
            <p className = {inter.className}>
              Generate a Pair report!
            </p>
          </Link>

          <Link href = "/about" className = {styles.card}>
            <h2 className = {inter.className}>
              About <span>-&gt;</span>
            </h2>
            <p className = {inter.className}>
              View our team info here!
            </p>
          </Link>
          </div>
          
      </main>
    </>
  )
}