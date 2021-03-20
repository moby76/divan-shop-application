import { Link } from "react-router-dom";
import basePath from '../utils/basePath'
// import { SoftFurContext } from "../context/SoftFur/SoftFurContext"

export const NewItem = ({ title, price_base, photo, soft_config, id, available }) => {

    console.log(price_base, soft_config.name, JSON.stringify(available))

    return (
        <div className="card h-100">
            <div className="card-header">
                <h5 className="card-title">{title}</h5>
            </div>
            {/* <img src={`http://api.divan-shop.loc/${photo.uri.url}`} alt={photo.filename} className="card-img-top p-3" /> */}
            <img src={`${basePath}${photo.uri.url}`} alt={photo.filename} className="card-img-top p-3" />
            <div className="card-body">
                <h5 className="card-text">наличие:{JSON.stringify(available)}</h5>
                {/* <Link to={`/soft-furniture/${id}`} className="btn btn-primary">Открыть</ Link > */}
                <Link to={`/soft-furniture/`} className="btn btn-primary">Открыть</ Link >
            </div>
        </div>
    )
}