const express = require('express')
const Post = require('../models/Post');
const router = express.Router()


router.get('/', (req,res)=>{
    Post.findAll({order:[['id','DESC']]}).then(function(posts){
        res.render('home',{posts: posts})
    })
})

router.get('/cadastro',(req,res)=>{
    res.render('formulario')
})

router.post('/add',(req,res)=>{
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send('houve um erro: '+ erro)
    })
})

router.get('/deletar/:id',(req,res)=>{
    Post.destroy({where:{'id': req.params.id}}).then(function(){
        res.send("deletado com sucesso")
    }).catch(function(erro){
        res.send("Esta postagem não existe")
    })
})


module.exports = router;