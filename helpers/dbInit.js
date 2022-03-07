const mysql = require('mysql2');
function initDB() {
    return dbCon = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'werwerwer',
        database: "cafe_db",
      });
}

module.exports = initDB