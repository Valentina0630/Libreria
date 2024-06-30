const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: "sql10.freesqldatabase.com",
    user: "sql10717121",
    password: " LGkpVZNhxZ",
    database: "sql10717121",
    port: 3306,

    // host: "sql10.freesqldatabase.com",
    // user: "sql10715857",
    // password: "Mu59JI5g2r",
    // database: "sql10715857",
    // port: 3306,
})

connection.connect((error) => {
    if (!error) { console.log("Conexión exitosa") }
    else {
        console.log("Conexión fallida")
    }
})

module.exports = connection


