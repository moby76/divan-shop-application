// Элемент/строка таблицы 
// Вызывается из таблицы списка моделей(за исключением модели текущего товара) - конт. <ListOfTermsBlock> - containers/listOfTermsBlock.js

import { Link } from "react-router-dom"
import basePath from "../utils/basePath"

export const TermsTableItem = ({ id, name, scheme}) => {
//  console.log(scheme)
    return (
        <>
            <tr >
                
                <td className="w-25">
                    <Link to={`/models/${id}`} target="_blank" className="text-light" >
                        {name}
                    </Link>
                </td>
                <td className="w-75">
                    <img src={`${basePath}${scheme[0].uri.url}`} alt={scheme.filename} className="img-fluid col-sm-4 rounded mx-auto d-block"/>
                </td>
            </tr>
        </>
    )
}