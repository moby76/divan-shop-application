import { Link } from "react-router-dom";

export const Card = ({ title, field_photo, field_soft_config, id }) => (
    <div className="card h-100">
        <div className="card-header">
            <h5 className="card-title">{title}</h5>
        </div>
        <img src={`http://api.divan-shop.loc/${field_photo.uri.url}`} alt={field_photo.filename} className="card-img-top p-3" />
        <div className="card-body">
            <h5 className="card-text">{field_soft_config.name}</h5>
            <Link to={`/soft-furniture/${id}`} className="btn btn-primary">Открыть</ Link >
        </div>
    </div>
)