const Sequelize = require('sequelize');

const sequelize = new Sequelize('teste','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("Sucesso")
}).catch()


//postagem

const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.DataTypes.STRING
    },
    conteudo:{
        type: Sequelize.DataTypes.TEXT
    }
})

Postagem.sync({force:true})
//usuarios