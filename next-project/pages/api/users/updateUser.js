import { User } from '../../../server/backend'
const mysql = require('mysql2/promise')

export default async function updateHandler(req, res) {

    const connection = await mysql.createConnection({
        host: 'localhost',
        database: 'default',
        port: 3306,
        user: 'root',
        password: 'Nerftactics0!'
    });

    const {activeEmail, name, major, studentID, year, campus, bio, parsedHashtag} = req.body;
    const hashtagQuery = 'INSERT INTO hashtags (hashtag, user_ID) VALUES (?, ?)';

    try {
        const [check] = await connection.query('SELECT * FROM users WHERE email = ?', [activeEmail]);
        const {user_ID} = check[0];
        const userID = user_ID;

        await connection.query('UPDATE users ' +
                               'SET name = ?, student_ID = ?, year = ?, major = ?, campus = ?, bio = ?' + 
                               'WHERE email = ?',
                               [name, studentID, year, major, campus, bio, activeEmail]);

        for (const c of parsedHashtag) {
            await connection.query(hashtagQuery, [c, userID]);
        }
        
        const [setActive] = await connection.query('SELECT * FROM users WHERE email = ?', [activeEmail]);

        if (setActive.length > 0) {

            const {user_ID, name, password, email, student_ID, year, major, campus, bio} = setActive[0];
            const user = new User(user_ID, name, password, email, student_ID, year, major, campus, bio);
            
            res.status(200).json(user);
        }

        else {res.status(400).json( { message: 'Creating user profile has failed.'}); }
    }

    catch(error) { console.log('some error', error); }
    finally { connection.end(); }
}