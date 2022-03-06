require('dotenv').config()
const express = require('express');
const bodyParser= require('body-parser');
const apiRouter= require('./routes/api')
const app = express();
const cors = require('cors')
require('./db')

const PORT = 3003;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use((req,res,next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
// })

app.use('/api', apiRouter);
app.use(cors())


app.listen(PORT,()=>{
    console.log(`¡Server UP! on port: ${PORT}`); 
});