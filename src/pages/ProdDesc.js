import { Fragment, useContext, useEffect } from "react"
import ItemsByModels from '../containers/itemsByModels'
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
import basePath from '../utils/basePath'

export const ProdDesc = ({ match }) => {

  // const desc = useContext(SoftFurContext)
  const { fetchData, content, fetchProduct, product, loader } = useContext(SoftFurContext)

  const urlName = match.params.id

  useEffect(() => {
    fetchProduct(urlName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])

  // console.log("Модел : ", current)

  if (loader) {
    return <p className="text-center">...Идёт загрузка</p>
  } else {

    const { title, price, config, img_url, img_alt } = product

    // const current = content.filter(callback => {
    //   return callback.id !== urlName  && callback.model.name === model    
    // })

    // console.log("current =", current)

    return (
      <Fragment>
        <h5>{title}</h5>
        <h5>{config}</h5>
        <h5>{price}</h5>
        <img src={`${basePath}${img_url}`} alt={img_alt} />
        <ItemsByModels
          urlName={urlName}
        />
      </Fragment>
    )
  }
}