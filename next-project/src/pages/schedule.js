import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function schedule(){
    return (
    <>
    <div className={styles.back}><Link href='/'>Back</Link> </div>
    <div className={styles.schedule}>
        
        <div className={styles.weeklySchedule}>
        <label for="week">Monday -- Tuesday -- Wednesday -- Thursday -- Friday -- Saturday -- Sunday </label>
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
      information and have them alligned properly. An example of how it woiuld look is on monday.
      The old code i left above incase anyone wanted it back. ~ Eddie */}

      <div className={styles.classTimes}>
        <div>Class code:  <br />Start time:  <br />End time: <br /><br /><br /></div>
      
        <div id='mondayClasses'>
            <input type="text" name="class" id="class" placeholder="ex. CSCI 318"/>
          &nbsp;<br />
          <input type="text" name="begin" id="begin" placeHolder="Time Start"/>
          &nbsp;<br />
          <input type="text" name="end" id="end" placeHolder="Time End"/>
          &nbsp;<br /><br />

          <input type="text" name="class" id="class" placeholder="ex. CSCI 318"/>
          &nbsp;<br />
          <input type="text" name="begin" id="begin" placeHolder="Time Start"/>
          &nbsp;<br />
          <input type="text" name="end" id="end" placeHolder="Time End"/>
          &nbsp;<br /><br />
          <button id='addClassMon'>Add class +</button><br />
        </div>

        <div id='tuesdayClasses'>
            <input type="text" name="class" id="class" placeholder="ex. CSCI 318"/>
          &nbsp;<br />
          <input type="text" name="begin" id="begin" placeHolder="Time Start"/>
          &nbsp;<br />
          <input type="text" name="end" id="end" placeHolder="Time End"/>
          &nbsp;<br /><br />
          <button id='addClassTues'>Add class +</button>
        </div>

        <div id='wednesdayClasses'>
          <input type="text" name="class" id="class" placeholder="ex. CSCI 318"/>
          &nbsp;<br />
          <input type="text" name="begin" id="begin" placeHolder="Time Start"/>
          &nbsp;<br />
          <input type="text" name="end" id="end" placeHolder="Time End"/>
          &nbsp;<br /><br />
          <button id='addClassWed'>Add class +</button>
        </div>

        <div id='thursdayClasses'>
          <input type="text" name="class" id="class" placeholder="ex. CSCI 318"/>
          &nbsp;<br />
          <input type="text" name="begin" id="begin" placeHolder="Time Start"/>
          &nbsp;<br />
          <input type="text" name="end" id="end" placeHolder="Time End"/>
          &nbsp;<br /><br />
          <button id='addClassThurs'>Add class +</button>
        </div>

        <div id='fridayClasses'>
          <input type="text" name="class" id="class" placeholder="ex. CSCI 318"/>
          &nbsp;<br />
          <input type="text" name="begin" id="begin" placeHolder="Time Start"/>
          &nbsp;<br />
          <input type="text" name="end" id="end" placeHolder="Time End"/>
          &nbsp;<br /><br />
          <button id='addClassFri'>Add class +</button>
        </div>

        <div id='saturdayClasses'>
          <input type="text" name="class" id="class" placeholder="ex. CSCI 318"/>
          &nbsp;<br />
          <input type="text" name="begin" id="begin" placeHolder="Time Start"/>
          &nbsp;<br />
          <input type="text" name="end" id="end" placeHolder="Time End"/>
          &nbsp;<br /><br />
          <button id='addClassSat'>Add class +</button>
        </div>

        <div id='sundayClasses'>
          <input type="text" name="class" id="class" placeholder="ex. CSCI 318"/>
          &nbsp;<br />
          <input type="text" name="begin" id="begin" placeHolder="Time Start"/>
          &nbsp;<br />
          <input type="text" name="end" id="end" placeHolder="Time End"/>
          &nbsp;<br /><br />
          <button id='addClassSun'>Add class +</button>
        </div>

        
        </div>
        <br /><br />
        <div className = {styles.submit}>
          <label for = "submit"> </label>
          <input type = "submit" value="Submit" id = "submit" style={{height:40, width:60, color: 'black',}}></input>
          <br /><br />
        </div>
    </div>

    </>
  )
    
}
