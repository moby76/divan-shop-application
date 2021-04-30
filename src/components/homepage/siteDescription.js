import React, { Fragment } from 'react'
// import { Navbar } from '../Navbar'
// import { NavLink } from "react-router-dom";


function SiteDescription() {
   return (

      <Fragment>

         <div style={{ background: 'transparent !important' }} className="jumbotron">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Работаем на рынке юга Кемеровской области вот уже как более 10 лет.
            <hr className="my-4" />            
            &nbsp;&nbsp;&nbsp;&nbsp;Основным направлением деятельности нашей организации является - серийное изготовление
            мягкой мебели среднего сегмента стоимости. Реализуем продукцию как через собственные точки, так и через мелкооптовые
            поставки
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;Вы можете посмотреть образцы мебели как  <a href='#shops'className="btn btn-outline-light ml-2 mr-2 ">в наличии</a> так и заказать по индивидуальным размерам на базе уже имеющихся моделей
            </p>
            
            {/* <a className="btn btn-primary btn-lg" href="/" role="button">Узнать больше</a> */}
         {/* <Navbar /> */}
         </div>         
      </Fragment>

   )
}

export default SiteDescription
