import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/link';
import { ChangePageTitle } from '../../server/backend';
import { useContext, useEffect, useState } from 'react';
import { ActiveUserContext } from '../../src/ActiveUserContext';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export function AutoFillSelect({ frontendUser }) {
    const [selectUser, setSelectUser] = useState('');
    const [users, setUsers] = useState([]);

    useEffect ( () => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {

        try {

            const response = await fetch('http://localhost:3000/api/users/getUsers');
            const data = await response.json();
            setUsers(data);
        }

        catch(error) {console.log('Error with fetching users', error); }
    }

    const handleSelection = (userID) => {
        const userObject = users.find(( user ) => user.userID === parseInt(userID));
        setSelectUser(userObject);
        frontendUser(userObject);
    }

    return (
        <select name = "usersList" id = "selectList" value = {selectUser.userID} onChange = {e => handleSelection(e.target.value)}>
        <option value = ""> Select a user to generate pair report with.</option>
        {users.map((user) => (
            <option key = {user.userID} value = {user.userID}> {user.name}</option>
        ))}
        </select>
    );
}

export default function ReportGeneration(){
    //ChangePageTitle('Pair Generation');
    const router = useRouter();
    const { loggedUser } = useContext(ActiveUserContext);
    const [selectedUser, setSelectedUser] = useState('');

    const handleGeneration = () => {
        router.push('/user/report');
    }


    const handleSchedule = async (frontendUser) => {
        setSelectedUser(frontendUser);

        
    }


    return (
        <>
        <div className = {styles.back}><Link href = '/user/main'>Back</Link> </div>
        <div style = {{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
            <div style = {{gridColumn: 1}}>
            <br></br>
            <h3 className = {inter.className}>Choose a user to generate report with, {loggedUser && loggedUser.name}</h3>
            <br></br>

                <div className = {styles.gridScheduleL}>
                    <span>Monday</span>
                    <span>Tuesday</span>
                    <span>Wednesday</span>
                    <span>Thursday</span>
                    <span>Friday</span>
                    <span>Saturday</span>
                </div>
        8AM
            <div className = {styles.gridClasses}>
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
            </div>
            <br/><br/>
        10AM
            <div className = {styles.gridClasses}>     
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
            </div>    
            <br/><br/>
        12PM 
            <div className = {styles.gridClasses}>     
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
            </div>  
            <br/><br/>
        2PM 
            <div className = {styles.gridClasses}>     
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
            </div>  
            <br/><br/>
        4PM 
            <div className = {styles.gridClasses}>     
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
            </div>  
            <br/><br/>
        6PM 
            <div className = {styles.gridClasses}>     
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
            </div>  
            <br/><br/>
        8PM 
            <div className = {styles.gridClasses}>     
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
            </div>  
            <br/><br/>
        10PM
            <div className = {styles.gridClasses}>     
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
            </div>  
            <br/><br/> 
        12AM
            <div className = {styles.gridClasses}>     
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
            </div>  
            </div>

            <div style = {{gridColumn: 2}}>
            <br></br>
            <AutoFillSelect frontendUser = {handleSchedule}/>
            <br></br>
            <br></br>

                <div className = {styles.gridScheduleR}>
                    <span>Monday</span>
                    <span>Tuesday</span>
                    <span>Wednesday</span>
                    <span>Thursday</span>
                    <span>Friday</span>
                    <span>Saturday</span>
                </div>
        8AM
            <div className = {styles.gridClasses}>
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
            </div>
            <br/><br/>
        10AM
            <div className = {styles.gridClasses}>     
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
            </div>    
            <br/><br/>
        12PM 
            <div className = {styles.gridClasses}>     
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
            </div>  
            <br/><br/>
        2PM 
            <div className = {styles.gridClasses}>     
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
            </div>  
            <br/><br/>
        4PM 
            <div className = {styles.gridClasses}>     
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
            </div>  
            <br/><br/>
        6PM 
            <div className = {styles.gridClasses}>     
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
            </div>  
            <br/><br/>
        8PM 
            <div className = {styles.gridClasses}>     
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
            </div>  
            <br/><br/>
        10PM
            <div className = {styles.gridClasses}>     
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
            </div>  
            <br/><br/> 
        12AM
            <div className = {styles.gridClasses}>     
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
            </div>  
            </div>
        </div>
        </>
    )
}