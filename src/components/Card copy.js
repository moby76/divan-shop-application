import { Link } from "react-router-dom";
import basePath from '../utils/basePath'
// import { SoftFurContext } from "../context/SoftFur/SoftFurContext"

export const Card = ({ title, photo, soft_config, id }) => (
    <div className="card h-100">
        <div className="card-header">
            <h5 className="card-title">{title}</h5>
        </div>
        {/* <img src={`http://api.divan-shop.loc/${photo.uri.url}`} alt={photo.filename} className="card-img-top p-3" /> */}
        <img src={`${basePath}${photo.uri.url}`} alt={photo.filename} className="card-img-top p-3" />
        <div className="card-body">
            <h5 className="card-text">{soft_config.name}</h5>
            <Link to={`/soft-furniture/${id}`} className="btn btn-primary">Открыть</ Link >
        </div>
    </div>
)