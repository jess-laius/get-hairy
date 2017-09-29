import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-wrapper row">
                <div className="col-md-12">
                    <ul className="menu">
                        <li className="menu-item"><Link to="/">Home</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/photo_gallery">Photo Gallery</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </div >
            </div >
        );
    }
}

export default Navbar;