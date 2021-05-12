//Контейнер с конфигурациями мягкой мебели в виде ссылок на стр. выбранной конфигурации
//Подгружается на главную страницу

import React, { useContext, useEffect } from 'react'
import Configitem from '../components/configitem'
import { TermsContext } from '../context/Terms/termsContext'
import { XMasonry, XBlock }from 'react-xmasonry'
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

function Configlist() {

   const { fetchConfigs, configs } = useContext(TermsContext)

   useEffect(() => { 
      fetchConfigs()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      // <div className="container-fluid bg-light pb-1 pt-3 mb-3"> 
      <MDBContainer className="bg-light my-2">       
         {/* <div className="col-sm-12 text-center text-secondary"> <h4>Выберите конфигурацию мебели</h4></div> */}
            {/* <hr /> */}
         {configs.length !== 0 ?
         // <div className="row">
          <MDBRow>
            {configs.map(item => {
               return(
                  // <div >
                  <MDBCol md="4" className="example-square shadow-1-strong px-0">
                     <Configitem key={item.id}
                        {...item}
                     />
                  </MDBCol>
                  // </div>
               )
            })}
         </MDBRow>
            // </div>
            :
            null
         }
         </MDBContainer>
      // </div>
   )
}

export default Configlist
