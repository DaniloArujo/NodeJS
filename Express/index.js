var express = require('express');
var app = express();
const PORT = 8081;


app.get('/',(req, res) => {
    res.sendFile(__dirname + "/html/index.html")
})


app.get('/ola/:nome',(req, res) => {
    res.send(`olá, ${req.params.nome}`)
})

app.get('/sobre',(req, res) => {
    res.sendFile(__dirname + "/html/sobre.html")
})

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`)
});



