const axios = require("axios");

// User authorization
axios.interceptors.request.use((config) => {
    let token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${"token"}`;
    return config;
}, (err) => {
    return Promise.reject(err)
})

const authUrl = "http://localhost:8080/auth/";
const profileUrl = "http://localhost:8080/profile/";

function authenticate(isValid, user) {
    return {
        type: "AUTHENTICATE",
        isValid,
        user
    }
}

function authError(key, err) {
    return {
        type: "AUTH_ERROR",
        key,
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
                console.error(err);
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
                dispatch(authError("signup", "Username or email exists, try again!"));
            })
    }
}

export function login(credentials) {
    return (dispatch) => {
        axios.post(authUrl + "login", credentials)
            .then((response) => {
                let user = response.data.user;
                let isValid = response.data.success;
                let token = response.data.token;
                localStorage.setItem("token", token);
                dispatch(authenticate(isValid, user));
            })
            .catch((err) => {
                dispatch(authError("login", "Username or password is invalid!! Please try again."));
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
const dataUrl = "http://localhosts:8080";

const setData = function (data) {
    return {
        type: "SET_DATA",
        data
    }
}

export function loadData() {
    return (dispatch) => {
        axios.get(dataUrl)
            .then((response) => {
                dispatch(setData(response.data))
            })
            .catch((err) => {
                console.error(err)
            })
    }
}

export function addData(data) {
    return (dispatch) => {
        axios.post(dataUrl, data)
            .then((response) => {
                dispatch(loadData())
            })
            .catch((err) => {
                console.error(err);
            })
    }
}