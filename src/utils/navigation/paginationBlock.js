//Компонент/утилита для вывода кнопок пагинации В БЛОКАХ, при нажатии на которую срабатывает ф-ция переписывающая
//значение currentBlock, влияющее на формирование массива выводимых на экран элементов 

import { useContext } from "react"
import { Link } from "react-router-dom"
import { PaginationContext } from "../../context/pagination/paginationContext"
// import { SoftFurContext } from "../../context/SoftFur/SoftFurContext"
// import { SoftFurContext } from "../../context/SoftFur/SoftFurContext"

export const PaginationBlock = ({ array, filteredBy, urlName} ) => {//в пропсах: array - массив для обработки
    
    // { itemsPerPage, totalItems } --^

    const { itemsPerBlock, paginateBlock } = useContext(PaginationContext)
    
    const renderedNumbers = []
    const totalItems = array.length

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerBlock); i++) {
        // const element = array[i];
        renderedNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {renderedNumbers.map(blockNumber => (
                    <li key={blockNumber} className="page-item">
                        <Link onClick={() => paginateBlock(blockNumber)} to={`/soft-furniture/${urlName}/#`} className="page-link">
                            {blockNumber}
                        </Link>
                    </li>
                )
                )}
            </ul>
        </nav>
    )
}