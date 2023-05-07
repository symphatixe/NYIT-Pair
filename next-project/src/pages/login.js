import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('hello there is something here', email, password);

        const response = await fetch('http://localhost:3000/api/users/loginData', {method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password}) 
        });
            
        if (response.ok) {
            console.log('login successful')
            //insert some redirect here to a different page without the login button
        }
        else {
            console.log('login failed')
            //put some code here to reflect on the frontend so that the user can see their details
            //were wrong
        }
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
        
        <form onSubmit ={handleSubmit}>
            <div className = {styles.inputs}>
            <label htmlFor = "email">Enter your email: </label>
            </div>
            <div className ={styles.inputs}>
            <input type = "email" name = "email" id = "email" onChange={handleChange}/>
            </div>
            
            <div className = {styles.inputs}>
            <label htmlFor="password">Enter your password: </label>
            </div>
            <div className = {styles.inputs}>
            <input type = "password" name = "password" id = "password" onChange={handleChange}/>
            <br /><br />
            </div>
            <div className = {styles.submit}>
            <label htmlFor = "submit"> </label>
            <input type = "submit" value="Submit" id = "submit" style={{height:60, width:80, color: 'black',}}></input>
            <br /><br />
            </div>
            <Link href="/profile">New user? Create your profile here!</Link>
            
        </form>
        
     </div>
    </>
   )
}

