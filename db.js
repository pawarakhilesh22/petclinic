const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'YOUR-RDS-ENDPOINT',
    user: 'admin',
    password: 'YOUR_PASSWORD',
    database: 'petclinic'
});

db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
        console.log(err);
    } else {
        console.log("Connected to AWS RDS MySQL");
    }
});

module.exports = db;