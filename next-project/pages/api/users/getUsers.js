import { User } from '../../../server/backend'
const mysql = require('mysql2/promise')

export default async function fetchHandler(req, res) {

    const connection = await mysql.createConnection({
        host: 'localhost',
        database: 'default',
        port: 3306,
        user: 'root',
        password: 'Nerftactics0!'
    });

    try {
    
        const [users] = await connection.query('SELECT * FROM users');
        const fetchedUsers = [];

        for (let i = 0; i < users.length; i++) {
            const {user_ID, name, password, email, student_ID, year, major, campus, bio} = users[i];
            const user = new User(user_ID, name, password, email, student_ID, year, major, campus, bio);

            try{
                const [hashtags] = await connection.query('SELECT (hashtag) FROM hashtags WHERE user_ID = ?', [user.userID]);
                const index = 0;
                hashtags.forEach(item => user.addHashtag(item.hashtag));
            }

            catch(error) {
                console.log('some error', error);
            }

            fetchedUsers.push(user);
        }

        res.status(200).json(fetchedUsers);
    }
    
    catch(error) { console.log('some error', error); }
    finally { connection.end(); }
}