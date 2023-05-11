import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/link';
//import { ChangePageTitle } from '../../server/backend';

const inter = Inter({ subsets: ['latin'] })

export default function ReportGeneration(){
   // ChangePageTitle('about');
    return (
        <>
        <div className = {styles.back}><Link href = '/user/main'>Back</Link> </div>
        <div className={styles.aboutTitle}>
        <h1>About Us</h1>
        </div>
        <div className = {styles.aboutName}>
        <h2>Vadim Kan</h2>
        </div>
        <div className = {styles.aboutDescription}>
        <p1>info about vadim here</p1>
        </div>
        <div className = {styles.aboutName}>
        <h2>Tahir Hossain</h2>
        </div>
        <div className = {styles.aboutDescription}>
        <p1>info about tahir here</p1>
        </div>
        <div className = {styles.aboutName}>
        <h2>Timur</h2>
        </div>
        <div className = {styles.aboutDescription}>
        <p1>info about timur here</p1>
        </div>
        <div className = {styles.aboutName}>
        <h2>Ivan Yu</h2>
        </div>
        <div className = {styles.aboutDescription}>
        <p1>info about ivan here</p1>
        </div>
        <div className = {styles.aboutName}>
        <h2>Eddie Ashkenazi</h2>
        </div>
        <div className = {styles.aboutDescription}>
        <p1>info about eddie here</p1>
        </div>
        
        </>
    )
}