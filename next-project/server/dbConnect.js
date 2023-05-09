const mysql = require('mysql2/promise')

export default connection = mysql.createConnection({
    host: 'localhost',
    database: 'default',
    port: 3306,
    user: 'root',
    password: 'Nerftactics0!'
  });
  
  connection.connect((error) => {

    if (error) {
      console.error('Failed to connect to the database:', error);
    } 
    
    else {
      console.log('Connected to the database');
    }
  });