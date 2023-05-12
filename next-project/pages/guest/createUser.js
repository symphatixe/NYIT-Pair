import styles from '@component/styles/Home.module.css'
import Link from 'next/link';
import { ChangePageTitle, User } from '../../server/backend';
import { useRouter } from 'next/router';
import { ActiveUserContext } from '../../src/ActiveUserContext';
import { useContext, useEffect } from 'react';

export default function CreateUser() {
  ChangePageTitle('Create User');
  const router = useRouter();
  const {loggedUser, setLoggedUser } = useContext(ActiveUserContext);

  useEffect(() => {
    if (loggedUser && loggedUser.name !== 'admin') alert('User Created! \nWelcome to Pair, ' + (loggedUser.email || ''));
  }, [loggedUser]);

  const handleCreation = () => {
    router.push('/guest/createProfile');
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password1 = formData.get("password1");
    const password2 = formData.get("password2");

    if (password1 === password2) {
      
      const response = await fetch('http://localhost:3000/api/users/createUserAPI',{
                                  method: 'POST',
                                  headers: {'Content-Type': 'application/json'},
                                  body: JSON.stringify({email, password2})
                                  });
      if (response.ok) {
        const user = await response.json();
        setLoggedUser(user);
        handleCreation();
      }

      else if (response.status === 401) {
        const user = await response.json();

        const {email} = user;
        const duplicate = new User();
        duplicate.email = email;

        alert('Please use a different email, there already exists a user with the email ' + duplicate.email);
      }

      else {
        alert('Server error has occured, please contact admins for support.');
      };
    }

    else {
      alert('Your passwords do not match, please make sure they match.');
      return;
    }
  }

  return (
    <>
    <div className = {styles.back}><Link href = '/guest/login'>Back</Link> </div>
    
    <main className = {styles.profileMain} > 
          <div className = {styles.profileBio}>
            <form onSubmit = {handleSubmit}>
              <label htmlFor = "name">Enter your email, it will be used as your username </label>
              <br /><br />
              <input type = "text" name = "email" id = "email" required/>
              <br /><br />
              <label htmlFor = "password1">Enter your password: </label>
              <br /><br />
              <input type = "password" name = "password1" id = "password1" required/>
              <br /><br />
              <label htmlFor = "password2">Enter your password again. </label>
              <br /><br />
              <input type = "password" name = "password2" id = "password2" required/>
              <br /><br />

              <div className = {styles.submit}>
              <label htmlFor = "submit"> </label>
              <input type = "submit" value = "Submit" style = {{ height:40, width:60, color: 'black' }} />
              </div>
            </form>
          </div>
    </main>
    </>
  )
}