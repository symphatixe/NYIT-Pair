const mysql = require('mysql2/promise');

export default async function loginHandler(req, res) {

    const databaseConnection = await mysql.createConnection({

        host: "localhost",
        database: "default",
        port: 3306,
        user: "root",
        password: "Nerftactics0!"
    });

    const {email, password} = req.body;

    try {

        const [result] = await databaseConnection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
        console.log(result)

        if (result.length > 0) {

            console.log(result[0]);
            res.status(200).json({ message: 'Login successful' });
        } 

        else {
            // Invalid credentials
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }

    catch (error) {
        console.log('some error', error)
    }
}