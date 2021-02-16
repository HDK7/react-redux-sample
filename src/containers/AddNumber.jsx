import AddNumber from "../components/AddNumber";
import {connect} from 'react-redux';
import store from "../store";

function mapDispatchToProps(dispatch){
    return {
    // onClick={function(size){
    // }.bind(this)
    // store.dispatch({type:'INCREMENT', size:size});
        onClick : (size) => dispatch({type:'INCREMENT', size:size})
    }
}
export default connect(null, mapDispatchToProps)(AddNumber);


/*
import React, {Component} from "react";
import store from '../store';

export default class extends Component{
    render(){
        return <AddNumber onClick={function(size){
            store.dispatch({type:'INCREMENT', size:size});
        }.bind(this)} ></AddNumber>
    }
}
*/