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