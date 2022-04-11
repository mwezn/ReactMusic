const express = require('express');
const router = express.Router();
const fetch =require('node-fetch')

const mySearch =[
    {id:0, query:'Chronixx'},
    {id:1, query:'Gorgon City'},
    {id:2, query:'The Weeknd'}
]

async function data(url){
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
          'X-RapidAPI-Key': '8422c62639msh5d98953b7965fcep1d9428jsna7a15a9f200c'
        }
      };
      const res= await fetch(url, options);
      const data=await res.json();
      return data
}

router.get('/', (req, res)=>{
    res.send('Artists are numbered randomly :'+ Math.floor(Math.random()*100))
})

router.get('/:id', async (req, res)=>{
    let url=`https://shazam.p.rapidapi.com/search?term=${mySearch[req.params.id].query}&locale=en-US&offset=0&limit=5`
    console.log(mySearch[req.params.id].query)
    let result=await data(url)
    console.log(result)
    res.send(result)
})

module.exports=router;