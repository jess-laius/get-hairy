import React, { Component } from 'react';
import ItemComponent from "./ItemComponent";

class ItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
            input: {
                firstName: props.contests.firstName,
                lastName: props.contests.lastName,
                
            }
        }
    }
    render() {
        return (
            <div>
                <ItemComponent />
            </div>
        );
    }
}

export default ItemContainer;