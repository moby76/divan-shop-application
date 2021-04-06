import { useContext } from "react"
import { Link } from "react-router-dom"
import { PaginationContext } from "../../context/pagination/paginationContext"
import { SoftFurContext } from "../../context/SoftFur/SoftFurContext"

export const PaginationPage = () => {
    
    // { itemsPerPage, totalItems } --^

    const {  content } = useContext(SoftFurContext)
    const { paginatePage, itemsPerPage } = useContext(PaginationContext)

    const renderNumbers = []
    const totalItems = content.length

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        // const element = array[i];
        renderNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {renderNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Link onClick={() => paginatePage(number)} to="/soft-furniture/#" className="page-link">
                            {number}
                        </Link>
                    </li>
                )
                )}
            </ul>
        </nav>
    )
}