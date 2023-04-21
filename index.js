const express = require('express');
const dotenv = require ('dotenv').config();
const port = process.env.PORT;

const app= express();
console.log(port);

app.use('/openai',require('./routes/openaiRoutes'));

app.listen(port, () => console.log('server started on port ${port}'));
