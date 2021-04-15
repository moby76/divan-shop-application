import { useReducer } from "react"
import { HIDE_ALERT, SHOW_ALERT, SHOW_ALERT_TRANSFORMERS, HIDE_ALERT_TRANSFORMERS } from "../types"
import { AlertContext } from "./alertContext"
import { AlertReducer } from "./alertReducer"
import { AlertTransformReducer } from "./alertTransformersReducer"

export const AlertState = ({ children }) => {

    const [state, dispatch] = useReducer(AlertReducer, null)
    const [stateTransformers, dispatchTransformers] = useReducer(AlertTransformReducer, null)

    //скрыть
    const hide = () => dispatch({type: HIDE_ALERT})
    const hideTransformers = () => dispatch({type: HIDE_ALERT_TRANSFORMERS})

    //показать
    const show = (text, bgColor = 'secondary') => {
        dispatch({
            type: SHOW_ALERT,
            payload:{bgColor, text}
        })
    }

    const showTransformers = (text, bgColor = 'secondary') => {
        dispatchTransformers({
            type: SHOW_ALERT_TRANSFORMERS,
            payload:{bgColor, text}
        })
    }

    return (
        //провайдер от компонента AlerContext
        <AlertContext.Provider value={{
            hide, show, showTransformers, hideTransformers, alert: state, alertOfTransformers: stateTransformers//передача методов hide, show и объекта state в виде свойства alert со значением state 
        }}>
            {children}
        </AlertContext.Provider>
    )
}