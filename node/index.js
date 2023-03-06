const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'fullcyclepass',
    database: 'fullcycledb'
}

const mysql = require('mysql')

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)
    connection.query("DROP TABLE IF EXISTS people;")
    connection.query("CREATE TABLE people( id int not null auto_increment,  name varchar(255), primary key(id));")

    connection.query("INSERT INTO people (name) VALUES ('Rafael')")
    connection.query("INSERT INTO people (name) VALUES ('Pedro')")
    connection.query("INSERT INTO people (name) VALUES ('Tiago')")

    const sql = `SELECT * FROM people`
    connection.query(sql, (err, rows) => {
         
        if(err){
            console.log('Erro ao buscar registros', err);
            return;
        }

        res.send(`
            <h1> Full Cycle</h1> 
            <h2> Usuários </h2>
            <ul>
                ${rows.map(row => 
                    `<li> ${row.id} - ${row.name}</li>`
                ).join('')}
            </ul>
        `);
        
        connection.end();
        
    });
    
})

app.listen(port, () => {
    console.log('Rodando na porta '+ port)
})