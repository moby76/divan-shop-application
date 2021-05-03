import React, { Fragment } from 'react'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
// import { Navbar } from '../Navbar'
// import { NavLink } from "react-router-dom";


function SiteDescription() {
   return (

      // <Fragment>
      <MDBContainer fluid>
         <MDBRow>
            <MDBCol>
               <MDBJumbotron style={{ padding: 0 }}>
                  {/* <div style={{ background: 'transparent !important' }} className="jumbotron"> */}
                  <MDBCol className="text-white text-center py-3 px-4 my-1" style={{ backgroundImage: `url(https://mdbcdn.b-cdn.net/img/Photos/Others/gradient1.jpg)` }}>
                     <MDBCol className="py-1">
                        <MDBCardTitle className="h1-responsive pt-3 m-5 font-weight-bolder">Работаем на рынке юга Кемеровской области уже более 10 лет.</MDBCardTitle>
                        {/* <p>&nbsp;&nbsp;&nbsp;&nbsp;Работаем на рынке юга Кемеровской области вот уже как более 10 лет. */}
                        <hr className="my-4" />
                        <p className="mx-5 mb-5 font-weight-normal">
                           &nbsp;&nbsp;&nbsp;&nbsp;Основным направлением деятельности нашей организации является - серийное изготовление
                           мягкой мебели среднего сегмента стоимости. Реализуем продукцию как через собственные точки, так и через мелкооптовые
                           поставки
                        </p>
                        <br />
                        <p className="mx-5 mb-5 font-weight-normal">
                           &nbsp;&nbsp;&nbsp;&nbsp;Вы можете посмотреть образцы мебели как  <a href='#shops' className="btn btn-outline-light ml-2 mr-2 ">в наличии</a> так и заказать по индивидуальным размерам на базе уже имеющихся моделей
                        </p>
                        {/* </p> */}

                        {/* <a className="btn btn-primary btn-lg" href="/" role="button">Узнать больше</a> */}
                        {/* <Navbar /> */}
                     </MDBCol>
                  </MDBCol>
                  {/* </div> */}
               </MDBJumbotron>
            </MDBCol>
         </MDBRow>
      </MDBContainer >
      // </Fragment>

   )
}

export default SiteDescription
