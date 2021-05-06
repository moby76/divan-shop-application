//Страница со списком всех материалов относящихся к данной конфигурации мебели (Угловые, прямые, кресла и т.д.)

import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React, { useContext, useEffect } from 'react'
import { Card } from '../components/Card'
import { SoftFurContext } from '../context/SoftFur/SoftFurContext'

function Config({ match }) {

   const { fetchData, content, loader } = useContext(SoftFurContext)

   //Константа = значению адресной строки(В данном случае в адр. строку попадает значение псевдонима/alias пути термина таксономии)
   const urlName = match.params.path

   useEffect(() => {
      fetchData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   //создаём массив из значений ДАННОЙ конфигурацией
   const thisConfigContent = content.filter(callback => {
      return callback.soft_config.path.alias === `/${urlName}`//подставляем / в шаблон т.к. из адр. строки прилетает значение без / 
   })

   // console.log(content)

   return (
      // <div>
      //    Все товары по данной конфигурации
      //    {aliases}
      // </div>
      <MDBContainer>

         <MDBRow>
            {loader ?
               <p className="text-center">...Идёт загрузка</p> :
               thisConfigContent.map((val) => (
                  <MDBCol sm="4" className="w-100 d-flex align-items-stretch mb-4" key={val.id}>
                     {/* карточка товара */}
                     <Card
                        {...val}
                     />
                  </MDBCol>
               ))
            }
         </MDBRow>
      </MDBContainer>
   )
}

export default Config
