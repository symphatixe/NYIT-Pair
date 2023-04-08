import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image'

import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => { 
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = { email, password };

        fetch('http://localhost:3000/api/login', {}
    }

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
            <div className = {styles.inputs}>
            <label for = "email">Enter your email: </label>
            </div>
            <div className ={styles.inputs}>
            <input type = "email" name = "username" id = "username" required onChange={handleChange}/>
            </div>
            
            <div className = {styles.inputs}>
            <label for="password">Enter your password: </label>
            </div>
            <div className = {styles.inputs}>
            <input type = "password" name = "password" id = "password" required onChange={handleChange}/>
            <br /><br />
            </div>
            <div className = {styles.submit}>
            <label for = "submit"> </label>
            <input type = "submit" value="Submit" id = "submit" style={{height:60, width:80, color: 'black',}}></input>
            <br /><br />
            </div>
            <Link href="/profile">New user? Create your profile here!</Link>
            
        </form>
        
     </div>
    </>
   )
}

