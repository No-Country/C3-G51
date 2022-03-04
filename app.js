require('dotenv').config()
const express = require('express');
const bodyParser= require('body-parser');
const apiRouter= require('./routes/api')
const app = express();
require('./db')

const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/api', apiRouter);


app.listen(PORT,()=>{
    console.log(`¡Server UP! on port: ${PORT}`);
});