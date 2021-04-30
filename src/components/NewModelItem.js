//Карточка модели со статусом - новинка
//инкапсулирован в <NewModels>

import React from 'react'
import { Link } from 'react-router-dom'
import basePath from '../utils/basePath'

function NewModelItem({ name, scheme, model_desc, id }) {

   const thisModelDesc = model_desc.summary.replace(/(<([^>]+)>)/ig, "").split('\n').map((item, i) => {
      return <p className="mb-1" key={i}>{item}</p>
   })

   // console.log("Название модели", name)
   return (
      <>
         <div className="container">
            <div className="text-body">
               {name}
            </div>
            {scheme.length !== 0 ?
               <img src={`${basePath}${scheme[0].uri.url}`} alt={name} className="img-fluid"/>
               :
               <p>No Image</p>
            }
            {thisModelDesc}    
            <Link to={`/models/${id}`} target="_blank" className="btn btn-primary mt-auto" >Подробнее</Link>        
         </div>


      </>
   )
}

export default NewModelItem
