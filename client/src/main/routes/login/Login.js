import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../redux/actions/index";

import LoginComponent from "./LoginComponent";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
    }
    handleChange(event) {
        event.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [event.target.name]: event.target.value
                }
            }
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.login(this.state.inputs);
        this.clearInputs();
    }
    clearInputs() {
        this.setState({
            inputs: {
                username: "",
                password: ""
            }
        })
    }
    render() {
        return (
            this.props.isAuthenticated ? <Redirect to="/profile" /> :
                <LoginComponent
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    errMsg={this.props.authError.login}
                    {...this.state.inputs} />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps, { login })(Login);