// import React from 'react'
// import axios from 'axios';
// import { useEffect, useState } from 'react'
// import API from '../utils/api'
import { useState } from 'react'
import { 
   GoogleMap, 
   withScriptjs, 
   withGoogleMap ,
   Marker,
   InfoWindow
} from 'react-google-maps'
// import { Fragment } from 'react'

function Map({ item }) {

   const[selectedShop, setSelectedShop] = useState(null)
   // console.log(item)

   const { location } = item

   return (
      <GoogleMap
         defaultZoom={12}
         defaultCenter={{ lat: location.lat, lng: location.lng }}
         options={{ gestureHandling: "combine" }}
      >
         <Marker position={{ lat: location.lat, lng: location.lng }} onClick={() => setSelectedShop(item)}/>
         {selectedShop && (
            <InfoWindow
            position={{ lat: selectedShop.location.lat, lng: selectedShop.location.lng }}
            onCloseClick={() => {
               setSelectedShop(null);
            }}
            >
               <>
               <div>{item.title}</div>
               <p>{item.phone}</p>
               </>
            </InfoWindow>
         )}
      </ GoogleMap >
   )
}

// const WrappedMap = withScriptjs(withGoogleMap(Shops))

export default withScriptjs(withGoogleMap(Map))
