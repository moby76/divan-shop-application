import { Link } from "react-router-dom";

export const Card = ({ val }) => (//аргументом прилетит объект пользоваделя переданный из компоненты <Search>
    <div className="card h-100">
        <div className="card-header">
            <h5 className="card-title">{val.title}</h5>
        </div>
        <img src={`http://api.divan-shop.loc/${val.field_photo.uri.url}`} alt={val.field_photo.filename} className="card-img-top p-3" />
        <div className="card-body">
            <h5 className="card-text">{val.field_soft_config.name}</h5>
            <Link to={'/soft-furniture/' + val.title} className="btn btn-primary">Открыть</ Link >
        </div>
    </div>
)