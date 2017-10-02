import React, { Component } from "react";
import { connect } from "react-redux";
import {signup} from "../../../redux/actions/index";
import SignupComponent from "./SignupComponent";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                firstName: "",
                lastName: "",
                email: ""
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
    clearInputs() {
        this.setState({
            inputs: "",
            firstName: "",
            lastName: "",
            email: ""
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.signup(this.state.inputs);
        this.clearInputs();
    }
    render() {
        return (
            <div>
                <SignupComponent
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    authMsg={this.props.authError.signup}
                    {...this.state.inputs} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps, {signup})(Signup);