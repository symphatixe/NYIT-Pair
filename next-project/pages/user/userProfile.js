import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { ChangePageTitle } from '../../server/backend';
import { useContext } from 'react';
import { ActiveUserContext } from '../../src/ActiveUserContext';

const inter = Inter({ subsets: ['latin'] })

export default function UserProfile(){
  ChangePageTitle('Profile');
  const { loggedUser } = useContext(ActiveUserContext);

  return (
    <>
    <div className = {styles.back}><Link href = '/user/main'>Back</Link> </div>
    
    <main className = {styles.profileMain} > 
     <div className = {styles.profilePicture}>
      <Image
          src = "/silhouette.png"
          alt = "13"
          width = {160}
          height = {160}
          priority
      />
      </div>

      <div className = {styles.profileBio}>
        <div>
          <div id = "name">Name: {loggedUser && loggedUser.name}</div><br />
          <div id = "major">Major: {loggedUser && loggedUser.major}</div><br />
          <div id = "year">Year: {loggedUser && loggedUser.year}</div><br />
          <div id = "bio">Bio: </div><br />
          <div id = "bioText">{loggedUser && loggedUser.bio}</div><br /><br />
          <div id = "hashtags">Hashtags: </div><br />
          <ul id = "hashtagList">
          {
            loggedUser && loggedUser.hashtags.map((hashtag, index) => (
            <li key = {index}>{hashtag}</li>
          ))}
          </ul><br />

          <Link id = "edit" href = "/user/editProfile" style = {{height:40, width:60, color: 'black', background: 'gray', padding: 10, borderRadius: 25}}>Edit</Link>
          
          </div>
        </div>
    </main>
    </>
  )
}