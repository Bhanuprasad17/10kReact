import { Component } from "react";

class FetchProducts3 extends Component{
    constructor(){
        super()
        this.state = {
            count : 0,
            products : null
        }
    }

    componentDidUpdate(prevProp, prevState){
        if (prevState.count != this.state.count) {
            fetch(`https://fakestoreapi.com/products/${this.state.count}`)
                .then(res => res.json())
                .then(data => this.setState({ products: data }))
        }
    }

    render(){
        console.log(this.state.products)
        return <>
          <h1>{this.state.count}</h1>
          <button onClick={()=> this.setState({count : this.state.count + 1})}>Click Me</button>
          {
            !this.state.products ? <p>Loding....</p> : <>
              <h2>{this.state.products.title} -- {this.state.products.price}</h2>
             </>
          }
        </>
    }
}

export default FetchProducts3