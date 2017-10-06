import React, { Component } from "react";
import ItemContainer from "./item/ItemContainer";

class ContestsComponent extends Component {
    genContests() {
        return this.props.contests.map((contest) => {
            return <ItemContainer key={contest._id} contest={contest} id={contest._id} />
        })
    }
    render() {
        return (
            <div>
                <h2>Register for Facial hair contests</h2>
                {this.genContests() }
            </div>
        );
    }
}

export default ContestsComponent;