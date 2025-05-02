import { Component } from "react";


class PrintData extends Component{
    constructor(){
        super()
        console.log('constructor log')
        this.state = {
            count : 0,
            products : null
        }
    }

    componentDidMount(){
        console.log('component did mount')
        fetch(`https://fakestoreapi.com/products`)
          .then(respone => respone.json())
          .then(data => {
            return this.setState({products : data})
          })

    }

    hanldeClick = () =>{
        this.setState({count : this.state.count + 1})
    }

    render(){

        console.log('render log')
        return <>
          <h1>{this.state.count}</h1>
          <button onClick={this.hanldeClick}>Click Me</button>
          {/* {
            this.state.products && this.state.products.map((product,index)=>{
                return <h3>{product.title} -- {product.price}</h3>
            })
          } */}


          {
            !this.state.products ? <p>Lodoing.....</p> : <>
               {this.state.products.map((product,index)=>{
                return <>
                   <h2 style={{color : product.price > 100 ? 'red' : 'blue'}}>{product.title} -- {product.price}</h2>
                </>
               })}
            </>
          }
        </>
    }
}

export default PrintData