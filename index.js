const express = require('express');
const dotenv = require ('dotenv').config();
const port = process.env.PORT;
var cors = require('cors');


const app= express();
console.log(port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/openai',require('./routes/openaiRoutes'));

app.listen(port, () => console.log('server started on port ${port}'));

