//Express//
const express = require('express');
const app = express();
app.use(express.json());

//Dotenv//
require('dotenv').config();

const dbHost = process.env.HOSTNAME;
const dbAdmin = process.env.ADMIN_USER;
const dbPassword = process.env.ADMIN_PASSWORD;
const dbDatabase = process.env.DATABASE;

//Cors//
const cors = require('cors');
app.use(cors({origin:'http://localhost:5173'}));

//Database//
var sql = require("mssql");
const createTable = require('./database/createTable.js');

var config = {
    user: dbAdmin,
    password: dbPassword,
    server: dbHost, 
    database: dbDatabase,
    options: {
        encrypt: false, 
        trustServerCertificate: true 
    }
};

sql.connect(config, err => {
    if (err) {
        console.error('The connection to the database has failed. Error:', err);
    } else {
        console.log('Succesfully connected to the database.');
        
        const dbRequest = new sql.Request();

        createTable.create(dbRequest); // Create users table
    }    
  });



app.get('/api/test', function(req, res){

   res.json("Hello work!");
});

app.listen(3153);