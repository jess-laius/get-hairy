import React, { Component } from 'react';
import { connect } from "react-redux";
import { joinContest } from "../../../../redux/actions/index";
import ItemComponent from "./ItemComponent";

class ItemContainer extends Component {
    handleClick(event) {
        this.props.joinContest(this.props.id)
    }
    render() {
        return (
            <div>
                <ItemComponent contest={this.props.contest} id={this.props.id} handleClick={this.handleClick.bind(this)} />
            </div>
        );
    }
}

export default connect(null, { joinContest })(ItemContainer);