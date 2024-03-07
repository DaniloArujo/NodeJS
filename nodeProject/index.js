const express = require('express');
const app = new express();
const PORT = 8081;




//routes
app.get('/',(req,res)=>{
	res.send('Olá, mundo!')
})


app.listen(PORT,()=>{
	console.log(`server running on http://localhost:${PORT}`)
})
