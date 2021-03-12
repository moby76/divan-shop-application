import {useReducer} from 'react'
import { HIDE_ALERT, SHOW_ALERT } from '../types'

import { AlertContext } from "./alertContext"
import { alertReducer } from './alertReducer.js'

export const AlerState = ({children}) => {

    //
    const [state, dispatch] = useReducer(alertReducer, null)

    //скрыть
    const hide = () => dispatch({type: HIDE_ALERT})

    //показать
    const show = (text, bgColor = 'secondary') => {
        dispatch({
            type: SHOW_ALERT,
            payload:{bgColor, text}
        })
    }

    return(
        //провайдер от компонента AlerContext
        <AlertContext.Provider value={{
            hide, show, alert: state//передача методов hide, show и объекта state в виде свойства alert со значением state 
        }}>
            {children}
        </AlertContext.Provider>
    )
}