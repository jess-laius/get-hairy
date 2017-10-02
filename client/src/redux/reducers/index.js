let defaultState = {
    isAuthenticated: false,
    user: {
        firstName: "",
        lastName: "",
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
        default:
            return {
                ...state
            }
    }
}

export default mainReducer;