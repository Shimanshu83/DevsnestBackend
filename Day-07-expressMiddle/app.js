const express = require('express');

const app = express();




app.get(
    '/',
    
    (req,res) => {
        // res.send("<h1>Hello</h1>") ; 
        // res.sendStatus(200);
        res.send('adfafs');
        
        // res.status(400).send("hello");
       
    }
)


app.listen(3030);
