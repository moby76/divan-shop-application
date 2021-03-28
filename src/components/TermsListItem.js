import { Link } from "react-router-dom"

export const TermsListItem = ({ id, name }) => {

    return (
        <Link to={`/models/${id}`} target="_blank" className="list-group-item" key={id}>
            {name}
        </Link>
    )
}






