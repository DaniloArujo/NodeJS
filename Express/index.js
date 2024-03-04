var express = require('express');
var app = express();
const PORT = 8081;


app.get('/',(req, res) => {
    res.send('Olá, mundo!')
})


app.get('/ola/:nome/:cargo',(req, res) => {
    res.send(`olá, ${req.params.nome}`)
})

app.get('/sobre',(req, res) => {
    res.send('sobre')
})

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`)
});



