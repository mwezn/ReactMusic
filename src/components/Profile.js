import React, { useEffect } from "react";
import './intro.css'

const ProfilePage =(props)=>{
    const [AppState, setParams] = React.useState([]);
    let url=`/artist/${props.id}`
    
    async function data(){
        const options = {
            method: 'GET',
            mode:'cors'
        };
        
        fetch(url, options)
            .then(response => response.json())
            .then(d=>{
                console.log(d)
                return d
            })
            .then(d=>setParams(old=>{
                return { ...old, ...d}
            }))
            .catch(err => console.error(err));
    }
    useEffect(()=>{
        data();
        
    },[])
    console.log(AppState)
    let dataArr=Array.from(Object.entries(AppState))
    console.log(dataArr)
    const dataDivs =()=>{
        let artists=dataArr[1]
        let target=artists[1]
        let info=target.hits[0].artist
        console.log(info)
        return (
            <div>
            <h1>{info.name}</h1>
            <img src={info.avatar} alt={info.avatar}></img>
            </div>
            
        )}
    return(
        <div className="intro">
            <div className="artists">
            {AppState.length===0?"Loading":dataDivs()}
            </div>
        </div>
    )
}

export default ProfilePage;