import React, { Component } from "react";
import { connect } from "react-redux";
import { loadData } from "../../../redux/actions/index";
import ContestsComponent from "./ContestsComponent";

class Contests extends Component {
    componentDidMount() {
        this.props.loadData();
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <ContestsComponent contests={this.props.data} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, { loadData })(Contests);
