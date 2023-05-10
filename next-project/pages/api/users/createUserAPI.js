import { User } from '../../../server/backend'
const mysql = require('mysql2/promise')

export default async function createHandler(req, res) {

    const connection = await mysql.createConnection({
        host: 'localhost',
        database: 'default',
        port: 3306,
        user: 'root',
        password: 'Nerftactics0!'
    });

    const {email, password2} = req.body;

    try{

        const [check] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
        
        if (check.length === 0) {

            const [create] = await connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password2]);
            res.status(200).json('User creation successful.');
        }

        else if (check.length > 0) {
            const {email} = check[0];
            const user = new User(email);

            res.status(401).json(user);
        }

        else { res.status(404).json('Server error has occured.'); }
    }

    catch(error) { console.log('some error', error); }
    finally { connection.end(); }
}