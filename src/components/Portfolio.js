import React from "react";
import './portfolio.css'

import img1 from '../assets/myproj/todo.png'
import img2 from '../assets/myproj/medicalmaths.png'
import img3 from '../assets/myproj/maja.png'
import img4 from '../assets/myproj/client-posts.png'
import img5 from '../assets/myproj/repo.png'




const MainPage =()=>{
   

    const onClick =(e)=>{
        window.location.href='/slides'
    }
    let myprojects=[
        {name: "Todo Emailer", tech:"React, Mongo, Express",img:img1},
        {name:"Medical data graph", tech:"HTML/Js, D3.js",img:img2},
        {name: "Maja Notes", tech:"CSS/JS, Ejs, Jest", img:img3, href:'maja'},
        {name: "Telegram style notes", tech:"Docker, Mongo, HTML", img:img4},
        {name: "Github repo tracker", tech:"React", img:img5}
    ]
    let result=myprojects.map((d,i)=>{
        let classId=((i+1)%8)===0?8:((i+1)%8)
    
        return (
        <div onClick={(e)=>onClick(e)} className={'card'+classId}>
            <h1>{d.name}</h1><p>{d.tech}</p><img className="artists" alt={i} src={d.img}/>
        </div>)
    })
    
    return(
        <div className="intro">
            <a href='/slides'>Slideshow</a>
            <a href="/">Artists</a>
            <h1>Things ive built</h1>
            <div className="artists">
                {result}
            </div>
        </div>
    )
}

export default MainPage;
