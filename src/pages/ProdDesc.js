import { Fragment, useContext, useEffect, useState } from "react"
import { ItemsByModels } from '../containers/itemsByModels'
import { ListOfTermsBlock } from "../containers/listOfTermsBlock"
// import { AlertContext } from "../context/alert/alertContext"
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
import { TermsContext } from "../context/Terms/termsContext"
import basePath from '../utils/basePath'

export const ProdDesc = ({ match }) => {

  const urlName = match.params.id

  const { fetchData, content, fetchProduct, product, loader } = useContext(SoftFurContext)
  const { fetchTermsModel, termModels } = useContext(TermsContext)
  const { title, price, config, img_url, img_alt, productModelName } = product//свойства из продукта

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
        fetchProduct(urlName)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        console.log('Get response')
      }
      return () => {
        console.log('Unmounting')
        mounted = false
      }
    }, 1000);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      // let mounted = true
      if (mounted) {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }
      return () => {
        // mounted = false
      }
    }, 3000);

  }, [product])


  //вызов ф-ции получения списка моделей
  useEffect(() => {
    // let mounted = true

    setTimeout(() => {
      if (mounted) {
        fetchTermsModel()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }
    }, 5000)

    return () => {
      console.log("fired from ProdDesc")
      // mounted = false
    }
    // return fetchTermsModel()

  }, [product])

  // console.log(productModelName)

  // if (loader) {
  //   return <p className="text-center">...Идёт загрузка</p>
  // } else 
  {
    return (
      <Fragment>
        <h5>{title}</h5>
        <h5>{config}</h5>
        <h5>{price}</h5>
        <img src={`${basePath}${img_url}`} alt={img_alt} />
        <ItemsByModels
          urlName={urlName}//передача uuid товара в блок отображения других товаров из той-же модели
          // currentModelItems={currentModelItems}
          // content={content}
          productModelName={productModelName}
          content={content}
        />
        <ListOfTermsBlock
          termModels={termModels}//передача массива терминов "Модели мягкой мебели" в блок со списком/таблицей моделей
          productModelName={productModelName}
        />
      </Fragment>
    )
  }
}