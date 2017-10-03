import React, { Component } from "react";
import LoginComponent from "./LoginComponent";

class Login extends Component {
    render() {
        return (
            <div>
                <LoginComponent
                    handleChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}

export default Login;