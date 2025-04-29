import { Component } from "react";


class LoginToggle extends Component{
    constructor(){
        super()
        this.state = {
            name : 'login'
        }
    }

    hanldeToggle = () => {
        this.setState({name : this.state.name == 'login' ? 'logout' : 'login'})
    }

    render(){
        return <>
           <button onClick={this.hanldeToggle}>{this.state.name}</button>
        </>
    }
}

export default LoginToggle