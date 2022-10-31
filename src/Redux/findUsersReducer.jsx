const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     name: 'Stela',
        //     avatar: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1665922271~exp=1665922871~hmac=d991083635ddce751d0ffca987adebaa59b751da06e7cc584828800a7ccef4e6',
        //     status: 'Dreams ...',
        //     location: {
        //         country: 'Russia',
        //         city: 'Volgograd',
        //     },
        //     followed: true,
        // },
        // {
        //     id: 2,
        //     name: 'Lera',
        //     avatar: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1665922271~exp=1665922871~hmac=d991083635ddce751d0ffca987adebaa59b751da06e7cc584828800a7ccef4e6',
        //     status: 'Dreams ...',
        //     location: {
        //         country: 'Russia',
        //         city: 'Moscow',
        //     },
        //     followed: false,
        // },
        // {
        //     id: 3,
        //     name: 'David',
        //     avatar: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1665922271~exp=1665922871~hmac=d991083635ddce751d0ffca987adebaa59b751da06e7cc584828800a7ccef4e6',
        //     status: 'Dreams ...',
        //     location: {
        //         country: 'Russia',
        //         city: 'Omsk',
        //     },
        //     followed: true,
        // },
    ],
}

const findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false,}
                    }
                    return u;
                }),

            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true,}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId,
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}

export default findUsersReducer;