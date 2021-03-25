import { GET_ITEMS_BY_MODEL, GET_NEWITEMS, GET_PRODUCT, GET_PRODUCTS, SET_LOADING, SET_PAGINATE } from "../types";

export const SoftFurReducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                content: action.payload,
                loader: false
            }//content: action.payload - получаем массив из секции data в jsonapi
        case GET_PRODUCT:
            return {
                ...state,
                // product: action.payload, 
                product: {
                    title: action.payload.title,
                    price: action.payload.price_base,
                    config: action.payload.soft_config.name,
                    img_url: action.payload.photo.uri.url,
                    img_alt: action.payload.photo.filename,
                    model: action.payload.model.name
                },
                loader: false
            }
        case GET_NEWITEMS:
            return {
                ...state,
                newitems: action.payload,
                loader: false
            }
        case GET_ITEMS_BY_MODEL:
            return{
                ...state,
                itemsByModels: action.payload,
                loader: false
            }    
        case SET_LOADING:
            return { ...state, loader: true }
        case SET_PAGINATE:
            return {
                ...state,
                // loader: true 
                currentPage: action.value
            }
        default: return state
    }
}