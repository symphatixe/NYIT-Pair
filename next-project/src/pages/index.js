import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NYIT Pair</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Welcome to NYIT Pair!</p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
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
      
        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}

class user {
  hashtags = [];
  constructor(name, pwd, email, year, major, campus) {
    this.name = name;
    this.pwd = pwd;
    this.email = email;
    this.year = year;
    this.major = major;
    this.campus = campus;
  }

  get Name()            {return this.name;}
  set Name(newName)     {this.name = newName;}
  get Pwd()             {return this.pwd;}
  set Pwd(newPwd)       {this.pwd = newPwd;}
  get Email()           {return this.email;}
  set Email(newEmail)   {this.email = newEmail;}
  get Year()            {return this.year;}
  set Year(newYear)     {this.year = newYear;}
  get Major()           {return this.major;}
  set Major(newMajor)   {this.major = newMajor;}
  get Campus()          {return this.campus;}
  set Campus(newCampus) {this.campus = newCampus;}

  addHashtag(hashtag)  {this.hashtags.push(hashtag);}
  removeHashtag(hashtag) {
    if (this.hashtags.indexOf(hashtag) != -1) {
      this.hashtags.splice(indexOf(hashtag), 1);
    }
  }

  createCookie() {
    const date = new Date();
    date.setTime(date.getTime() + 3 * 60 * 1000);
    let expires = "expires = " + date.toUTCString();
    document.cookie = `pwd = ${this.Pwd()}; email = ${this.Email()}; ${expires}; path = /`
  }
}

class course {
  constructor(courseCode, courseName, professor, section, location, startTime, endTime, weekday) {
    this.courseCode = courseCode;
    this.courseName = courseName;
    this.professor = professor;
    this.section = section;
    this.location = location;
    this.startTime = startTime;
    this.endTime = endTime;
    this.weekday = weekday;
  }

  get CourseCode()            {return this.courseCode;}
  set CourseCode(newCode)     {this.courseCode = newCode;}
  get Professor()             {return this.professor;}
  set Professor(newProf)      {this.professor = newProf;}
  get Section()               {return this.section;}
  set Section(newSection)     {this.section = newSection;}
  get Location()              {return this.location;}
  set Location(newLocation)   {this.location = newLocation;}
  get StartTime()             {return this.startTime;}
  set StartTime(newStart)     {this.startTime = newStart;}
  get EndTime()               {return this.endTime;}
  set EndTime(newEnd)         {this.endTime = newEnd;}
  get Weekday()               {return this.weekday;}
  set Weekday(newDay)         {this.weekday = newDay;}
}