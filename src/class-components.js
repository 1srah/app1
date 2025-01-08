import React, {Component} from "react";

export default class Button extends Component{
    showAlert(msg){
        alert(msg)
    }

    onClickButtonOK = () => {
        this.showAlert("Hello")
    }
    render(){
        return <botton onClick={this.onClickButtonOK}>OK</botton>
    }
}