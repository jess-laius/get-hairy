import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { verifyToken } from "../redux/actions/index";

import Navbar from "./Navbar";
import Home from "./routes/Home";
import Signup from "./routes/signup/Signup";
import Login from "./routes/login/Login";
import About from "./routes/About";
import ContestsContainer from "./routes/contests/ContestsContainer";
import Photos from "./routes/photo_gallery/Photos";
import ProfileComponent from "./routes/profile/ProfileComponent";
import Footer from "./Footer";
import ProtectedRoute from "./routes/profile/ProtectedRoute";

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <div className="hello">
                    <h1>Beards and Mustaches</h1>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <ProtectedRoute path="/contests" component={ContestsContainer} />
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

export default withRouter(connect(null, { verifyToken })(App));