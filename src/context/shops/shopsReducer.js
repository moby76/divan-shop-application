import { FETCH_SHOPS, FETCH_SINGLE_SHOP } from "../types"

export const ShopsReducer = (state, action) => {
   switch (action.type) {
      case FETCH_SHOPS:
         return {
            ...state,
            shops: action.payload,
            loader: false
         }
      case FETCH_SINGLE_SHOP:
         return {
            ...state,
            singleShop: action.payload,
            singleShopTitle: action.payload.title,
            loader: false
         }


      default:
         return state
   }
}

