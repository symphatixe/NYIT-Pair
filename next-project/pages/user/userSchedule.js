import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/link';
import { collectClasses, addClassInputs } from '../../server/backend';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function schedule(){
    return (
    <>
    <div className = {styles.back} ><Link href = '/user/main'>Back</Link> </div>
    <div className = {styles.schedule}>
        
        <div className = {styles.weeklySchedule}>
        <label htmlFor = "week">Monday -- Tuesday -- Wednesday -- Thursday -- Friday -- Saturday -- Sunday </label>
        </div>

      <div className = {styles.classTimes} style = {{paddingRight: 150}}>
        <div style={{paddingLeft: 80}}>Class code:  <br />Start time:  <br />End time: <br /><br /><br /></div>
      
        <div id = 'mondayClasses' style={{paddingLeft: 40, paddingRight: 40, paddingTop: 0}}>
          <div id = "class"></div>
          &nbsp;<br />
          <div id = "begin" style={{paddingTop: 0}}></div>
          &nbsp;<br />
          <div id = "end" style={{paddingTop: 0}}></div>
          &nbsp;<br /><br />
        </div>

        <div id = 'tuesdayClasses' style={{paddingLeft: 40, paddingRight: 40, paddingTop: 0}}>
          <div id = "class"></div>
          &nbsp;<br />
          <div id = "begin" style={{paddingTop: 0}}></div>
          &nbsp;<br />
          <div id = "end" style={{paddingTop: 0}}></div>
          &nbsp;<br /><br />
        </div>

        <div id = 'wednesdayClasses' style={{paddingLeft: 40, paddingRight: 40, paddingTop: 0}}>
          <div id = "class"></div>
          &nbsp;<br />
          <div id = "begin" style={{paddingTop: 0}}></div>
          &nbsp;<br />
          <div id = "end" style={{paddingTop: 0}}></div>
          &nbsp;<br /><br />
        </div>

        <div id = 'thursdayClasses' style={{paddingLeft: 40, paddingRight: 40, paddingTop: 0}}>
          <div id = "class"></div>
          &nbsp;<br />
          <div id = "begin" style={{paddingTop: 0}}></div>
          &nbsp;<br />
          <div id = "end" style={{paddingTop: 0}}></div>
          &nbsp;<br /><br />
        </div>

        <div id = 'fridayClasses' style={{paddingLeft: 40, paddingRight: 40, paddingTop: 0}}>
          <div id = "class"></div>
          &nbsp;<br />
          <div id = "begin" style={{paddingTop: 0}}></div>
          &nbsp;<br />
          <div id = "end" style={{paddingTop: 0}}></div>
          &nbsp;<br /><br />
        </div>

        <div id = 'saturdayClasses' style={{paddingLeft: 40, paddingRight: 40, paddingTop: 0}}>
          <div id = "class"></div>
          &nbsp;<br />
          <div id = "begin" style={{paddingTop: 0}}></div>
          &nbsp;<br />
          <div id = "end" style={{paddingTop: 0}}></div>
          &nbsp;<br /><br />
        </div>

        <div id = 'sundayClasses' style={{paddingLeft: 40, paddingRight: 40, paddingTop: 0}}>
          <div id = "class"></div>
          &nbsp;<br />
          <div id = "begin" style={{paddingTop: 0}}></div>
          &nbsp;<br />
          <div id = "end" style={{paddingTop: 0}}></div>
          &nbsp;<br /><br />
        </div>

        
        </div>
        <br /><br />
        <div className = {styles.submit}>
          <Link id = "edit" href = "/user/editSchedule" style = {{height:40, width:60, color: 'black', background: 'gray', padding: 10, borderRadius: 25}}>Edit</Link>
          <br /><br />
        </div>
    </div>

    </>
  )
    
}
