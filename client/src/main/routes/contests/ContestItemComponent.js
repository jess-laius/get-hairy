import React, { Component } from 'react';

class ItemComponent extends Component {
    render() {
        return (
            <div>
                <h3>Sponsor: {this.props.contest.sponsor}</h3>
                <h5>Location: {this.props.contest.location}</h5>
                <h5>Date and time: {this.props.contest.date}</h5>
            </div>
        );
    }
}

export default ItemComponent;