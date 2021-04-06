import { Fragment, useContext, useEffect, useState } from "react"
import { ItemsByModelsOfProduct } from '../containers/itemsByModelsOfProduct'
import { ListOfTermsBlock } from "../containers/listOfTermsBlock"
// import { AlertContext } from "../context/alert/alertContext"
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
import { TermsContext } from "../context/Terms/termsContext"
import basePath from '../utils/basePath'

export const ProdDesc = ({ match }) => {

  const urlName = match.params.id

  const { fetchData, fetchProduct, product, loader, productModelName, productModel, photo, config, basePrice } = useContext(SoftFurContext)
  const { fetchTermsModel, termModels } = useContext(TermsContext)
  // const { title, price, config, img_url, img_alt, productModelName } = product//свойства из продукта

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setMounted(false)
    }, 500);
  }, [])

  //вызов ф-ции получения конкретного продукта по urlName(uuid) из контекста SoftFurContext
  useEffect(() => {
    // let mounted = true    
    setTimeout(() => {
      if (mounted) {
        fetchProduct(urlName)//

        console.log('Get response')
      }
      return () => {
        console.log('Unmounting')
        setMounted(false)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 1000);
  }, [])


  //вызов ф-ции получения всех товаров мягкой мебели из контекста SoftFurContext
  useEffect(() => {
    setTimeout(() => {
      // let mounted = true
      if (mounted) {
        fetchData()//
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }
      return () => {
        // mounted = false
      }
    }, 3000);

  }, [])


  //вызов ф-ции получения списка моделей
  useEffect(() => {
    // let mounted = true
    setTimeout(() => {
      if (mounted) {
        fetchTermsModel()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }
    }, 3000)

    return () => {
      console.log("fired from ProdDesc")
      // mounted = false
    }
    // return fetchTermsModel()

  }, [])

  let thisPhoto = Array.from(photo).map((item) => {
    return (
        <div className="col-sm-4 mb-3" key={item.id}>
            <img src={`${basePath}${item.uri.url}`} className="img-fluid" />
            {/* <sub>{item.uri.url}</sub> */}
        </div>
    )
})
  
  console.log("Product :", product)
  console.log("Product name :", product.title)
  // console.log("Model of producr :", productModel)
  console.log("Model Name :", productModelName)
  console.log("Базовая цена :", product.price_base)
  console.log("Фото :", photo)
 

  if (loader) {
    return <p className="text-center">...Идёт загрузка</p>
  } else {
    return (
      <Fragment>
        <div className="container mb-3">
          <div className="row">
            {thisPhoto}
          </div>
          {/* <h5 col-sm-12 text-center>{title}</h5>
          <h5>{config}</h5>
          <h5>{price}</h5>
          <img src={`${basePath}${img_url}`} alt={img_alt} /> */}
        </div>
        <ItemsByModelsOfProduct // компонент в котором Подгружаем список товаров по модели текущего товара
          urlName={urlName}//передача uuid товара в блок отображения других товаров из той-же модели
          // currentModelItems={currentModelItems}
          // content={content}
          productModelName={productModelName}
        // content={content}
        />
        <ListOfTermsBlock // компонент - список моделей
          termModels={termModels}//передача массива терминов "Модели мягкой мебели" в блок со списком/таблицей моделей
          productModelName={productModelName}
        />
      </Fragment>
    )
  }
}