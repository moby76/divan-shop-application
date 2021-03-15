import { useState } from 'react'
import API from '../../utils/api'
import { SoftFurContext } from './SoftFurContext'

export const SoftFurState = ({ children }) => {

    const [content, setContent] = useState([])
    const [product, setProduct] = useState({})    

        const fetchData = async () => {
            const respValues = await API.get(
                `node/soft_fur?include=field_photo,field_soft_config&sort=created&page[limit]=10`
            )
            setContent(respValues.data.data)            
        }
        // fetchData()

        const fetchProduct = async (url) => {
            const respValues = await API.get(
                `node/soft_fur/${url}?include=field_photo,field_soft_config&sort=created&page[limit]=10`
                // `node/soft_fur/${url}`
                // `node/soft_fur?${id}`
            )            
            setProduct(respValues.data.data)
        }
        // fetchUrl()

    return <SoftFurContext.Provider value={{   
        fetchData, fetchProduct,
        content, product
    }}>
        {children}
    </SoftFurContext.Provider>
}

