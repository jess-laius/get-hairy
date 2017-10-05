import React, { Component } from "react";

class LoginComponent extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <h3>Login into your account</h3>
                    <span>Username: </span>
                    <input onChange={this.props.handleChange} value={this.props.username} name="username" type="text" placeholder="" />
                    <span>Password: </span>
                    <input onChange={this.props.handleChange} value={this.props.password} name="password" type="password" placeholder="#" />
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                    <p>{this.props.errMsg}</p>
                </form>
            </div>
        );
    }
}

export default LoginComponent;