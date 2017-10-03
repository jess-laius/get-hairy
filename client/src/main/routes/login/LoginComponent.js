import React, { Component } from "react";

class LoginComponent extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <h3>Login into your account</h3>
                    <span>Username: </span>
                    <input
                        onChange={this.props.handleChange}
                        value={this.props.email}
                        name="email"
                        type="text"
                        placeholder="use email" />
                    <span>Password: </span>
                    <input
                        onChange={this.props.handleChange}
                        value={this.props.password}
                        name="password"
                        type="password"
                        placeholder="#" />
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