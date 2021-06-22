const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
        users: [
            {
                id: 1,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUIseBsvJgFgOBzFthISFzE6gkHosm-DszQ&usqp=CAU',
                followed: true,
                fullName: 'Egor',
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: 2,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUIseBsvJgFgOBzFthISFzE6gkHosm-DszQ&usqp=CAU',
                followed: true,
                fullName: 'Masha',
                location: {country: 'Russia', city: 'Moscow'}
            }
        ]
    };

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;