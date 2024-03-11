const express = require('express');
const handlebars  = require('express-handlebars');
const Post = require('./models/Post');


// Config
    const app = express();
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())
    const PORT = 8081;

    // Template engine
    app.engine('handlebars', handlebars.engine({ defaultLayout: 'main',runtimeOptions:{allowProtoPropertiesByDefault:true,
    allowProtoMethodsByDefault:true}}));
    app.set('view engine', 'handlebars');


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
