import { SET_PAGINATE_BLOCK, SET_PAGINATE_PAGE } from "../types"

export const PaginationReducer = (state, action) => {
    switch (action.type){
        case SET_PAGINATE_PAGE:
            return {
                ...state,
                // loader: true 
                currentPage: action.value
            }
        case SET_PAGINATE_BLOCK:
            return {
                ...state,
                // loader: false, 
                currentBlock: action.value
            }
        default: return state
    }
}