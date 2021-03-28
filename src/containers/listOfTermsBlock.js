import { Fragment, useContext, useEffect } from "react"
import { TermsListItem } from "../components/TermsListItem"

export const ListOfTermsBlock = ({ terms }) => {

    // console.log(terms)

    return (
        
        <div className="container-fluid">
            <div className="col-sm-12 text-center"> <h3>Посмотреть другие модели</h3></div>
            <hr/>
            <ul className="list-group mb-4">
                {terms.map((term) => {
                    // console.log(term)
                    return (
                        <TermsListItem 
                            {...term}
                        />
                    )
                }
                )}
            </ul>
        </div >
    )
}