import { Component } from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    handleIncrement=() =>{
        if(this.state.count < 10){
            this.setState({count : this.state.count + 1})
        }
    }

    handleReset = () => {
        if(this.state.count > 0){
            this.setState({count : 0})
        }
    }

    handleDecrement = () =>{
        if(this.state.count > 0){
            this.setState({count : this.state.count - 1})
        }
    }

    render(){
        return <>
           <h3>{this.state.count}</h3>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleDecrement}>-</button>
        </>
    }
}


export default Counter