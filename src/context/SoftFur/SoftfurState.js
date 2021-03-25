import { useReducer } from 'react'
import API from '../../utils/api'
import { GET_PRODUCT, GET_PRODUCTS, SET_LOADING, GET_NEWITEMS, SET_PAGINATE, GET_ITEMS_BY_MODEL, SET_PAGINATE_BLOCK } from '../types'
import { SoftFurContext } from './SoftFurContext'
import { SoftFurReducer } from './softFurReducer'

export const SoftFurState = ({ children }) => {

    const initialState = {
        content: [],
        newitems: [],
        itemsByModels: [],//
        product: {},
        currentPage: 1,//текущая страница в пагинации
        itemsPerPage: 5,//количество карточек с товарами на странице с мягкой мебелью. для пагинации
        currentBlock: 1,
        itemsPerBlock: 3,
        loader: false
    }

    // const [loader, setLoader] = useState(true)   
    const [state, dispatch] = useReducer(SoftFurReducer, initialState)

    //Запрос на получение данных для формирования страницы с карточками товаров 
    const fetchData = async () => {

        setLoader()

        const contentVal = await API.get(
            `node/soft_fur?include=photo,soft_config,model&sort=created`
        )
        dispatch({
            type: GET_PRODUCTS,
            payload: contentVal.data.data
        })
    }

    //Запрос на получение данных для формирования описания товара
    const fetchProduct = async (url) => {

        setLoader()

        const prodVal = await API.get(
            `node/soft_fur/${url}?include=photo,soft_config,model&sort=created&page[limit]=10`
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

    //запрос на получение материалов по полю модель
    const fetchItemsByModel = async (model) => {
        setLoader()
        const response = await API.get(
            `http://api.divan-shop.loc/jsonapi/node/soft_fur?fields[node--soft_fur]=title,model&fields[taxonomy_term--models]=name&page[limit]=10&include=model&filter[model.name]=${model}`
        )
        dispatch({
            type: GET_ITEMS_BY_MODEL,
            payload: response.data.data
        })
    }

    //метод изменения состояния лоадера
    const setLoader = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    //метод изменения номера текущей пагинации Страницы
    const paginate = (pageNumber) => {
        dispatch({
            type: SET_PAGINATE,
            value: pageNumber
        })
    }
    //метод изменения номера текущей пагинации Блока
    const paginateBlock = (pageNumber) => {
        dispatch({
            type: SET_PAGINATE_BLOCK,
            value: pageNumber
        })
    }


    const { content, product, loader, newitems, currentPage, itemsPerPage, itemsByModels, itemsPerBlock, currentBlock } = state

    return <SoftFurContext.Provider value={{
        fetchData, fetchProduct, setLoader, fetchNewItems, paginate, paginateBlock, fetchItemsByModel,
        content, product, loader, newitems, currentPage, itemsPerPage, itemsPerBlock, itemsByModels, currentBlock
    }}>
        {children}
    </SoftFurContext.Provider>
}

