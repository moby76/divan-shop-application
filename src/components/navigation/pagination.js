import { useContext } from "react"
import { SoftFurContext } from "../../context/SoftFur/SoftFurContext"

export const Pagination = () => {
    
    // { itemsPerPage, totalItems } --^

    const { itemsPerPage, content, paginate } = useContext(SoftFurContext)

    const pageNumbers = []
    const totalItems = content.length

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        // const element = array[i];
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="/soft-furniture/#" className="page-link">
                            {number}
                        </a>
                    </li>
                )
                )}
            </ul>
        </nav>
    )
}