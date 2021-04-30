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
        productModelId: '',//uuid модель продукта
        productModelName: '',//название модели продукта(string)
        productModelScheme: '',//схема модели продукта(string)
        productModelDesc: '',//краткое описание модели товара
        transformation: [], //Трансформации мебели(массив объектов)
        filling: [],//Наполнение матрасов
        dimensions: [], //габариты
        features: ''//особенности/отличия товара отбазовой модели 
    }

    const [state, dispatch] = useReducer(SoftFurReducer, initialState)

    //Запрос на получение данных всех товаров типа "мягкая мебель" 
    const fetchData = async () => {
        setLoader()
        const contentVal = await API.get(
            `node/soft_fur?include=photo,soft_config,model,where&sort=created`
        )
        dispatch({
            type: GET_PRODUCTS,//данный тип оказывает влияние на массив content(заполняет его данными из jsonapi) и так-же деактивирует loader(false)
            payload: contentVal.data.data
        })
    }

    //Запрос на получение данных для формирования описания одного товара
    const fetchProduct = async (url) => {
        setLoader()
        const prodVal = await API.get(
            `node/soft_fur/${url}?include=photo,soft_config,transformation,filling,model,model.scheme,dimensions,dimensions.image&fields[node--dimensions]=image&fields[taxonomy_term--filling]=name`
        )
        dispatch({
            type: GET_PRODUCT,//данный тип оказывает влияние на объект product - загружает его из  jsonapi, а так-же деактивирует loader(false)
            payload: prodVal.data.data
        })

    }

    //Запрос на получение данных для формирования списка новинок
    const fetchNewItems = async () => {

        setLoader()

        const response = await API.get(
            `node/soft_fur?include=where,photo,soft_config&filter[new_item][value]=1&fields[node--soft_fur]=where,title,available,price_base,created,photo,soft_config&sort=created&page[limit]=5`
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

    const { content, product, loader, newitems, productModelName, productModelId, photo, config, basePrice, transformation, filling, productModelScheme, dimensions, productModelDesc, features} = state

    return <SoftFurContext.Provider value={{
        fetchData, fetchProduct, setLoader, fetchNewItems,
        content, product, loader, newitems, productModelName, productModelId, photo, config, basePrice, transformation, filling, productModelScheme, dimensions, productModelDesc, features
    }}>
        {children}
    </SoftFurContext.Provider>
}

