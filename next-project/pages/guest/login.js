import styles from '@component/styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChangePageTitle } from '../../../public/backend.js';
import { ActiveUserContext } from '../../../public/ActiveUserContext';
import { useContext } from 'react';
import { User } from '../../../public/backend'

export default function Login(){
    ChangePageTitle('Login Page');
    const router = useRouter();
    const {loggedUser, setLoggedUser} = useContext(ActiveUserContext);
    

    const handleLogin = () => {
        router.push('/user/main');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");

        const response = await fetch('http://localhost:3000/api/users/loginData', 
                                    {method: 'POST',
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify({email, password}) 
                                    });
        if (response.ok) {
            const user = await response.json();
            setLoggedUser(user);
            handleLogin();
        }

        else {
            alert('Incorrect email or password was entered, please try again. If you do not have an account please create an account.');
        }
    }

  return (
    <>
    <ActiveUserContext.Provider value = {{ loggedUser, setLoggedUser }}>
    <title>Login Page</title>
     <div className = {styles.back}><p ><Link href = '/'> Back </Link></p></div>
     
     <div className = {styles.form}>
        <div className = {styles.center2}>
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
        <form onSubmit = {handleSubmit}>

            <div className = {styles.inputs}>
            <label htmlFor = "email">Enter your email: </label>
            </div>
            <div className = {styles.inputs}>
            <input type = "email" name = "email" id = "email" required/>
            </div>
            
            <div className = {styles.inputs}>
            <label htmlFor="password">Enter your password: </label>
            </div>
            <div className = {styles.inputs}>
            <input type = "password" name = "password" id = "password" required/>
            <br /><br />
            </div>

            <div className = {styles.submit}>
            <label htmlFor = "submit"> </label>
            <input type = "submit" value="Submit" id = "submit" style = {{height:40, width:60, color: 'black'}}></input>
            <br /><br />
            </div>

            <Link href = "/guest/createUser">New user? Create your profile here!</Link>
        </form>
     </div>
     </ActiveUserContext.Provider>
    </>

   )
}

