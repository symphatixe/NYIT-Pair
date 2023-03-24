import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/Link';
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function profile(){
  return (
    <>
    <div className={styles.back}><Link href='/'>Back</Link> </div>
    
    <main className={styles.profileMain}> 
      <Image
          src="/silhouette.png"
          alt="13"
          width={160}
          height={160}
          priority
        />
      <form>
        <label for="name">Enter your name: </label>
        <input type="text" name="name" id="name" required/>
        <br /><br />
        <label for="bio">Enter your bio here: </label>
        <textarea name="bio" id="bio" col="30" rows="10" placeHolder="About you..."/>
        <br /> <br />
        <input type="submit" value="Submit" />
      </form>

    </main>
    
    </>
  )
}