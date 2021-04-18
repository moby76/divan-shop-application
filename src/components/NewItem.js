import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import basePath from '../utils/basePath'
// import { SoftFurContext } from "../context/SoftFur/SoftFurContext"


export const NewItem = ({ title, price_base, photo, soft_config, id, available }) => {

    // console.log(price_base, soft_config.name, JSON.stringify(available))

    //Опции для Лайтбокса
    const options = {
        settings: {
            overlayColor: "rgb(15 15 15 / 95%)",
            disableKeyboardControls: false,
            disableWheelControls: true,
            autoplaySpeed: 1500,
            transitionSpeed: 500,
        },
        buttons: {
            // backgroundColor: "#1b5245",
            // iconColor: "rgba(126, 172, 139, 0.8)",
            showDownloadButton: false,
            showNextButton: false,
            showPrevButton: false,
            showThumbnailsButton: false,
            showAutoplayButton: false,
        },
        caption: {
            showCaption: false,
        }, 
        thumbnails: {
            showThumbnails: false
        }
    }

    return (
        <>
            <div className="col" >
                <div className="card h-100">
                    <div className="card-header">
                        <h5 className="card-title">{title}</h5>
                    </div>
                    <SRLWrapper options={options}>
                        <a href={`${basePath}${photo[0].uri.url}`}>
                            <img src={`${basePath}${photo[0].uri.url}`} alt={photo[0].filename} className="card-img-top p-3" />
                        </a>
                    </SRLWrapper>
                    {/* <img src={`http://api.divan-shop.loc/${photo.uri.url}`} alt={photo.filename} className="card-img-top p-3" /> */}

                    <div className="card-body">
                        {/* <h5 className="card-text"></h5> */}
                        {/* <Link to={`/soft-furniture/${id}`} className="btn btn-primary">Открыть</ Link > */}

                    </div>
                </div>
            </div>
            <div className="col d-flex flex-column">

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Стоимость: {price_base} руб.</li>
                    <li className="list-group-item">Конфигурация: {soft_config.name}</li>
                    <li className="list-group-item">Наличие: {available ? <span>В наличии</span> : <span>Отсутствует</span>}</li>
                </ul>

                <hr />

                <Link to={`/soft-furniture/${id}`} target="_blank" className="btn btn-primary mt-auto">Открыть</ Link >
            </div>
        </>
    )
}