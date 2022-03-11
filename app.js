require('dotenv').config();
const express = require('express');
const bodyParser= require('body-parser');
const apiRouter= require('./routes/api');
const documentation = require('./documentation');
const cors = require('cors');
const app = express();
require('./db');

const PORT = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin: "*"}));
 
app.get('/',(req,res)=>{
    res.json(documentation);  
});
app.use('/api', apiRouter);  


app.listen(PORT,()=>{
    console.log(`¡Server UP! on port: ${PORT}`); 
});