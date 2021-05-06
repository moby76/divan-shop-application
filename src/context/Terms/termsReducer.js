// import basePath from "../../utils/basePath";
import { GET_MODELS, GET_SINGLE_MODEL, SET_LOADING, FETCH_ERROR, GET_NEW_MODELS, GET_CONFIGS } from "../types";

export const TermsReducer = (state, action) => {

    switch (action.type) {
        case GET_MODELS:
            return {
                ...state,
                termModels: action.payload,
                // schemeOfModel: action.payload.scheme,
                loader: false,
                error: ''
            }
        case GET_SINGLE_MODEL:
            return {
                ...state,
                termSingleModel: action.payload,
                description: action.payload.model_desc.value,
                name: action.payload.name,
                scheme: action.payload.scheme,
                loader: false,
                error: ''
            }
        case GET_NEW_MODELS:
            return {
                ...state,
                newModels: action.payload
            }
        case GET_CONFIGS:
            return {
                ...state,
                configs: action.payload
            }
        case FETCH_ERROR:
            return {
                loader: false,
                termSingleModel: {},
                error: 'Что-то пошло не так...'
            }
        case SET_LOADING:
            return { ...state, loader: true }
        default: return state
    }
}