import { Component } from "react";

class PrintData2 extends Component{
    constructor(){
        super()
        this.state = {
            products : null
        }
    }

    componentDidMount(){
        fetch(`https://fakestoreapi.com/products/`)
        .then(response => response.json())
        .then(data => this.setState({products : data}))
    }

    render(){
        return <>
           {
            !this.state.products ? <p>Loding.....</p> : <>
               {
                this.state.products.map((product, index)=>{
                    return <h3 style={{color : product.price > 500 ? 'red' : ''}}>{product.title} - {product.price}</h3>
                })
               }
            </>
           }
        </>
    }
}


export default PrintData2