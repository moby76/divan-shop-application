import { useReducer } from "react"
import API from "../../utils/api"
import { GET_MODELS, GET_SINGLE_MODEL, SET_LOADING } from "../types"
import { TermsContext } from "./termsContext"
import { TermsReducer } from "./termsReducer"

export const TermsState = ({ children }) => {

    const initialState = {
        termModels: [],        
        termSingleModel: {},
        loader: false
    }

    const [state, dispatch] = useReducer(TermsReducer, initialState)

    const fetchTermsModel = async () => {
        setLoader()
        const value = await API.get(
            `taxonomy_term/models?include=scheme`
        )
        dispatch({
            type: GET_MODELS,
            payload: value.data.data
        })
    }

    const fetchSingleModel = async (url) => {
        setLoader()
        const value = await API.get(
            `taxonomy_term/models/${url}`
        )
        dispatch({
            type: GET_SINGLE_MODEL,
            payload: value.data.data
        })
    } 

    // function delay(ms) {
    //     
    //   }
      
    //   delay(3000).then(() => alert('выполнилось через 3 секунды'));

    //метод изменения состояния лоадера
    const setLoader = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    const {termModels, termSingleModel, loader } = state

    return <TermsContext.Provider value={{
        fetchTermsModel, fetchSingleModel, setLoader,
        termModels, termSingleModel, loader
    }}>
        {children}
    </TermsContext.Provider>
}