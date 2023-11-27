//Express//
const express = require('express');
const app = express();
app.use(express.json());

//Cors//
const cors = require('cors');
app.use(cors({origin:'http://localhost:3000'}));




app.get('/test', function(req, res){
   res.send("Hello world!");
});

app.listen(4000);