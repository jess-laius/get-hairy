import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/index";

class Navbar extends Component {
    render() {
        console.log(this.props.isAuthenticated)
        return (
            <div className="navbar-wrapper row">
                <div className="col-md-12">
                    <ul className="menu">
                        <Link to="/"><li className="menu-item">Home</li></Link>
                        {this.props.isAuthenticated ? null : <Link to="/signup"><li>Signup</li></Link>}
                        {this.props.isAuthenticated ? null : <Link to="/login"><li>Login</li></Link>}
                        {!this.props.isAuthenticated ? null : <button onClick={this.props.logout}><li>Logout</li></button>}
                        {!this.props.isAuthenticated ? null : <Link to="/contests"><li>Enter Competition</li></Link>}
                        {!this.props.isAuthenticated ? null : <Link to="/photo_gallery"><li>Photo Gallery</li></Link>}
                        <Link to="/about"><li>About</li></Link>
                        {!this.props.isAuthenticated ? null : <Link to="/profile"><li>Profile</li></Link>}
                    </ul>
                    {/* Two ways of displaying the menu. I went with the first method because I preffered the more compact rendering
                        <div className="menu col-md-12">        
                        <Link to="/">Home</Link>
                        {this.props.isAuthenticated ? null : <Link to="/signup">Signup</Link>}
                        {this.props.isAuthenticated ? null : <Link to="/login">Login</Link>}
                        {!this.props.isAuthenticated ? null : <button onClick={this.props.logout}>Logout</button>}
                        {!this.props.isAuthenticated ? null : <Link to="/contests">Enter Competition</Link>}
                        {!this.props.isAuthenticated ? null : <Link to="/photo_gallery">Photo Gallery</Link>}
                        <Link to="/about">About</Link>
                        {!this.props.isAuthenticated ? null : <Link to="/profile">Profile</Link>}
                        </div> */}
                </div >
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps, { logout })(Navbar);