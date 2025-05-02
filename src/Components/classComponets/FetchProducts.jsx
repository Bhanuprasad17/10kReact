import { Component } from "react";


class FetchProducts extends Component{
    constructor(){
        super()
        this.state = {
            count : 0,
            products : null
        }
        // console.log('constructor')
    }

    componentDidMount(){
        // console.log('componentDidMount')
    }

    componentDidUpdate(prevProp, prevState){
        if (prevState.count != this.state.count){
            fetch(`https://fakestoreapi.com/products/${this.state.count}`)
            .then(respone => respone.json())
            .then(data => this.setState({products : data}))
            // console.log('componentDidUpdate')
        }
    }

    handleInc = () =>{
        this.setState({count : this.state.count + 1})
    }
    
    render(){
        // console.log('render')
        // console.log(this.state.products)
        return <>  
           <h1>{this.state.count}</h1>
          <button onClick={this.handleInc}>click me</button>
          {
            !this.state.products ? <>
              <h1>Loding....</h1>
            </> : <>
               <h1>{this.state.products.title}</h1>
            </>
          }
        </>
    }
}

export default FetchProducts