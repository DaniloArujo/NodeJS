const express = require('express');
const exphbs  = require('express-handlebars');
const Sequelize = require('sequelize');

// Config
const app = express();
const PORT = 8081;

// Template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Connection to the database
const sequelize = new Sequelize('teste', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

// Define Sequelize models
const User = sequelize.define('user', {
    // Your model fields here
    username: Sequelize.STRING,
    email: Sequelize.STRING
});

// Sync Sequelize models with the database
sequelize.sync().then(() => {
    console.log('Database and tables synced');
}).catch((err) => {
    console.error('Error syncing database:', err);
});

// Routes
// Define your routes here

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
