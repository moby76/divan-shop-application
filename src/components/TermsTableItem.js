// Элемент/строка таблицы 
// Вызывается из таблицы списка моделей(за исключением модели текущего товара) - конт. <ListOfTermsBlock> - containers/listOfTermsBlock.js

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCol } from "mdbreact"
import { Link } from "react-router-dom"
import basePath from "../utils/basePath"
import NoImage from "./noImage"


export const TermsTableItem = ({ id, name, scheme }) => {
    //  console.log(scheme)
    return (
        <>

            <MDBCard color="mdb-color darken-4" text="white" className="text-center flex-column d-flex vw-100">
                <MDBCardBody className="h-50">
                <Link to={`/models/${id}`} target="_blank" className="white-text" >
                {scheme.length > 0 ?
                    <MDBCardImage src={`${basePath}${scheme[0].uri.url}`} alt={scheme.filename} className="w-100 h-100" /> :
                    <NoImage />}
                    </Link>
                </MDBCardBody>
                {/* <MDBCardText> */}
                <MDBCardBody className="my-auto justify-content-center align-self-center">
                    {/* <div className="flex-row"> */}
                        <Link to={`/models/${id}`} target="_blank" className="white-text" >
                            Модель {name}
                        </Link>
                    {/* </div> */}
                </MDBCardBody>
                {/* </MDBCardText> */}
            </MDBCard>

        </>
    )
}