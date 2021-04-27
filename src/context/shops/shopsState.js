import React, { useReducer } from 'react'
import API from '../../utils/api'
import { ShopsContext } from '../shops/shopsContext'
import { FETCH_SHOPS, FETCH_SINGLE_SHOP } from '../types'
import { ShopsReducer } from './shopsReducer'

function ShopsState({ children }) {

   const initialState = {
      shops: [],//массив данных по магазинам
      singleShop: {},//Один магазин
      singleShopTitle: '',
      loader: false
   }

   const [state, dispatch] = useReducer(ShopsReducer, initialState)

   const fetchShops = async () => {
      //    // setLoader()
      const contentVal = await API.get(
         `node/shops?include=division`
      )
      dispatch({
         type: FETCH_SHOPS,
         payload: contentVal.data.data
         })
   }

   const fetchSingleShop = async (urlName) => {
      //    // setLoader()
      const response = await API.get(
         `node/shops?filter[title]=${urlName}`
      )
      dispatch({
         type: FETCH_SINGLE_SHOP,
         payload: response.data.data
         })
   }

   const {shops, loader, singleShop, singleShopTitle} = state

   return <ShopsContext.Provider value={{
      fetchShops, fetchSingleShop,
      shops, loader, singleShop, singleShopTitle
   }}>
      { children }
   </ShopsContext.Provider>
}

export default ShopsState
