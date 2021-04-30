//Контейнер показывающий модели со статусом - новинки.
//В количестве 3 штук

import React, { useContext, useEffect } from 'react'
import NewModelItem from '../components/NewModelItem'
import { TermsContext } from '../context/Terms/termsContext'

function NewModels() {

   const { fetchNeweModels, newModels } = useContext(TermsContext)

   useEffect(() => {
      fetchNeweModels()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   console.log("Новые модели", newModels)

   return (
      <div className="container bg-light pb-1 pt-3 mb-3">
         <div className="col-sm-12 text-center text-secondary"> <h4>Новые модели</h4> </div>
         <hr />
         {newModels.length !== 0 ?
            <div className="row">
               {newModels.map((item) => {
                  return (
                     <div className="col-sm-4 mb-4" key={item.id}>
                     <NewModelItem
                        {...item}
                     />
                     </div>
                  )

               })}
            </div> :
            null}

      </div>
   )
}

export default NewModels
