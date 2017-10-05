let defaultState = {
    isAuthenticated: false,
    user: {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        admin: "",
        _id: ""
    },
    authError: {
        signup: "",
        login: "",
        verify: ""
    },
    data: []
};

const mainReducer = function (state = defaultState, action) {
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                isAuthenticated: action.isValid,
                user: action.user,
                authError: {
                    ...defaultState.authError
                }
            }
        case "AUTH_ERROR":
            return {
                ...state,
                isAuthenticated: action.isValid,
                authError: {
                    ...state.authError,
                    [action.key]: action.err
                }
            }
        case "LOGOUT":
            return {
                ...defaultState
            }
        case "SET_DATA":
            return {
                ...state,
                data: action.data
            }    
        default:
            return {
                ...state
            }
    }
}

export default mainReducer;