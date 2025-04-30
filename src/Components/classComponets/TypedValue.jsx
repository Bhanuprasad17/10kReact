import { Component } from "react";

class TypedValue extends Component{
    constructor(){
        super()
        this.state = {
            text : ''
        }
    }

    handleChange = (e) =>{
        console.log(e.target.value)
        this.setState({text : e.target.value})

    }


    render(){
        return <>
           <div>
             <h1>Typed value : {this.state.text}</h1>
             <input type="text" placeholder="type something" onChange={this.handleChange}/>
           </div>
        </>
    }
}

export default TypedValue