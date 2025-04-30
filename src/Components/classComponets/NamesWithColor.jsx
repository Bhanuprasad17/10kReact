import { Component } from "react";


class NamesWithColor extends Component{
    constructor(){
        super()
        this.state = {
            name : ["Bhanu", "Mahesh" , "sreenu", "devudu"],
            color : ["yellow","brown", "green", "silver"]
        }
    }

    render(){
        return <>
           {
            this.state.name.map((data,index)=>{
                return <h1 style={{color : `${this.state.color[index]}`}}>{data}</h1>
            })
           }
        </>
    }
}

export default NamesWithColor