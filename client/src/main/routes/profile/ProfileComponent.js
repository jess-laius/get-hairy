import React, { Component } from "react";
import UserContests from "./UserContests";

class ProfileComponent extends Component {
    render() {
        return (
            <div>
                <h5> You are registered for the following competition/s: </h5>
                <UserContests />
            </div>
        );
    }
}

export default ProfileComponent;