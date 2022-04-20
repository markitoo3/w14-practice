import React, { Component } from 'react'

class ButtonWithClass extends Component {
    constructor() {
        super()
        this.state = {
            key1: "This is the default state of a class component",
            key2: 0
        }
    }
    ButtonOnClick = () => {
        this.setState({
            key1: "This is the NEW state of a class component"
        });
    }
    render() {
        return (
        <>
            <button onClick = {this.ButtonOnClick}>{this.state.key1}</button>
            <button onClick = {() => this.setState({key2: 1})}>{this.state.key2}</button>
        </>
        )
    }
}

export default ButtonWithClass