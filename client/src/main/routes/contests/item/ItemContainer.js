import React, { Component } from 'react';
import ItemComponent from "./ItemComponent";

class ItemContainer extends Component {
    render() {
        return (
            <div>
                <ItemComponent contest={this.props.contest} id={this.props.id}/>
            </div>
        );
    }
}

export default ItemContainer;