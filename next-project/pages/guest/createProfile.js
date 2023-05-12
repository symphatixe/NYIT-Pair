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
  const { loggedUser, setLoggedUser } = useContext(ActiveUserContext);

  const activeEmail = loggedUser.email;

  const handleCreation = () => {
    alert('Profile created! ' + activeEmail);
    router.push('/guest/createSchedule');
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const major = formData.get("major");
    const studentID = formData.get("studentID");
    const year = formData.get("year");
    const campus = formData.get("campus");
    const bio = formData.get("bio");
    const hashtagData = formData.get("hashtag");
    const parsedHashtag = hashtagData.split(',');

    const response = await fetch('http://localhost:3000/api/users/updateUser',{
                                method: 'POST',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify({activeEmail, name, major, studentID, year, campus, bio, parsedHashtag})
                                });

    if (response.ok) {
      const user = await response.json();
      setLoggedUser(user);
      handleCreation();
    }

    else {
      alert('Server error has occured, please contact admins for support');
    }
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
              <label htmlFor = "studentID">Enter your student ID: </label>
              <br /><br />
              <input type = "text" name = "studentID" id = "studentID" required/>
              <br /><br />
              <label htmlFor = "year">Enter your student year (freshman, sophomore, junior, senior, or graduate): </label>
              <br /><br />
              <input type = "text" name = "year" id = "year" required/>
              <br /><br />
              <label htmlFor = "campus">Enter your campus: </label>
              <br /><br />
              <input type = "text" name = "campus" id = "campus" required/>
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