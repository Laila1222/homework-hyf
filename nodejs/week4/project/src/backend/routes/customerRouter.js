const express = require('express');
const router = express.Router();
const pool = require ('./../database.js');
const fs = require ('fs');


// This is not ready yet!
router.get('/order', (req, res) => {
    fs.readFile('./text.html',function (err, data){
        console.log(data);
        // res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        // res.write(data);
        // res.end();
        res.sendFile('C:/Users/Lillus/documents/github-hyf-homework/homework-hyf/nodejs/week4/project/public/index.html');
    })
    // res.send('hello from customer router');
})

module.exports = router;