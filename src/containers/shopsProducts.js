//контейнер отображающий все товары данного магазина
// инкапсулирован в <Shop>(Shop.js)

import React from 'react'
import { Card } from '../components/Card'

function ShopsProducts({ shop, content, }) {


   let currentShopContent = content.filter(item => {
      return item.where.id === shop.id
   })

   // console.log(currentShopContent)
   // console.log("Где купить",content[2].where_by.id)   
   console.log("Id магазина", shop.id)
   // console.log("Товары данного магазина", currentShopContent)

   return (
      <div className="container">
         <div className="col-sm-12 text-center"> <h5>Все товары магазина {shop.title}</h5> </div>
         <hr />
         {
            currentShopContent.length > 0 ?

               <div className="row">
                  {
                     // (loader) ?//если loader = true, то:  
                     //     <p className="text-center">...Идёт загрузка</p> : //иначе:            
                     <>
                        {currentShopContent.map((val) => {//итерация отображаемых на странице элементов массива с предачей их значений в карточки
                           return (
                              <div className="col-sm-4 mb-4" key={val.id}>
                                 {/* карточка товара */}
                                 <Card
                                    {...val}
                                 />
                              </div>
                           )
                        })}
                     </>
                  }
               </div>
               :
               null
            // currentShopContent.map((item, i) => {
            //    return (

            //       <div key={i}>{item.title}</div>
            //    )
            // })

         }
         {/* <p>{currentShopContent}</p> */}
      </div>
   )
}

export default ShopsProducts
