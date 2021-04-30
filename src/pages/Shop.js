//Страница представления одного магазина

import React, { useContext, useEffect } from 'react'
import WorkTime from '../components/workTime'
import ShopsProducts from '../containers/shopsProducts'
import { ShopsContext } from '../context/shops/shopsContext'
import { SoftFurContext } from '../context/SoftFur/SoftFurContext'
import Map from '../utils/map/map'

function Shop({ match }) {

   const { fetchSingleShop, singleShop } = useContext(ShopsContext)
   const { fetchData, content } = useContext(SoftFurContext)

   const urlName = match.params.title

   useEffect(() => {
      fetchSingleShop(urlName)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   useEffect(() => {
      setTimeout(() => {
         fetchData()
      }, 1500);
      // eslint-disable-next-line
   }, [])



   console.log(singleShop)

   return (
      <div>
         {singleShop.length > 0 ?
            singleShop.map((item) => {
               // console.log(item)
               return (
                  <div className="container-fluid">
                     <div className="row mb-3">
                        <div className="col-sm-9">
                           {item.title}
                           <Map
                              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                              loadingElement={<div style={{ height: `100%` }} />}
                              containerElement={<div style={{ height: `400px`, width: `100%` }} />}
                              mapElement={<div style={{ height: `100%` }} />}
                              // latitude={item.location.lat}
                              // longitude={item.location.lng}
                              item={item}
                           />
                        </div>

                        <div className="col-sm-3" key={item.id}>
                           <WorkTime
                              wt={item.work_time}
                           />
                        </div>
                     </div>
                     <ShopsProducts
                        shop={item}
                        content={content}

                     />
                  </div>

               )
            }) :
            null
         }
      </div>


   )
}

export default Shop
