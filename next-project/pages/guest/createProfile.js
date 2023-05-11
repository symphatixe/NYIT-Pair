import styles from '@component/styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { ChangePageTitle } from '../../server/backend';
import { useRouter } from 'next/router';
import { ActiveUserContext } from '../../src/ActiveUserContext'
import { useContext } from 'react';

export default function CreateUserProfile(){
  ChangePageTitle('Create Profile');
  const router = useRouter();
  const { loggedUser } = useContext(ActiveUserContext);

  const handleCreation = () => {
    router.push('/user/main');
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const major = formData.get("major");
    const year = formData.get("year");
    const bio = formData.get("bio");
    const hashtag = formData.get("hashtag");

    const response = await fetch('http://localhost:3000/api/users/createUserAPI',{
                                method: 'POST',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify({email, password2})
                                });
  }

  return (
    <>
    <div className = {styles.back}><Link href='/guest/createUser'>Back</Link> </div>
    
    <main className = {styles.profileMain} > 
     <div className = {styles.profilePicture}><Image
          src = "/silhouette.png"
          alt = "13"
          width = {160}
          height = {160}
          priority
          /></div>
          <div className = {styles.profileBio}>
            <form onSubmit = {handleSubmit}>
              <label htmlFor = "name">Enter your name: </label>
              <br /><br />
              <input type = "text" name = "name" id = "name" required/>
              <br /><br />
              <label htmlFor = "major">Enter your major: </label>
              <br /><br />
              <input type = "text" name = "major" id = "major" required/>
              <br /><br />
              <label htmlFor = "year">Enter your year: </label>
              <br /><br />
              <input type = "text" name = "year" id = "year" required/>
              <br /><br />
              <label htmlFor = "bio">Enter your bio here: </label>
              <br /><br />
              <textarea name = "bio" id = "bio" col = "30" rows = "10" placeholder = "About you..."/>
              <br /> <br />
              <label htmlFor = "hashtag">Enter your hashtags here: </label>
              <br /><br />
              <textarea name = "hashtag" id = "hashtag" col = "30" rows = "5" placeholder="Hashtags"/>
              <br /> <br />
              <input type = "submit" value = "Submit" />
            </form>
          </div>
    </main>
    </>
  )
}