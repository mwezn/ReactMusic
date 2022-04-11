const express= require('express')
const app=express();
const artist=require('./controllers/artist')
let port=3001

app.use('/artist',artist)

app.get('/',(req, res)=>{
    res.send("HELLO MIKE")
})
app.listen(port,()=>{
    console.log("Server listening on:"+port)
})