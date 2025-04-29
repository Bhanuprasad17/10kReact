import { Component } from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    handleIncrement = () =>{
        if(this.state.count < 20){
            this.setState({count : this.state.count + 1})
        }
    }

    hanldeDecrement = () => {
        if(this.state.count > 0){
            this.setState({count : this.state.count - 1})
        }
    }

    hanldeReset = () => {
        if(this.state.count > 0){
            this.setState({count : 0})
        }
    }

    render(){
        console.log(this.state.count)
        return <>
          <h3>{this.state.count}</h3>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.hanldeReset}>🔄</button>
          <button onClick={this.hanldeDecrement}>-</button>
        </>
    }
}

export default Counter