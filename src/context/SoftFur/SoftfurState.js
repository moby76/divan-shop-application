import { useReducer, useState } from 'react'
import API from '../../utils/api'
import { GET_PRODUCT, GET_PRODUCTS, SET_LOADING, GET_NEWITEMS } from '../types'
import { SoftFurContext } from './SoftFurContext'
import { SoftFurReducer } from './softFurReducer'

export const SoftFurState = ({ children }) => {
    
    const initialState = {
        content: [],
        newitems: [],
        product: {},
        loader: false
    }

    // const [loader, setLoader] = useState(true)   
    const [state, dispatch] = useReducer(SoftFurReducer, initialState)

    //Запрос на получение данных для формирования страницы с карточками товаров 
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

    //Запрос на получение данных для формирования описания товара
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

    //Запрос на получение данных для формирования списка новинок
    const fetchNewItems = async () => {

        setLoader()

        const response = await API.get(
            `node/soft_fur?include=photo,soft_config&filter[new_item][value%5D=1&fields[node--soft_fur]=title,available,price_base,created,photo,soft_config&sort=created&page[limit]=5`
        )
        dispatch({
            type: GET_NEWITEMS,
            payload: response.data.data
        })
    }
    
    //метод изменения состояния лоадера
    const setLoader = () => {
        dispatch({
            type: SET_LOADING
        })
    }
    const { content, product, loader, newitems } = state

    return <SoftFurContext.Provider value={{
        fetchData, fetchProduct, setLoader, fetchNewItems,
        content, product, loader, newitems
    }}>
        {children}
    </SoftFurContext.Provider>
}

