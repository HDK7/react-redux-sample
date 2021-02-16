import React, {Component} from 'react';
import DisplayNumber from "../containers/DisplayNumber"

export default class DisplayNumberRoot extends Component{
  render(){
    return (
      <div>
        <h1>Display Number root</h1>
        <DisplayNumber></DisplayNumber>
      </div>
    )
  }
}