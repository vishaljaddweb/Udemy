import React, { Component } from 'react';

class ClassConversion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: localStorage.getItem("Name") || ""
        }

    }

    inputChangeHandler = (event) => {
        // console.log(event.target.value);
        this.setState({name: event.target.value});
        // console.log(this.state.name);
    }

    componentDidUpdate() {
        localStorage.setItem("Name", this.state.name)
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="name">Name: </label>
                    <input onChange={this.inputChangeHandler} id="name" />
                </form>
                {this.state.name ? <strong>Hello {this.state.name}</strong> : 'Please type your name'}
            </div>
        )
    }
}

export default ClassConversion;