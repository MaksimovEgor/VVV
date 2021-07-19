const SET_AUTH_DATA = 'SET_AUTH_DATA';


let initialState = {

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.data

            };
        }
        default:
            return state;
    }
}

export const setAuthDataAC = (userId, login, email ) => ({type: SET_AUTH_DATA, data: {userId, login, email }});


export default authReducer;