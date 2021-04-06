import { GET_NEWITEMS, GET_PRODUCT, GET_PRODUCTS, SET_LOADING } from "../types";

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
                product: action.payload,
                    title: action.payload.title,
                    basePrice: action.payload.price_base,
                    config: action.payload.soft_config,
                    photo: action.payload.photo,
                    img_alt: action.payload.photo.filename,
                    productModelName: action.payload.model.name,
                loader: false
            }
        case GET_NEWITEMS:
            return {
                ...state,
                newitems: action.payload,
                loader: false
            }
        // case GET_ITEMS_BY_MODEL:
        //     return {
        //         ...state,
        //         ItemsByModelsOfProduct: action.payload,
        //         loader: false
        //     }
        // case SET_LOADING:
        //     return { ...state, loader: true }
        // case SET_PAGINATE:
        //     return {
        //         ...state,
        //         // loader: true 
        //         currentPage: action.value
        //     }
        // case SET_PAGINATE_BLOCK:
        //     return {
        //         ...state,
        //         loader: false, 
        //         currentBlock: action.value
        //     }
        default: return state
    }
}
