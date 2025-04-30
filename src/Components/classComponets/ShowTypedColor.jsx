import { Component } from "react";


class ShowTypedColor extends Component{
    constructor(){
        super()
        this.state = {
            color : ''
        }
    }

    handleColor = (e) =>{
        // console.log(e.target.value)
        this.setState({color : e.target.value})
    }

    render(){
        return <>
           <div>
            <div style={{ backgroundColor: this.state.color, width: "100px", height: "100px", border: "1px solid black" }}></div>
            <h1>Typed Value : {this.state.color}</h1>
            <input type="text" placeholder="enter something" onChange={this.handleColor}/>
           </div>
        </>
    }
}


export default ShowTypedColor