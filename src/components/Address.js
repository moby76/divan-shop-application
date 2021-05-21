import { MDBCol, MDBIcon, MDBRow } from 'mdbreact';
import React, { useState } from 'react'
import Geocode from "react-geocode";

export default function Address({ item }) {
   const { location } = item

   const [city, setCity] = useState('')
   const [street, setStreet] = useState('')
   const [number, setNumber] = useState(null)

   // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
   Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_KEY}`);
   // Geocode.setApiKey("AIzaSyClju_ARCiItrAPlkMapDAZWJUk66NeodI");

   // set response language. Defaults to english.
   Geocode.setLanguage("ru");

   // set response region. Its optional.
   // A Geocoding request with region=es (Spain) will return the Spanish city.
   Geocode.setRegion("ru");


   // Get address from latitude & longitude.
   Geocode.fromLatLng(location.lat, location.lng).then(
      (response) => {
         const address = response.results[0].formatted_address;
         // let city, state, country;
         for (let i = 0; i < response.results[0].address_components.length; i++) {
            for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
               switch (response.results[0].address_components[i].types[j]) {
                  case "route":
                     setStreet(response.results[0].address_components[i].long_name)
                     break;
                  case "street_number":
                     setNumber(response.results[0].address_components[i].long_name)
                     break;
                  case "administrative_area_level_2":
                     setCity(response.results[0].address_components[i].long_name)
                     break;
               }
            }
         }
         // console.log(city, state, country);
         // console.log(address);
      },
      (error) => {
         console.error(error);
      }
   )

   return (
      <>
         <MDBCol md="2">
            <MDBIcon icon="map-marked-alt" size="2x" className="cyan-text pr-3" />
         </MDBCol>
         <MDBCol md="10">
            {/* <MDBRow>          */}
            {city}, {street}, {number}
            {/* </MDBRow> */}
         </MDBCol>
      </>
   )
}
