import { useState } from 'react'
import API from '../../utils/api'
import { SoftFurContext } from './SoftFurContext'

export const SoftFurState = ({ children }) => {

    const [content, setContent] = useState([])
    const [product, setProduct] = useState({
        title: undefined,
        price: '',
        config: undefined,
        img: ''
    }) 
    // const [product, setProduct] = useState({})
    // const [title, setTitle] = useState('')
    // const [config, setConfig] = useState('')
    // const [img, setImg] = useState('')
    const [loader, setLoader] = useState(true)   

        const fetchData = async () => {
            setLoader(false)
            const contentVal = await API.get(
                `node/soft_fur?include=field_photo,field_soft_config&sort=created&page[limit]=10`
            )
            setContent(contentVal.data.data)
            // catch(error => console.log('error:', error));           
        }
        // fetchData()

        const fetchProduct = async (url) => {
            setLoader(false)
            const respValues = await API.get(
                `node/soft_fur/${url}?include=field_photo,field_soft_config&sort=created&page[limit]=10`
            )            
            // setProduct(respValues.data.data)
            setProduct({
                title: respValues.data.data.title,
                price: respValues.data.data.field_price_base,
                config: respValues.data.data.field_soft_config.name,
                img: respValues.data.data.field_photo.uri.url
            })
            // setTitle(respValues.data.data.title)
            // setConfig(respValues.data.data.field_soft_config.name)
            // setImg(respValues.data.data.field_photo.uri.url)
            // .catch(error => console.log('error:', error));
        }
        // fetchUrl()

    return <SoftFurContext.Provider value={{   
        fetchData, fetchProduct,
        content, product, loader
    }}>
        {children}
    </SoftFurContext.Provider>
}

