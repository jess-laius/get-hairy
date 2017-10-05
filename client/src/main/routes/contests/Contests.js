import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../redux/actions/index";
import ContestsComponent from "./ContestsComponent";

class Contests extends Component {
    componentDidMount() {
        this.props.loadData();
        this.props.users();
    }
    render() {
        return (
            <div>
                <ContestsComponent contests={this.props.contests} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators)(Contests);