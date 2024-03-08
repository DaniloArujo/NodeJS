const Sequelize = require('sequelize');  
    
    // Connection to the database
    const sequelize = new Sequelize('postapp', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql'
    });
    sequelize.authenticate().then(()=>{
        console.log('autenticado com sucesso!')
    }).catch(function(erro){
        console.log(erro)
    })

    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }