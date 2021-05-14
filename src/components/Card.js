import { MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardImage, MDBCardText } from "mdbreact";
import { Link } from "react-router-dom";
import basePath from '../utils/basePath'
// import { SoftFurContext } from "../context/SoftFur/SoftFurContext"

export const Card = ({ title, photo, soft_config, id }) => (
    <MDBCard className="flex-column d-flex">
        <MDBCardHeader >
            <h5 className="card-title">{title}</h5>
        </MDBCardHeader>
        {/* <img src={`http://api.divan-shop.loc/${photo.uri.url}`} alt={photo.filename} className="card-img-top p-3" /> */}
        <MDBCardBody className="h-50">
            <Link to={`/soft-furniture/${id}`} target="_blank">
                <MDBCardImage src={`${basePath}${photo[0].uri.url}`} alt={photo.filename} className="w-100 h-100" />
            </ Link >
        </MDBCardBody>
        <MDBCardBody className="my-auto" >
            <MDBCardText className="justify-content-center align-self-center">
                {soft_config.name}
            </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter >
            <Link to={`/soft-furniture/${id}`} target="_blank" className="btn btn-primary">Открыть</ Link >
        </MDBCardFooter>
    </MDBCard>
)