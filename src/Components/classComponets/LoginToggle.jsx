import { Component } from "react";


class LoginToggle extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn : false
        }
    }

    hanldeToggle = () => {
        this.setState({isLoggedIn : !this.state.isLoggedIn })
    }

    render(){
        return <>
           <button onClick={this.hanldeToggle}>{this.state.isLoggedIn ? 'logout' : 'login'}</button>
        </>
    }
}

export default LoginToggle