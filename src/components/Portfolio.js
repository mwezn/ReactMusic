import React from "react";
import './intro.css'

import img1 from '../assets/c&s.png'
import img2 from '../assets/cx.jpg'
import img3 from '../assets/gc.jpg'
import img4 from '../assets/wknd.webp'



const MainPage =()=>{
    let artists=[
        {name: "Chronixx", genre:"Reggae", img:img2},
        {name: "Gorgon City", genre:"House/dance",img:img3},
        {name: "Chase & Status", genre:"Drum and Bass",img:img1},
        {name: "The Weeknd", genre:"Pop", img:img4},
        {name: "Dave", genre: "Rap"}
    ]
    let result=artists.map((d,i)=>{
        return (
        <div className={'card'+(i+1)}>
            <h1>{d.name}</h1><p>{d.genre}</p><img alt={i} src={d.img}/>
        </div>)
    })
    
    return(
        <div className="intro">
            <h1>My favourite music</h1>
            <div className="artists">
                {result}
            </div>
        </div>
    )
}

export default MainPage;