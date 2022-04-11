import React from "react";
import './intro.css'

import img1 from '../assets/c&s.png'
import img2 from '../assets/cx.jpg'
import img3 from '../assets/gc.jpg'
import img4 from '../assets/wknd.webp'
import img5 from '../assets/jbalvin.jpg'
import img6 from '../assets/dave.png'
import img7 from '../assets/disclosure.webp'
import img8 from '../assets/mhuncho.jpg'



const MainPage =()=>{
   
    let countries=[
        {name:"UK", flag: "&#127468"},
        {name:"Canada", flag:"&#127464"},
        {name:"Colombia", flag:"&#127464"}
    ]
    let artists=[
        {name: "Chronixx", genre:"Reggae", img:img2,href:"chronixx"},
        {name: "Gorgon City", genre:"House/dance",img:img3,href:"gc"},
        {name: "Chase & Status", genre:"Drum and Bass",img:img1},
        {name: "The Weeknd", genre:"Pop", img:img4,href:"wknd"},
        {name: "Dave", genre: "Rap",img:img6},
        {name:"JBalvin", genre:"Latin",img:img5},
        {name:"M Huncho", genre: "Rap", img:img8},
        {name:"Disclosure", genre:"House/dance", img: img7}
    ]
    let result=artists.map((d,i)=>{
        let classId=((i+1)%8)===0?8:((i+1)%8)
        let cnt;
        if(d.flag) {cnt=d.flag.replace(/"([^"]+(?="))"/g, '$1')}
        return (
        <a href={d.href} className={'card'+classId}>
            <h1>{d.name}</h1><p>{d.genre}</p><p>Country: U+1F1E9;</p><img className="artists" alt={i} src={d.img}/>
        </a>)
    })
    
    return(
        <div className="intro">
            <a href='/slides'>Slideshow</a>
            <h1>My favourite artists</h1>
            <div className="artists">
                {result}
            </div>
        </div>
    )
}

export default MainPage;