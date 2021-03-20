import { useReducer, useState } from 'react'
import API from '../../utils/api'
import { GET_PRODUCT, GET_PRODUCTS, SET_LOADING } from '../types'
import { SoftFurContext } from './SoftFurContext'
import { SoftFurReducer } from './softFurReducer'

export const SoftFurState = ({ children }) => {
    
    const initialState = {
        content: [],
        product: {},
        loader: false
    }

    // const [loader, setLoader] = useState(true)   
    const [state, dispatch] = useReducer(SoftFurReducer, initialState)

    const fetchData = async () => {

        setLoader()

        const contentVal = await API.get(
            `node/soft_fur?include=photo,soft_config&sort=created&page[limit]=10`
        )
        dispatch({
            type: GET_PRODUCTS,
            payload: contentVal.data.data
        })         
    }
    // fetchData()

    const fetchProduct = async (url) => {

        setLoader()

        const prodVal = await API.get(
            `node/soft_fur/${url}?include=photo,soft_config&sort=created&page[limit]=10`
        )
        dispatch({
            type: GET_PRODUCT,
            payload: prodVal.data.data
        })
    }
    
    //метод изменения состояния лоадера
    const setLoader = () => {
        dispatch({
            type: SET_LOADING
        })
    }
    const { content, product, loader } = state

    return <SoftFurContext.Provider value={{
        fetchData, fetchProduct, setLoader,
        content, product, loader
    }}>
        {children}
    </SoftFurContext.Provider>
}

