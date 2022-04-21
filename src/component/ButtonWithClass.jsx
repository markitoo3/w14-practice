import React, { Component } from 'react'

class ButtonWithClass extends Component {
    constructor() {
        super()
        this.state = {
            key1: "This is the default state of a class component",
            key2: 0,
            title: {
                main: "main title",
                sub: "dub title"
            },
            countries: []
        }
        console.log("1");
    }
    ButtonOnClick = () => {
        this.setState({
            key1: "This is the NEW state of a class component"
        });
    }

    componentDidMount() {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countriesData => this.setState(
            () => {
                return {countries: countriesData}
            },
            () => console.log(this.state)
        ))
    }

    render() {
        return (
        <>
            <button onClick = {this.ButtonOnClick}>{this.state.key1}</button>
            <button onClick = {() => this.setState({key2: 1})}>{this.state.key2}</button>
            <button onClick = {() =>
                this.setState(
                    () => {
                        return {title: {
                            main: "h1",
                            sub: "satring"
                            }  
                        }
                    },
                    () => {
                        console.log(this.state);
                    }
                )
            }>{this.state.title.main}</button>
            <div className='countries'>
                {this.state.countries.map((country, index) => <div key={index}>{country.name.common}</div>)}
            </div>
        </>
        )
    }
}

export default ButtonWithClass