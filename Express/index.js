const express = require('express');
const handlebars  = require('express-handlebars');
const Sequelize = require('sequelize');

// Config
    const app = express();
    const PORT = 8081;

    // Template engine
    app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');

    // Connection to the database
    const sequelize = new Sequelize('teste', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql'
    });
    sequelize.authenticate().then(()=>{
        console.log('autenticado com sucesso!')
    }).catch(function(erro){
        console.log(erro)
    })




// Routes
app.get('/cadastro',(req,res)=>{
    res.render('formulario.handlebars')
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
