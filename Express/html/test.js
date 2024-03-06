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

//usuarios

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.DataTypes.STRING
    },
    sobrenome:{
        type: Sequelize.DataTypes.STRING
    },
    idade:{
        type: Sequelize.DataTypes.INTEGER
    },
    email:{
        type: Sequelize.DataTypes.STRING
    }
})


//Postagem.sync({force:true})
//Usuario.sync({force:true})