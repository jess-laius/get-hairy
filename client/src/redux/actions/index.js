const axios = require("axios");

// User authorization
axios.interceptors.request.use((config) => {
    let token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${"token"}`;
    return config;
}, (err) => {
    return Promise.reject(err)
})

const authUrl = "http://localhost:8080/auth";
const profileUrl = "http://localhost:8080/profile/";

function authenticate(isValid, user) {
    return {
        type: "AUTHENTICATE",
        isValid,
        user
    }
}

function authError(err) {
    return {
        type: "AUTH_ERROR",
        err
    }
}

export function verifyToken() {
    return (dispatch) => {
        axios.get(profileUrl + "verify")
            .then((response) => {
                let user = response.data.user;
                let isValid = response.data.success;
                dispatch(authenticate(isValid, user));
            })
            .catch((err) => {
                console.log(err);
                dispatch(authError({ verify: "Invalid token" }));
            })
    }
}

export function signup(credentials) {
    return (dispatch) => {
        axios.post(authUrl + "signup", credentials)
            .then((response) => {
                let user = response.data.user;
                let isValid = response.data.success;
                let token = response.data.token;
                localStorage.setItem("token", token);
                dispatch(authenticate(isValid, user));
            })
            .catch((err) => {
                console.log(err);
                dispatch(authError({ verify: "Invalid username or password!" }));
            })
    }
}

export function login(password) {
    return (dispatch) => {
        axios.post(authUrl + "login", password)
            .then((response) => {
                let user = response.data.user;
                let isValid = response.data.success;
                let token = response.data.token;
                localStorage.setItem("token", token);
                dispatch(authenticate(isValid, user));
            })
            .catch((err) => {
                console.log(err);
                dispatch(authError({ verify: "Invalid username or password!" }));
            })
    }
}

export function logout() {
    return (dispatch) => {
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
    }
}

// Load data functions