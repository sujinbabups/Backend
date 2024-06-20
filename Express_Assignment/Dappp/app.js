const express = require('express');

const app = express();

const path= require('path');

app.use(express.static(path.join(__dirname, 'Public')));

app.use(express.urlencoded({ extended: true }));

certDetails=[];

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'Public','certDapp.html'))
})



app.get('/certDisplay',(req,res)=>{
    res.sendFile(path.join(__dirname,'Public','certDisplay.html'))
});

app.get('/issuecert',(req,res)=>{
    res.sendFile(path.join(__dirname,'Public','issuecert.html'))
})


app.get('/:id', (req,res) => {
    const id = req.params.id;
    const crt = certDetails.find((crt) => crt.crtId == id);
    if (!crt) {
      return res.status(404).send("Certificate not found");
    }
  
    res.sendFile(path.join(__dirname, 'Public', 'certDisplay.html'));
})

// app.get('/api/issuecert/:id', (req,res) => {
//     const id = req.params.id;
//     const crt = certDetails.find(cr => cr.crtId == id);
//     if (!crt) {
//         return res.status(404).json({ error: 'Certificate is not found' });
//     }
//     res.json(crt);
// })


app.post('/issuecert', (req,res) => {
    const {course,cid,cname,grade,issd } = req.body;
    console.log(req.body);
    const NewCert = {course, cid,cname,grade, issd };
    certDetails.push(NewCert);
    console.log(NewCert);
    // console.log(NewCert.cid);
    res.sendFile(path.join(__dirname,'Public','/certDisplay'))
    res.redirect('/certDisplay');
})

app.listen(3025, () => {
    console.log("The server is starting")
})



