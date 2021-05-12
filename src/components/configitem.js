import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import basePath from '../utils/basePath'
import { MDBBox, MDBMask, MDBView } from 'mdbreact';

function Configitem({ id, name, config_image, path }) {
   // console.log("Путь", path.alias)
   return (
      // <div className="mason">
      <Fragment >
         {/* <MDBBox display="flex" alignContent="center"> */}

         {/* {name} */}
         <Link to={`/configurations${path.alias}`} target="_blank">
            <MDBView hover zoom>
               <img src={`${basePath}${config_image.uri.url}`} alt={config_image.meta.alt} className="img-fluid" />
               <MDBMask overlay="black-strong" className="flex-center">
                <p className="white-text text-uppercase font-weight-normal">{name}</p>
              </MDBMask>
            </MDBView>
         </Link>
         {/* </MDBBox> */}
      </Fragment>

      // </div>
   )
}

export default Configitem
