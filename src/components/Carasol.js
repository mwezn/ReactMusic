import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import img1 from '../assets/c&s.png'
import img2 from '../assets/cx.jpg'
import img3 from '../assets/gc.jpg'



class Cards extends React.Component {
    constructor(props) {
      super(props)
      this.state= {autoplay :false, buttonVal:"play"}
    }
    
    pausePlay(){
        this.state.autoplay?this.setState({autoplay :false, buttonVal:"play"}):this.setState({autoplay:true,buttonVal:"X"})
        
    }
    
    render() {
     
      const btnStyle={width:"75px",height:"75px", position:"relative", top:"0px",backgroundColor:"rgb(1,1,1,0.7)",color:"white"}
      
      let slides2=[
         <img  src={img1} alt="1" />,
         <img  src={img2} alt="2" />  ,
         <img  src={img3} alt="3" />  ]
      return (
        <div data-testid="carousel">
            <h1>React-responsive-carousel</h1>
        
        <div id="section2">
        <button style={btnStyle} onClick={(e)=>this.pausePlay()}>{this.state.buttonVal}</button>
        <Carousel width="50%" height="50%" statusFormatter={(current, total) => `${current} / ${total}`} showThumbs={false} infiniteLoop={true} interval={3000} autoPlay={this.state.autoplay}>
        {slides2}
        </Carousel>
        </div>
        </div>
      );
    }
  }

  

  export default Cards;