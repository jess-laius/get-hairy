import React, { Component } from "react";

class SignupComponent extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <h3>Sign Up</h3>
                    <span>First Name: </span>
                    <input
                        onChange={this.props.handleChange}
                        value={this.props.firstName}
                        name="firstName"
                        type="text"
                        placeholder="" /> <br/>
                        <span> Last Name: </span>
                    <input
                        onChange={this.props.lastName}
                        value={this.props.lastName}
                        name="lastName"
                        type="text"
                        placeholder="" /> <br />
                    <span>Email: </span>
                    <input
                        onChange={this.props.handleChange}
                        value={this.props.email}
                        name="email"
                        type="email"
                        placeholder="this is your username" /> <br />
                    <span>Password: </span>
                    <input
                        onChange={this.props.handleChange}
                        value={this.props.password}
                        name="password"
                        type="password"
                        placeholder="#" /> <br /><br />
                    <button type="submit">Create your account</button>
                    <p>{this.props.authMsg}</p>
                </form>
            </div>
        );
    }
}

export default SignupComponent;