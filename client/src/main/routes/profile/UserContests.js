import React, { Component } from 'react';
import { connect } from "react-redux";

class UserContests extends Component {
    genContests() {
        return this.props.user.contests.map((contest, index) => {
            return (
            <div key={contest._id + index}>
                    <h3 >Sponsor  {contest.sponsor} in {contest.location} on {new Date(contest.date).toDateString()}</h3>
            </div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.genContests()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {})(UserContests);