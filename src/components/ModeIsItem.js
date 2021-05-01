//Формируем элемент краткого описания модели на странице - "Модели"
//Инкапсулируется в <ModelsContainer> - container/modelsContainer.js

import { SRLWrapper } from "simple-react-lightbox";
import { Link } from "react-router-dom";
import basePath from '../utils/basePath'
// import { SoftFurContext } from "../context/SoftFur/SoftFurContext"

export const ModeIsItem = ({ name, model_desc, scheme, id }) => {

    // console.log(price_base, soft_config.name, JSON.stringify(available))
    // console.log("Краткое описание", model_desc.summary)

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
                        <h5 className="card-title">Модель {name}</h5>
                    </div>

                    {!scheme.data ?//если не пыстые данне в поле/массиве scheme то выполняем:
                        <SRLWrapper options={options}>
                            <a href={`${basePath}${scheme[0].uri.url}`}>
                                <img src={`${basePath}${scheme[0].uri.url}`} alt={scheme[0].filename} className="card-img-top p-3" />
                            </a>
                        </SRLWrapper>
                        :
                        <h5>Нет изображения</h5>}
                    <div className="card-body">
                        {/* <h5 className="card-text"></h5> */}
                    </div>
                </div>
            </div>
            <div className="col d-flex flex-column">

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{model_desc.summary}</li>
                    {/* <li className="list-group-item">Стоимость: {price_base} руб.</li> */}
                    {/* <li className="list-group-item">Конфигурация: {soft_config.name}</li> */}
                    {/* <li className="list-group-item">Наличие: {available ? <span>В наличии</span> : <span>Отсутствует</span>}</li> */}
                </ul>

                <hr />

                {/* <Link to={`/soft-furniture/${id}`} className="btn btn-primary mt-auto">Открыть</ Link > */}
                <Link to={`/models/${id}`} target="_blank" className="btn btn-primary mt-auto" >Перейти к описанию</Link>
            </div>
        </>
    )
}