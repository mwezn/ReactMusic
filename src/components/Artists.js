import React from "react";
import './intro.css'

import img1 from '../assets/musicians/c&s.png'
import img2 from '../assets/musicians/cx.jpg'
import img3 from '../assets/musicians/gc.jpg'
import img4 from '../assets/musicians/wknd.webp'
import img5 from '../assets/musicians/jbalvin.jpg'
import img6 from '../assets/musicians/dave.png'
import img8 from '../assets/musicians/mhuncho.jpg'



const MainPage =()=>{
   
    let countries=[
        {name:"UK", flag: "&#127468"},
        {name:"Canada", flag:"&#127464"},
        {name:"Colombia", flag:"&#127464"}
    ]
    let artists=[
        {name: "Chronixx", genre:"Reggae", img:img2,href:"chronixx"},
        {name: "Gorgon City", genre:"House/dance",img:img3,href:"gc"},
        {name: "The Weeknd", genre:"Pop", img:img4,href:"wknd"},
        {name: "Dave", genre: "Rap",img:img6},
        {name:"JBalvin", genre:"Latin",img:img5},
        {name:"M Huncho", genre: "Rap", img:img8},
        {name:"Disclosure", genre:"House/dance"}
    ]
    let result=artists.map((d,i)=>{
        let classId=((i+1)%8)===0?8:((i+1)%8)
    
        return (
        <a href={d.href} className={'card'+classId}>
            <h1>{d.name}</h1><p>{d.genre}</p><img className="artists" alt={i} src={d.img}/>
        </a>)
    })
    
    return(
        <div className="intro">
            <a href='/slides'>Slideshow</a>
            <a href='/projects'>Projects</a>
            <h1>My favourite artists</h1>
            <div className="artists">
                {result}
            </div>
        </div>
    )
}

export default MainPage;
