import { GET_NEWITEMS, GET_PRODUCT, GET_PRODUCTS, SET_LOADING } from "../types";

export const SoftFurReducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, content: action.payload, loader: false }//content: action.payload - получаем массив из секции data в jsonapi
        case GET_PRODUCT:
            return {
                ...state,
                // product: action.payload, 
                product: {
                    title: action.payload.title,
                    price: action.payload.price_base,
                    config: action.payload.soft_config.name,
                    img_url: action.payload.photo.uri.url,
                    img_alt: action.payload.photo.filename
                },
                loader: false
            }
        case GET_NEWITEMS:
            return {
                ...state,                
                newitems: action.payload,
                // {
                //     title: action.payload.title,
                //     price: action.payload.price_base,
                //     config: action.payload.soft_config.name,
                //     img_url: action.payload.photo.uri.url,
                //     img_alt: action.payload.photo.filename,
                //     available: action.available
                // },
                loader: false
            }
        case SET_LOADING:
            return { ...state, loader: true }
        default: return state
    }
}