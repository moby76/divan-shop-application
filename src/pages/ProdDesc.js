import { Fragment, useContext, useEffect } from "react"
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"

export const ProdDesc = ({ match }) => {

  // const desc = useContext(SoftFurContext)
  const { fetchProduct, product, loader } = useContext(SoftFurContext)
  const urlName = match.params.id

  useEffect(() => {

    fetchProduct(urlName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loader) {
    return <p className="text-center">...Идёт загрузка</p>
  } else {
    const { title, price, config, img } = product
    
    // let mydata = JSON.parse(product)
    console.log("Продукт", product) 

    console.log("Название", title)    
    console.log("Цена", price)     
    console.log("Конфиг", config) 
    console.log("Картинка", img) 
    // console.log("Фото", mydata[0])

    return (
      <Fragment>
        <h5>{title}</h5>
        <h5>{config}</h5>
        <h5>{price}</h5>
        <img src={`http://api.divan-shop.loc/${img}`} alt=""/> 
      </Fragment>
    )
  }
}