import { useContext } from "react"
import { AlertContext } from "../context/alert/alertContext"

export const AlertOfTransformers = () => {

    //получим свойство alert(который содержит стейт и метод hide из контекста AlertContext[AlerState], вызвав Хук useContext с контекстом AlerContext
    const { alertOfTransformers, hideTransformers } = useContext(AlertContext)

    //проверка: если стейт пустой - то нулл
    if (!alertOfTransformers) return null

    //иначе рендерим весь шаблон
    return (
        <div
            className={`alert alert-${alertOfTransformers.bgColor || 'secondary'} alert-dismissible fade show`}
            role="alert">
            {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
            {alertOfTransformers.text}
            {/* <hr /> */}
            {/* <p className="mb-0">Дополнительную информацию можно узнать по телефону +79039080424</p> */}
            <button type="button" className="close" aria-label="Close" onClick={hideTransformers}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}