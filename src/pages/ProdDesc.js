import { Fragment, useContext, useEffect } from "react"
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"

export const ProdDesc = ({ match }) => {

  // const desc = useContext(SoftFurContext)
  const { fetchProduct, product  } = useContext(SoftFurContext)
  const urlName = match.params.id

  useEffect(() => {
    // fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps

    fetchProduct(urlName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  

  const { title, id, field_price_base, field_soft_config, path, field_photo } = product

  // const img =  urlName.field_photo.uri.url 
  console.log("Продукт", product) 
  // console.log("Контент", content[0]) 
  console.log("Фото", field_photo.uri)  
  // console.log("конфигурация", field_soft_config )  
  return (
    <Fragment>
      <h5>{title}</h5>
      <h5>{id}</h5>
      <h5>{field_price_base}</h5>
      {/* <h5>{JSON.stringify(content[0])}</h5>  */}
      {/* <h5>{JSON.stringify(content[0])}</h5>  */}
      {/* <img src={`http://api.divan-shop.loc/${[uri][url]}`} alt="trtret"/>  */}
    </Fragment>
  )
}