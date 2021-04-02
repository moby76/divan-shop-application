import { useContext } from "react"
import { Link } from "react-router-dom"
import { SoftFurContext } from "../../context/SoftFur/SoftFurContext"

export const PaginationBlock = ({current, urlName}) => {
    
    // { itemsPerPage, totalItems } --^

    const { itemsPerBlock, paginateBlock } = useContext(SoftFurContext)

    const pageNumbers = []
    const totalItems = current.length

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerBlock); i++) {
        // const element = array[i];
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Link onClick={() => paginateBlock(number)} to={`/soft-furniture/${urlName}/#`} className="page-link">
                            {number}
                        </Link>
                    </li>
                )
                )}
            </ul>
        </nav>
    )
}