const express = require('express');
const handlebars = require('express-handlebars')
const app = express();


//config
const PORT = 8081;
app.engine('handlebars', engine());
app.set('view engine', 'handlebars')
app.set('views','./views')

app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`)
});



