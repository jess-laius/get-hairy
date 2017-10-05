import React, { Component } from "react";
import ItemComponent from "./item/ItemComponent";

class ContestsComponent extends Component {
    genContests() {
        return this.props.contests.map((contest) => {
            return <ItemComponent key={contest._id} contest={contest} id={contest._id} />
        })
    }
    render() {
        return (
            <div>
                <h3>Facial hair contest</h3>
                {this.genContests() }
            </div>
        );
    }
}

export default ContestsComponent;