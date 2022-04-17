import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


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
         <h1>HELLO</h1>
        ,<h1>HELLO AGAIN</h1>]
      return (
        <div data-testid="carousel">
          <a href="/">Artists</a>
        <h1>React-responsive-carousel</h1>
        
        <div id="section2">
        <button style={btnStyle} onClick={(e)=>this.pausePlay()}>{this.state.buttonVal}</button>
        <Carousel width="90%" height="100%" statusFormatter={(current, total) => `${current} / ${total}`} showThumbs={false} infiniteLoop={true} interval={3000} autoPlay={this.state.autoplay}>
        {slides2}
        </Carousel>
        </div>
        </div>
      );
    }
  }

  

  export default Cards;
