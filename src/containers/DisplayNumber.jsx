import DisplayNumber from '../components/DisplayNumber';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return{ // 객체는 redux에서 전달하고 싶은 것의 이름
            // state = {number:store.getState().number}
            // store.subscribe(function(){
            // this.setState({number:store.getState().number});
            // }.bind(this)) 
            // 의 역할을 한다. redux 값이 바뀔때마다 자동 실행
            // 아래 state는 redux의 것
        number: state.number
    }
}

//function mapReduxDispatchToReactProps(){}

export default connect(mapReduxStateToReactProps/*, mapReduxDispatchToReactProps 없어도 됨 여기서 패스*/)(DisplayNumber);

/*
import React, { Component } from 'react';
import store from "../store";

export default class extends Component{
    
    state = {number:store.getState().number}
    constructor(props){
        super(props);
        store.subscribe(function(){
            this.setState({number:store.getState().number});
        }.bind(this))
    }
    render(){
        return (
            <DisplayNumber number={this.state.number}></DisplayNumber>
        )
    }
}
*/