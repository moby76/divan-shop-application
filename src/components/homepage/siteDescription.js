import React, { useState } from 'react'
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBNavLink, MDBBtn, MDBIcon } from "mdbreact";


function SiteDescription() {

   const [loader, setLoader] = useState(false)

   return (
      <MDBContainer className="mb-3" style={{ background: 'rgb(0 0 0 / 63%)', marginTop: '4rem' }}>
         <MDBRow isOpen={()=>setLoader(!loader)}>
            {loader ?
            <p className="text-center">...Идёт загрузка</p> :
            < >
               {/* <MDBJumbotron className="bg-transparent" style={{ padding: 0 }}> */}
                  {/* <div style={{ background: 'transparent !important' }} className="jumbotron"> */}
                  <MDBCol className="text-white text-center py-3 px-4 my-1" style={{  }}>
                     <MDBCol className="py-1">
                        <MDBCardTitle className="h1-responsive pt-3 m-5 font-weight-bolder">Работаем на рынке юга Кемеровской области уже более 10 лет.</MDBCardTitle>
                        {/* <p>&nbsp;&nbsp;&nbsp;&nbsp;Работаем на рынке юга Кемеровской области вот уже как более 10 лет. */}
                        <hr className="my-4" />
                        <p className="mx-5 mb-5 font-weight-normal" >
                           &nbsp;&nbsp;&nbsp;&nbsp;Основным направлением деятельности нашей организации является - серийное изготовление
                           мягкой мебели среднего сегмента стоимости. Реализуем продукцию как через собственные точки, так и через мелкооптовые
                           поставки
                        </p>
                        <br />
                        <p className="mx-5 mb-5 font-weight-normal">
                           &nbsp;&nbsp;&nbsp;&nbsp;Вы можете посмотреть образцы мебели как  <MDBBtn href='#shops' outline color="white" className="mx-2" >в наличии<MDBIcon icon ="chevron-down px-2"></MDBIcon></MDBBtn> так и заказать по индивидуальным размерам
                        </p>
                        {/* </p> */}

                        {/* <a className="btn btn-primary btn-lg" href="/" role="button">Узнать больше</a> */}
                        {/* <Navbar /> */}
                     </MDBCol>
                  </MDBCol>
                  {/* </div> */}
               {/* </MDBJumbotron> */}
            </>
            }
         </MDBRow>
      </MDBContainer >
   )
}

export default SiteDescription
