import { Fragment, useContext, useEffect } from "react"
import { ItemsByModels } from '../containers/itemsByModels'
import { ListOfTermsBlock } from "../containers/listOfTermsBlock"
// import { AlertContext } from "../context/alert/alertContext"
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
import { TermsContext } from "../context/Terms/termsContext"
import basePath from '../utils/basePath'

export const ProdDesc = ({ match }) => {

  
  const { fetchData, fetchProduct, product, loader } = useContext(SoftFurContext)
  const { fetchTermsModel, termModels } = useContext(TermsContext)
  
  
  const { title, price, config, img_url, img_alt, productModelName } = product

  const urlName = match.params.id

  //вызов ф-ции получения конкретного продукта из контекста SoftFurContext
  useEffect(() => {
    fetchProduct(urlName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //вызов ф-ции получения контента из контекста SoftFurContext. Только после получения продукта(product)
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])

  //вызов ф-ции получения списка моделей
  useEffect(() => {
    fetchTermsModel()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])

  
  //отфильтровать массив - исключить модель отображаемого товара
  const excludeCurrentModel = termModels.filter((callback) => {//получим новый массив со значениями: исключить текущего объекта, но оставить все остальные из той-же модели
    return callback.name !== productModelName     
})

  // console.log("Модели : ", termModels)
  // console.log("Без текущей Модели : ", excludeCurrentModel)
  // console.log("Модель продукта :", productModelName)

  if (loader) {
    return <p className="text-center">...Идёт загрузка</p>
  } else {
    return (
      <Fragment>
        <h5>{title}</h5>
        <h5>{config}</h5>
        <h5>{price}</h5>
        <img src={`${basePath}${img_url}`} alt={img_alt} />
        <ItemsByModels
          urlName={urlName}
        />
        <ListOfTermsBlock
          terms={excludeCurrentModel}
        />
      </Fragment>
    )
  }
}