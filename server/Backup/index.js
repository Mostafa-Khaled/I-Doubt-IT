require('dotenv').config({path:__dirname+'/.env'})

const express = require("express");

const PORT = process.env.PORT;

const app = express();

const fs = require('fs');


//app.use(express.urlencoded());

app.use(express.json());


app.get('/api', (req, res) => {
    let obj;
    fs.readFile('./server/Database/todos.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        res.json(obj);
    }) 
})
app.post('/api', (req, res) => {
    fs.writeFile ("./server/Database/todos.json", JSON.stringify(req.body, null, 4), function(err) {
        if (err) throw err;
        }
    );
})
app.get('/easy', (req, res) => {
    res.json({message : "GG wp"});
})
app.get('/wp', (req, res) => {
    res.json({message : "Jg Diff"});
})
// app.get('*', (req, res) =>{
//     res.end('Page not found');
// })
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});