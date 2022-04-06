import React from "react";
import './intro.css'

import img1 from '../assets/c&s.png'
import img2 from '../assets/cx.jpg'
import img3 from '../assets/gc.jpg'
import img4 from '../assets/wknd.webp'
import img5 from '../assets/jbalvin.jpg'
import img6 from '../assets/dave.png'



const MainPage =()=>{
    let artists=[
        {name: "Chronixx", genre:"Reggae", img:img2},
        {name: "Gorgon City", genre:"House/dance",img:img3},
        {name: "Chase & Status", genre:"Drum and Bass",img:img1},
        {name: "The Weeknd", genre:"Pop", img:img4},
        {name: "Dave", genre: "Rap",img:img6},
        {name:"JBalvin", genre:"Latin",img:img5},
        {name:""}
    ]
    let result=artists.map((d,i)=>{
        return (
        <div className={'card'+((i+1)%5)}>
            <h1>{d.name}</h1><p>{d.genre}</p><img alt={i} src={d.img}/>
        </div>)
    })
    
    return(
        <div className="intro">
            <h1>My favourite music</h1>
            <h2>Hover over the circles below</h2>
            <div className="artists">
                {result}
            </div>
        </div>
    )
}

export default MainPage;