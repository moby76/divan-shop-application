import { Link } from "react-router-dom";
import basePath from '../utils/basePath'
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
import { useContext } from "react";

const ItemsByModels = ({ urlName }) => {

    // const { fetchData, content,  fetchProduct, product, loader } = useContext(SoftFurContext)
    const { content, product, loader } = useContext(SoftFurContext)

    const { model } = product

    const current = content.filter(callback => {
        return callback.id !== urlName && callback.model.name === model
    })

    console.log("Из той-же модели : ", current)

    return (
        <div className="container">
            <div className="col-sm-12 text-center"> <h3>Другие товары модели {model}</h3> </div>
            <hr />
            <div className="row">

                {loader ?
                    <p className="text-center">...Идёт загрузка</p> :
                    current.map((val) => {
                        return (

                            <div className="col-sm-4 mb-4" key={val.id}>

                                <div className="card border border-light shadow-sm h-100">
                                    <div className="card-header">
                                        <h5 className="card-title">{val.title}</h5>
                                    </div>
                                    {/* <img src={`http://api.divan-shop.loc/${photo.uri.url}`} alt={photo.filename} className="card-img-top p-3" /> */}
                                    <img src={`${basePath}${val.photo.uri.url}`} alt={val.title} className="card-img-top p-3" />
                                    <div className="card-body">
                                        <h5 className="card-text">{val.soft_config.name}</h5>
                                        <Link to={`/soft-furniture/${val.id}`} target="_parent" className="btn btn-primary">Открыть</ Link >
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemsByModels