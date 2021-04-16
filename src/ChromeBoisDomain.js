import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  // state = {
  //   coordinates: { x:0, y:0 }
  // }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
  handleClick = () => {
    toggleCycling()
  }

   handleKeyPress = (event) => {
    if (event.which === 'a'){
       resize('+')
     }else if (event.which ==='s'){
       resize('-')
     }
   }
  
  render() {
    return (
      <canvas 
        onKeyPress={this.handleKeyPress}
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
