import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import basePath from '../utils/basePath'
import { MDBBox } from 'mdbreact';

function Configitem({ id, name, config_image }) {
   return (
      // <div className="mason">
      <Fragment >
         <MDBBox display="flex" alignContent="center">
            {/* {name} */}
            <Link to={'/'}>
               <img src={`${basePath}${config_image.uri.url}`} alt={config_image.meta.alt} className="img-fluid"/>
            </Link>
         </MDBBox>
      </Fragment>

      // </div>
   )
}

export default Configitem
