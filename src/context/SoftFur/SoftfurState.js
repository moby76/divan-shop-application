import { useReducer } from 'react'
import API from '../../utils/api'
import { GET_PRODUCT, GET_PRODUCTS, SET_LOADING, GET_NEWITEMS } from '../types'
import { SoftFurContext } from './SoftFurContext'
import { SoftFurReducer } from './softFurReducer'

export const SoftFurState = ({ children }) => {

    const initialState = {
        content: [],//все продукты
        newitems: [],//новые

        product: {},//продукт(объект)
        // ItemsByModelsOfProduct: [],//        
        basePrice: '',//Базовая цена(строка)
        config: {},//Конфигурация мебели данного товара
        loader: false,
        photo: [], //фотографии объекта(массивоподобный объект)
        productModel: {},//модель продукта
        productModelName: ''//название модели продукта(string)
    }

    const [state, dispatch] = useReducer(SoftFurReducer, initialState)

    //Запрос на получение данных для формирования страницы с карточками товаров 
    const fetchData = async () => {
        setLoader()
        const contentVal = await API.get(
            `node/soft_fur?include=photo,soft_config,model&sort=created`
        )
        dispatch({
            type: GET_PRODUCTS,//данный тип оказывает влияние на массив content(заполняет его данными из jsonapi) и так-же деактивирует loader(false)
            payload: contentVal.data.data
        })
    }

    //Запрос на получение данных для формирования описания товара
    const fetchProduct = async (url) => {
        setLoader()
        const prodVal = await API.get(
            `node/soft_fur/${url}?include=photo,soft_config,model`
        )
        dispatch({
            type: GET_PRODUCT,//данный тип оказывает влияние на объект product - загружает его из  jsonapi, а так-же деактивирует loader(false)
            payload: prodVal.data.data
        })

        // console.log("eeerrttt")
    }

    //Запрос на получение данных для формирования списка новинок
    const fetchNewItems = async () => {

        setLoader()

        const response = await API.get(
            `node/soft_fur?include=photo,soft_config&filter[new_item][value]=1&fields[node--soft_fur]=title,available,price_base,created,photo,soft_config&sort=created&page[limit]=5`
        )
        dispatch({
            type: GET_NEWITEMS,
            payload: response.data.data
        })
    }

    //запрос на получение материалов по полю "Название модели" 
    // const fetchItemsByModel = async (productModelName) => {
    //     setLoader()
    //     const response = await API.get(
    //         `http://api.divan-shop.loc/jsonapi/node/soft_fur?fields[node--soft_fur]=title,model&fields[taxonomy_term--models]=name&page[limit]=10&include=model&filter[model.name]=${productModelName}`
    //     )
    //     dispatch({
    //         type: GET_ITEMS_BY_MODEL,
    //         payload: response.data.data
    //     })
    // }

    //метод изменения состояния лоадера
    const setLoader = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    const { content, product, loader, newitems, productModelName, productModel, photo, config, basePrice  } = state

    return <SoftFurContext.Provider value={{
        fetchData, fetchProduct, setLoader, fetchNewItems,
        content, product, loader, newitems, productModelName, productModel, photo, config, basePrice
    }}>
        {children}
    </SoftFurContext.Provider>
}

