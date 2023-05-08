import styles from '@component/styles/Home.module.css'
import Link from 'next/link';
import { changePageTitle } from '../../../public/backend';

export default function CreateUserProfile(){
  changePageTitle('Create User');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
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
              <label htmlFor = "major">Enter your password: </label>
              <br /><br />
              <input type = "password" name = "password" id = "password" required/>
              <br /><br />
              <label htmlFor = "major">Enter your password again. </label>
              <br /><br />
              <input type = "password" name = "password" id = "password" required/>
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