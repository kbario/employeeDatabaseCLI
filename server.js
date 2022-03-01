const express = require('express');
const mysql = require('mysql2')

const app = express();
const PORT = process.env.PORT||8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

const db = mysql.createConnection(
    {
      // host: "locahost",
      host: "127.0.0.1", // localhost
      // MySQL username,
      user: "root",
      // MySQL password
      password: "werwerwer",
      database: "",
    },
    console.log(`Connected to the  database.`)
  );
  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});