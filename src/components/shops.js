// import React from 'react'
// import axios from 'axios';
import { useEffect, useState } from 'react'
import API from '../utils/api'
// import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import { Fragment } from 'react'
import Map from '../utils/map/map'
import { Link } from 'react-router-dom'

function Shops() {

   const [shops, setShops] = useState([])

   useEffect(() => {
      async function fetchData() {
         //    // setLoader()
         const contentVal = await API.get(
            `node/shops`
         )
         setShops(contentVal.data.data)
      }
      return fetchData()
   }, [])


   console.log(shops)

   return (
      <Fragment >
         
         <h3 id={'shops'} className="col-sm-12 text-center" >Посмотреть товары в наличии</h3>
         
         <div className="row pr-3 pl-3">

            {
               shops.map(item => {
                  return (
                     <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3" key={item.id}>
                        <div className="card mb-3 col-12 p-2 shadow">
                           <div className="row">
                              <section className="col-sm-12">
                                 <Map
                                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `400px`, width: `100%` }} />}
                                    mapElement={<div style={{ height: `100%` }} />}
                                    // latitude={item.location.lat}
                                    // longitude={item.location.lng}
                                    item={item}
                                 />
                              </section>
                              <section className="col-md-12">
                                 <div className="card-body">
                                    <h5>Посетить магазин <Link to={`/shops/${item.title}`}>{item.title}</ Link></h5>
                                 </div>
                              </section>
                           </div>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </Fragment>

   )
}

// const WrappedMap = withScriptjs(withGoogleMap(Shops))

export default Shops
