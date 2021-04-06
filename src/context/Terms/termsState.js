import { useReducer } from "react"
import API from "../../utils/api"
import { FETCH_ERROR, GET_MODELS, GET_SINGLE_MODEL, SET_LOADING } from "../types"
import { TermsContext } from "./termsContext"
import { TermsReducer } from "./termsReducer"

export const TermsState = ({ children }) => {

    const initialState = {
        termModels: [],//Массив с терминами таксономии "Модели мягкой мебели"      
        termSingleModel: '',//одна модель(объект из API, получаемый при запросе из )
        description: '',// Описание модели (description.value)
        scheme: [],//схема(массив ссылок до изображений)
        singleModel: {},//одна модель
        error: '',
        loader: false
    }

    const [state, dispatch] = useReducer(TermsReducer, initialState)

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

    const fetchSingleModel = async (url) => {//подгружаем единственную модель по url = uuid
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
            })
    }

    //метод изменения состояния лоадера
    const setLoader = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    const { termModels, termSingleModel, loader, singleModel, description, scheme } = state

    return <TermsContext.Provider value={{
        fetchTermsModel, fetchSingleModel, setLoader,
        termModels, termSingleModel, loader, singleModel, description, scheme
    }}>
        {children}
    </TermsContext.Provider>
}