import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/Link';
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function login(){
  return (
    <>
    <title>Login Page</title>
     <div className={styles.back}><p ><Link href='/'> Back </Link></p></div>
     
     <div className={styles.form}>
        <div className={styles.center2}>
            <Image
                className={styles.logo}
                src="\nyitlogo_adobe_express.svg"
                alt="Next.js Logo"
                width={180}
                height={200}
                priority
            />
            <div className={styles.thirteen}>
                <Image
                src="/bluepair.png"
                alt="13"
                width={160}
                height={160}
                priority
                />
            </div>
        </div>
        
        <form action="">
            <label for="email">Enter your email: </label>
            <input type="email" name="username" id="username" required/>
            <br /><br />
            <label for="password">Enter your password: </label>
            <input type="password" name="password" id="password" required/>
            <br /><br />
            <input type="submit" value="Submit" id="submit" style={{height:60,width:80,}}></input>
            <br /> <br />
            <Link href="/profile">New user? Create your profile here!</Link>
        </form>
        
     </div>
    </>
   )
}

