// Элемент/строка таблицы 
// Вызывается из таблицы списка моделей(за исключением модели текущего товара) - конт. <ListOfTermsBlock> - containers/listOfTermsBlock.js

import { Link } from "react-router-dom"

export const TermsTableItem = ({ id, name}) => {

    return (
        <>
            <tr >
                <td>
                    <Link to={`/models/${id}`} target="_blank" className="text-light" >
                        {name}
                    </Link>
                </td>
                <td>

                </td>
            </tr>
        </>
    )
}