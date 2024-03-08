const express = require('express');
const handlebars  = require('express-handlebars');
const Post = require('./models/Post')


// Config
    const app = express();
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())
    const PORT = 8081;

    // Template engine
    app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');


// Routes
app.get('/cadastro',(req,res)=>{
    res.render('formulario.handlebars')
})

app.post('/add',(req,res)=>{
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.send('Post criado com sucesso')
    }).catch(function(erro){
        res.send('houve um erro: '+ erro)
    })
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
