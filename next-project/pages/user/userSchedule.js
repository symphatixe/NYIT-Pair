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
        
        {/* <label for="class">Class code: </label>
        <input type="text" name="class" id="class" placeholder="ex. CSCI 318"/>
        &nbsp;
        <input type="text" name="class" id="class" placeholder="ex. CSCI 318"/>
        &nbsp;
        <input type="text" name="class" id="class" placeholder="ex. CSCI 318"/>
        &nbsp;
        <input type="text" name="class" id="class" placeholder="ex. CSCI 318"/>
        &nbsp;
        <input type="text" name="class" id="class" placeholder="ex. CSCI 318"/>
        &nbsp;
        <input type="text" name="class" id="class" placeholder="ex. CSCI 318"/>
        &nbsp;
        <input type="text" name="class" id="class" placeholder="ex. CSCI 318"/>
        <br /><br />
        <label for="begin">Start time: </label>
        

        <input type="text" name="begin" id="begin" placeHolder="Time Start"/>
        &nbsp;
        <input type="text" name="begin" id="begin" placeHolder="Time Start"/>
        &nbsp;
        <input type="text" name="begin" id="begin" placeHolder="Time Start"/>
        &nbsp;
        <input type="text" name="begin" id="begin" placeHolder="Time Start"/>
        &nbsp;
        <input type="text" name="begin" id="begin" placeHolder="Time Start"/>
        &nbsp;
        <input type="text" name="begin" id="begin" placeHolder="Time Start"/>
        &nbsp;
        <input type="text" name="begin" id="begin" placeHolder="Time Start"/>
        &nbsp;
        <br /><br />
        <label for="end">End time: </label>
        <input type="text" name="end" id="end" placeHolder="Time End"/>
        &nbsp;
        <input type="text" name="end" id="end" placeHolder="Time End"/>
        &nbsp;
        <input type="text" name="end" id="end" placeHolder="Time End"/>
        &nbsp;
        <input type="text" name="end" id="end" placeHolder="Time End"/>
        &nbsp;
        <input type="text" name="end" id="end" placeHolder="Time End"/>
        &nbsp;
        <input type="text" name="end" id="end" placeHolder="Time End"/>
        &nbsp;
        <input type="text" name="end" id="end" placeHolder="Time End"/>
         */}

      {/*Formatted this way so the addClass button can eventually duplicate the code for inputting class 
      information and have them alligned properly. An example of how it would look is on monday.
      The old code i left above incase anyone wanted it back. ~ Eddie */}

      <div className = {styles.classTimes}>
        <div>Class code:  <br />Start time:  <br />End time: <br /><br /><br /></div>
      
        <div id = 'mondayClasses'>
          <div id = "class"></div>
          &nbsp;<br />
          <div id = "begin"></div>
          &nbsp;<br />
          <div id = "end"></div>
          &nbsp;<br /><br />
        </div>

        <div id = 'tuesdayClasses'>
          <div id = "class"></div>
          &nbsp;<br />
          <div id = "begin"></div>
          &nbsp;<br />
          <div id = "end"></div>
          &nbsp;<br /><br />
        </div>

        <div id = 'wednesdayClasses'>
          <div id = "class"></div>
          &nbsp;<br />
          <div id = "begin"></div>
          &nbsp;<br />
          <div id = "end"></div>
          &nbsp;<br /><br />
        </div>

        <div id = 'thursdayClasses'>
          <div id = "class"></div>
          &nbsp;<br />
          <div id = "begin"></div>
          &nbsp;<br />
          <div id = "end"></div>
          &nbsp;<br /><br />
        </div>

        <div id = 'fridayClasses'>
          <div id = "class"></div>
          &nbsp;<br />
          <div id = "begin"></div>
          &nbsp;<br />
          <div id = "end"></div>
          &nbsp;<br /><br />
        </div>

        <div id = 'saturdayClasses'>
          <div id = "class"></div>
          &nbsp;<br />
          <div id = "begin"></div>
          &nbsp;<br />
          <div id = "end"></div>
          &nbsp;<br /><br />
        </div>

        <div id = 'sundayClasses'>
          <div id = "class"></div>
          &nbsp;<br />
          <div id = "begin"></div>
          &nbsp;<br />
          <div id = "end"></div>
          &nbsp;<br /><br />
        </div>

        
        </div>
        <br /><br />
        <div className = {styles.submit}>
          <label htmlFor = "edit"> </label>
          <input type = "button" value="Edit" id="edit" style = {{height:40, width:60, color: 'black',}}></input>
          <br /><br />
        </div>
    </div>

    </>
  )
    
}
