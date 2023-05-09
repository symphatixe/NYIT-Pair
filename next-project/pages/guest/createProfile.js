import styles from '@component/styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { ChangePageTitle } from '../../server/backend';

export default function CreateUserProfile(){
  ChangePageTitle('Create Profile');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
  }

  return (
    <>
    <div className={styles.back}><Link href='/guest/createUser'>Back</Link> </div>
    
    <main className={styles.profileMain} > 
     <div className ={styles.profilePicture}><Image
          src="/silhouette.png"
          alt="13"
          width={160}
          height={160}
          priority
          /></div>
          <div className={styles.profileBio}>
            <form onSubmit={handleSubmit}>
              <label for="name">Enter your name: </label>
              <br /><br />
              <input type="text" name="name" id="name" required/>
              <br /><br />
              <label for="major">Enter your major: </label>
              <br /><br />
              <input type="text" name="major" id="major" required/>
              <br /><br />
              <label for="year">Enter your year: </label>
              <br /><br />
              <input type="text" name="year" id="year" required/>
              <br /><br />
              <label for="bio">Enter your bio here: </label>
              <br /><br />
              <textarea name="bio" id="bio" col="30" rows="10" placeHolder="About you..."/>
              <br /> <br />
              <label for="hashtag">Enter your hashtags here: </label>
              <br /><br />
              <textarea name="hashtag" id="hashtag" col="30" rows="5" placeHolder="Hashtags"/>
              <br /> <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
    </main>
    
    </>
  )
}