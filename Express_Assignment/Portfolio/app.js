const express = require('express');

const app = express();

const path= require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

port=3000;
app.listen(port)
console.log(`The server is running in ${port}`);