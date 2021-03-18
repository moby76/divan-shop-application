import { GET_PRODUCT, GET_PRODUCTS, SET_LOADING } from "../types";

export const SoftFurReducer = (state, action)  => {
    switch (action.type){
        case GET_PRODUCTS:
            return {...state, content: action.payload, loader: false}
        case GET_PRODUCT:
            return {
                ...state, 
                // product: action.payload, 
                product: {
                    title: action.payload.title,
                    price: action.payload.field_price_base,
                    config: action.payload.field_soft_config.name,
                    img: action.payload.field_photo.uri.url
                }, 
                loader: false}
        case SET_LOADING:
            return {...state, loader: true}
        default: return state
    }
}