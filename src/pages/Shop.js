//Страница представления одного магазина

import { MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdbreact'
import React, { useContext, useEffect } from 'react'
import Address from '../components/Address'
import WorkTime from '../components/workTime'
import ShopsProducts from '../containers/shopsProducts'
import { ShopsContext } from '../context/shops/shopsContext'
import { SoftFurContext } from '../context/SoftFur/SoftFurContext'
import Map from '../utils/map/map'
// import Geocode from "react-geocode"

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
                  <MDBContainer fluid>
                     <MDBRow className="mb-3">
                        <MDBCol md="9">
                           {item.title}
                           {/* карта */}
                           <Map
                              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                              loadingElement={<div style={{ height: `100%` }} />}
                              containerElement={<div style={{ height: `400px`, width: `100%` }} />}
                              mapElement={<div style={{ height: `100%` }} />}
                              // latitude={item.location.lat}
                              // longitude={item.location.lng}
                              item={item}
                           />
                        </MDBCol>

                        <MDBCol md="3">

                           {/* адрес */}
                           <MDBRow key={item.id}>
                              {/* <MDBIcon icon="map-marked-alt" /> */}
                              <Address
                                 item={item}
                              />
                           </MDBRow>
                              <hr/>
                           {/* Время работы магазина */}
                           <MDBRow key={item.id} className="mt-3">
                           {/* <MDBIcon far icon="clock" /> */}
                              <WorkTime
                                 wt={item.work_time}
                              />
                           </MDBRow>
                        </MDBCol>
                     </MDBRow>
                     <ShopsProducts
                        shop={item}
                        content={content}

                     />
                  </MDBContainer>

               )
            }) :
            null
         }
      </div>


   )
}

export default Shop
