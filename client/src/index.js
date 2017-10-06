import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
// import { Button } from 'react-bootstrap';

import mainReducer from "./redux/reducers/index";
import App from "./main/App";
import "./index.css";
let store = createStore(mainReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
})

ReactDOM.render(<Provider store={store}>
                    <Router>
                        <App />
                    </Router>
                </Provider>, document.getElementById("root"));