const Sequelize = require('sequelize');


const sequelize = new Sequelize('teste','root','root',{
	host: 'localhost',
	dialect: 'mysql'
})


sequelize.authenticate().then(()=>{
	console.log('autenticado com sucesso!')
}).catch(function(erro){
	console.log(erro)
})

