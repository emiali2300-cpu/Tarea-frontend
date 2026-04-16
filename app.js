const express = require('express')
const cors = require('cors')
const mysql = require('mysql2');
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.post('/post/:id', (req, res) => {
    console.log("posted");
    const { id } = req.params;
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'Habana_12345',
        database: 'mangacafe'
    });
    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected to MySQL Database!');
        // Example query             
        connection.query('select * from platillo where id_dia = ?',[id], (err, results, fields) => {
            if (err) throw err;
            console.log(results);
            res.send(results);

        });
        // Close the connection     
        connection.end();
    });
});
app.post('/postmangas/:id', (req, res) => {
    console.log("posted");
    const { id } = req.params;
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'Habana_12345',
        database: 'mangacafe'
    });
    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected to MySQL Database!');
        // Example query             
        connection.query('select * from mangas where id_manga = ?',[id], (err, results, fields) => {
            if (err) throw err;
            console.log(results);
            res.send(results);

        });
        // Close the connection     
        connection.end();
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});