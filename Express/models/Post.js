const db = require('./db')

const Post = db.sequelize.define('postagens',{
    titulo: {
        type: db.Sequelize.DataTypes.STRING,
    },
    conteudo: {
        type: db.Sequelize.DataTypes.TEXT,
    }
})

//Post.sync({force: true})

module.exports = Post