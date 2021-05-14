import { useReducer } from "react"
import API from "../../utils/api"
import { FETCH_ERROR, GET_CONFIGS, GET_MODELS, GET_NEW_MODELS, GET_SINGLE_MODEL, SET_LOADING } from "../types"
import { TermsContext } from "./termsContext"
import { TermsReducer } from "./termsReducer"

export const TermsState = ({ children }) => {

    const initialState = {
        termModels: [],//Массив с терминами таксономии "Модели мягкой мебели"      
        termSingleModel: '',//одна модель(объект из API, получаемый при запросе из )
        newModels: [],//Массив новых моделей
        configs: [],//конфигурации
        description: '',// Описание модели (description.value)
        scheme: [],//схема(массив ссылок до изображений)
        singleModel: {},//одна модель
        error: '',
        loader: false
    }

    const [state, dispatch] = useReducer(TermsReducer, initialState)

    //Получаем все модели мягкой мебели
    const fetchTermsModel = async () => {
        setLoader()
        await API.get(//подгружаем все модели 
            `taxonomy_term/models?include=scheme`
        )
            .then(value => {
                dispatch({
                    type: GET_MODELS,
                    payload: value.data.data
                })
            })
            .catch(error => {
                dispatch({
                    type: FETCH_ERROR
                })
            })
    }

    //подгружаем единственную модель по url = uuid
    const fetchSingleModel = async (url) => {
        setLoader()
        await API.get(
            `taxonomy_term/models/${url}?include=scheme`
        )
            .then(value => {
                dispatch({
                    type: GET_SINGLE_MODEL,
                    payload: value.data.data
                })
            })
            .catch(error => {
                dispatch({
                    type: FETCH_ERROR
                    
                })
                console.log("Ошибка подключения ",error)
            })
    }

    //Получение новинок(новых моделей)
    const fetchNeweModels = async () => {
        // setLoader()
        await API.get(
            `taxonomy_term/models?include=scheme&filter[new_model]=1&page[limit]=3&sort=-revision_created`
        )
            .then(value => {
                dispatch({
                    type: GET_NEW_MODELS,
                    payload: value.data.data
                })
            })
            .catch(error => {
                dispatch({
                    type: FETCH_ERROR                    
                })
                console.log("Ошибка подключения ",error)
            })
    }

    //Получение конфигураций мебели
    const fetchConfigs = async () => {
        // setLoader()
        await API.get(
            `taxonomy_term/soft_config?include=config_image`
        )
            .then(value => {
                dispatch({
                    type: GET_CONFIGS,
                    payload: value.data.data
                })
            })
            .catch(error => {
                dispatch({
                    type: FETCH_ERROR                    
                })
                console.log("Ошибка подключения ",error)
            })
    }

    //метод изменения состояния лоадера. Внедряется в каждый fetch запрос  --^
    //диспетчерит по типу SET_LOADING
    const setLoader = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    const { termModels, termSingleModel, loader, singleModel, description, scheme, newModels, configs } = state

    return <TermsContext.Provider value={{
        fetchTermsModel, fetchSingleModel, setLoader, fetchNeweModels, fetchConfigs,
        termModels, termSingleModel, loader, singleModel, description, scheme, newModels, configs
    }}>
        {children}
    </TermsContext.Provider>
}