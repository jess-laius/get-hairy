import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verifyToken } from "../redux/actions/index";

import Navbar from "./Navbar";
import Home from "./routes/Home";
import Signup from "./routes/signup/Signup";
import Login from "./routes/login/Login";
import About from "./routes/About";
import Contests from "./routes/contests/Contests";
import Photos from "./routes/photo_gallery/Photos";
import ProfileComponent from "./routes/profile/ProfileComponent";
import Footer from "./Footer";
import ProtectedRoute from "./routes/profile/ProtectedRoute";

class App extends Component {
    componentWillMount() {
        this.props.verifyToken()
    }
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="container-fluid">
                <Navbar />
                <div className="hello">
                    <h1>Beards and Mustaches</h1>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/signup" render={(props) => {
                            return isAuthenticated ?
                                <Redirect to="/profile" /> :
                                <Signup {...props} />
                        }} />
                        <Route path="/login" render={(props) => {
                            return isAuthenticated ?
                                <Redirect to="/contests" /> :
                                <Login {...props} />
                        }} />
                        <ProtectedRoute path="/contests" component={Contests} />
                        <ProtectedRoute path="/photo_gallery" component={Photos} />
                        <Route path="/about" component={About} />
                        <ProtectedRoute path="/profile" component={ProfileComponent} />
                    </Switch>
                    <Footer />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}
export default withRouter(connect(mapStateToProps, { verifyToken })(App));