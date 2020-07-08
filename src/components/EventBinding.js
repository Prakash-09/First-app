import React, { Component } from 'react';

class EventBinding extends Component{
    constructor(){
        super();

        this.state = {
            message:'No buttons clicked'
        }
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange6.bind(this);
        this.handleChange6 = this.handleChange4.bind(this);
    }
    handleChange1 = () => {
        this.setState({
            message:'Button 1 Clicked'
        })
    }
    handleChange2() {
        this.setState({
            message:'Button 2 Clicked'
        })
    }
    handleChange3() {
        this.setState({
            message:'Button 3 Clicked'
        })
    }
    handleChange4() {
        this.setState({
            message:'Button 4 Clicked'
        })
    }
    handleChange5() {
        this.setState({
            message:'Button 5 Clicked'
        })
    }
    handleChange6() {
        this.setState({
            message:'Button 6 Clicked'
        })
    }
    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.handleChange1}>Button 1</button>
                <button onClick={this.handleChange2.bind(this)}>Button 2</button>
                <button onClick={() => this.handleChange3()}>Button 3</button>
                <button onClick={this.handleChange4}>Button 4</button>
                <button onClick={this.handleChange5}>Button 5</button>
                <button onClick={this.handleChange6}>Button 6</button>
            </div>
        );
    }
}
export default EventBinding;