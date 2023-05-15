import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/link';
import { ChangePageTitle } from '../../server/backend';

const inter = Inter({ subsets: ['latin'] })

export default function ReportGeneration(){
    //ChangePageTitle('Pair Generation');
    return (
        <>
        <div className = {styles.back}><Link href = '/user/main'>Back</Link> </div>
        <div style = {{display: 'flex'}}>
            <div className = {styles.gridScheduleL}>
                <span className = {styles.day}>Monday</span>
                <span className = {styles.day}>Tuesday</span>
                <span className = {styles.day}>Wednesday</span>
                <span className = {styles.day}>Thursday</span>
                <span className = {styles.day}>Friday</span>
                <span className = {styles.day}>Saturday</span>
            </div>
            <div className = {styles.gridScheduleR}>
            <span className = {styles.day}>Monday</span>
                <span className = {styles.day}>Tuesday</span>
                <span className = {styles.day}>Wednesday</span>
                <span className = {styles.day}>Thursday</span>
                <span className = {styles.day}>Friday</span>
                <span className = {styles.day}>Saturday</span>
            </div>
        </div>
        <div style = {{display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'flex-start'}}>
        <label htmlFor = "timeL">
        8AM
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>
            
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>
            
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>
            
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>
            
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>
            
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>
        <br/><br/>
        10AM          
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
        <br/><br/>
        12PM 
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
        <br/><br/>
        2PM 
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
        <br/><br/>
        4PM 
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
        <br/><br/>
        6PM 
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
        <br/><br/>
        8PM 
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
        <br/><br/>
        10PM
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
        <br/><br/> 
        12AM
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
        </label>
        </div>
        <div style = {{display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'flex-start'}}>
        <label htmlFor = "timeR">
        8AM
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>
            
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>
            
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>
            
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>
            
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>
            
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>
        <br/><br/>
        10AM          
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
        <br/><br/>
        12PM 
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
        <br/><br/>
        2PM 
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
        <br/><br/>
        4PM 
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
        <br/><br/>
        6PM 
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
        <br/><br/>
        8PM 
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
        <br/><br/>
        10PM
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
        <br/><br/> 
        12AM
            <div className = {`${inter.className} ${styles.cardClass}`}>   
            <h2>CSCI 318</h2>
            <p>Prof. Wenjia Li</p>
            <p>16 W. 722</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
 
            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>

            <div className = {`${inter.className} ${styles.cardClass}`}>
            <h2>test</h2>
            <p>test</p>
            <p>test</p>
            </div>
        </label>
        </div>
        </>
    )
}