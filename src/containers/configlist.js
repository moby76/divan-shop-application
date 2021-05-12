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
      <MDBContainer fluid>       
         <div className="col-sm-12 text-center text-secondary"> <h4>Выберите конфигурацию мебели</h4></div>
            <hr />
         {configs.length !== 0 ?
         // <div className="row">
          <MDBRow my-3>
            {configs.map(item => {
               return(
                  // <div >
                  <MDBCol md="4" class="example-square bg-secondary shadow-1-strong">
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
