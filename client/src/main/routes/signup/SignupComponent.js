import React, { Component } from "react";

class SignupComponent extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <h3>Sign Up</h3>
                    <span>First Name: </span>
                        <input onChange={this.props.handleChange} value={this.props.firstName} name="firstName" type="text" placeholder="" /> <br/>
                    <span> Last Name: </span>
                        <input onChange={this.props.handleChange} value={this.props.lastName} name="lastName" type="text" placeholder="" /> <br />
                    <span>Username: </span>
                        <input onChange={this.props.handleChange} value={this.props.username} name="username" type="text" placeholder="required" /> <br />
                    <span>Password: </span>
                        <input onChange={this.props.handleChange} value={this.props.password} name="password" type="password" placeholder="required" /> <br />
                    <span>Email: </span>
                        <input onChange={this.props.handleChange} value={this.props.email} name="email" type="email" placeholder="required" /> <br /><br />
                    <button type="submit">Create your account</button>
                    <p>{this.props.authMsg}</p>
                </form>
            </div>
        );
    }
}

export default SignupComponent;