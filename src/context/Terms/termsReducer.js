import { GET_MODELS, GET_SINGLE_MODEL, SET_LOADING } from "../types";

export const TermsReducer = (state, action) => {

    switch (action.type) {
        case GET_MODELS:
            return {
                ...state,
                termModels: action.payload,
                loader: false
            }
        case GET_SINGLE_MODEL:
            return {
                ...state,
                termSingleModel: action.payload,
                loader: false
            }
        case SET_LOADING:
            return { ...state, loader: true }
        default: return state
    }
}