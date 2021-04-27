import React, { useContext, useEffect } from 'react'
import { ShopsContext } from '../context/shops/shopsContext'

function Shop({ match }) {

   const { fetchSingleShop, singleShop, singleShopTitle } = useContext(ShopsContext)

   const urlName = match.params.title

   useEffect(() => {
      fetchSingleShop(urlName)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   console.log(singleShop)

   return (
      <div>
         {singleShop.length > 0 ?
            singleShop.map((item) => {
               return (<div key={item.id}>{item.title}</div>)
            }) :
            null
         }
      </div>


   )
}

export default Shop
