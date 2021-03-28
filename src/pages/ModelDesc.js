import { useContext, useEffect } from "react"
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
import { TermsContext } from "../context/Terms/termsContext"

export const ModelDesc = ({ match }) => {

    const { fetchSingleModel, termSingleModel, loader } = useContext(TermsContext)

    const urlModelName = match.params.id

    useEffect(() => {
        fetchSingleModel(urlModelName)
    }, [])

    // if (loader) {
    //     return <p className="text-center">...Идёт загрузка</p>
    // } else {
        const {name} = termSingleModel
        return (
            <div>
                <h5>{name}</h5>
                {/* <img src={`${basePath}${img_url}`} alt={img_alt} /> */}
            </div>
            // <div>
            //     qwqwqwqwd
            // </div>
        )
    // }
}