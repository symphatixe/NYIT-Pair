import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/link';
import { ChangePageTitle } from '../../server/backend';

const inter = Inter({ subsets: ['latin'] })

export default function ReportGeneration(){
    ChangePageTitle('Pair Generation');
    return (
        <>
        <div className = {styles.back}><Link href = '/user/main'>Back</Link> </div>
        <div className = {styles.gridSchedule}>
        <label htmlFor = "week">
            <span className = {styles.day}>Monday</span>
            <span className = {styles.day}>Tuesday</span>
            <span className = {styles.day}>Wednesday</span>
            <span className = {styles.day}>Thursday</span>
            <span className = {styles.day}>Friday</span>
            <span className = {styles.day}>Saturday</span>
            <span className = {styles.day}>Sunday</span>
        </label>
        </div>
        <div className = {styles.gridScheduleTimes}>
        <label htmlFor = "time">8AM   
        <br/><br/>10AM          
            <div className = {styles.cardClass}>   
            <h2 className = {inter.className}>test</h2>
            <p className = {inter.className}>Edit or add details here!</p>
            </div>
        <br/><br/>12PM 
        <br/><br/>2PM 
        <br/><br/>4PM 
        <br/><br/>6PM 
        <br/><br/>8PM 
        <br/><br/>10PM
        <br/><br/> 12AM</label>
        </div>
        </>
    )
}