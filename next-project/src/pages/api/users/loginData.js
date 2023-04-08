import mysql from "mysql2/promise";

export default async function handler(req, res) {

    const databaseConnection = await mysql.createConnection({

        host: "127.0.0.1",
        database: "default",
        port: 3306,
        user: "root",
        password: "Nerftactics0!"
    });

    try {

        const query = "SELECT email, password FROM users WHERE (email, password) = ( 'vkan@nyit.edu' , 'hello123')";
        const returnValue = [];

        const [results] = await databaseConnection.execute(query, returnValue);
        databaseConnection.end();

        res.status(200).json({ result: results });
    }

    catch (error) {
        res.status(500).json({ message: error.message });
    }
}