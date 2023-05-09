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
        <label htmlFor = "week">Monday&nbsp; Tueday&nbsp; Wednesday&nbsp; Thursday&nbsp; Friday&nbsp; Saturday&nbsp; Sunday</label>
        </div>
        <div className = {styles.gridScheduleTimes}>
        <label htmlFor = "time">8AM <br/><br/>10AM <br/><br/>12PM <br/><br/>2PM <br/><br/>4PM <br/><br/>6PM <br/><br/>8PM <br/><br/>10PM<br/><br/> 12AM</label>
        </div>
        </>
    )
}