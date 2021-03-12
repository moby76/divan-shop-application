import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from "../types"

// const handlers = {
//     [SEARCH_USERS]: (state, action) => ({...state, users: action.payload, loading: false}),
//     [GET_REPOS]: (state, action) => ({...state, repos: action.payload, loading: false}),
//     [GET_USER]: (state, action) => ({...state, user: action.payload, loading: false}),
//     [SET_LOADING]: (state) => ({...state, loading: true}),
//     [CLEAR_USERS]: (state) => ({...state, users: [] }),
//     DEFAULT: state => state
// }

export const githubReducer = (state, action) => {
    // //создать константу handler на основе объекта handlers[по ключу action.type: CLEAR_USERS, GET_REPOS и т.д.], при отсутствии будет передан handlers.DEFAULT
    // const handler = handlers[action.type] || handlers.DEFAULT

    // return handler(state, action)

    switch (action.type) {
        case SEARCH_USERS:
            return { ...state, users: action.payload, loading: false}
        case GET_REPOS:
            return {...state, repos: action.payload, loading: false}
        case GET_USER:
            return {...state, user: action.payload, loading: false}
        case SET_LOADING:
            return {...state, loading: true}
        case CLEAR_USERS:
            return {...state, users: [] }
        default: return state
    }
}