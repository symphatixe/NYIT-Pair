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
        <label for="week">Monday - Tuesday - Wednesday - Thursday - Friday - Saturday - Sunday </label>
        </div>
        
<div className={styles.classTimes}>
        <label for="class">Class code: </label>
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
