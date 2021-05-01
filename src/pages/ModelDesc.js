//Описание модели Мягкой мебели

import { Fragment, useContext, useEffect } from "react"
import { SRLWrapper } from "simple-react-lightbox"
import { ItemsByModels } from "../containers/itemsByModels"
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
// import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
import { TermsContext } from "../context/Terms/termsContext"
// import API from "../utils/api"
import basePath from "../utils/basePath"

export const ModelDesc = ({ match }) => {

    const urlModelName = match.params.id

    const { fetchSingleModel, termSingleModel, scheme, description, loader } = useContext(TermsContext)
    const { fetchData } = useContext(SoftFurContext)

    //Опции для Лайтбокса
    const options = {
        settings: {
            overlayColor: "rgb(15 15 15 / 95%)",
            disableKeyboardControls: false,
            disableWheelControls: true,
            autoplaySpeed: 1500,
            transitionSpeed: 300,
        },
        buttons: {
            // backgroundColor: "#1b5245",
            // iconColor: "rgba(126, 172, 139, 0.8)",
            showDownloadButton: false,
            showNextButton: true,
            showPrevButton: true,
            showThumbnailsButton: false,
            showAutoplayButton: true,
        },
        caption: {
            showCaption: false,
        },
        thumbnails: {
            showThumbnails: true
        }
    }

    useEffect(() => {
        setTimeout(() => {
            fetchSingleModel(urlModelName)
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setTimeout(() => {
            fetchData()//
        }, 1000);
    }, [termSingleModel, fetchData])

    const thisDescription = description.replace(/(<([^>]+)>)/ig, "").split('\n').map((item, i) => {
        return <p className="mb-1" key={i}>{item}</p>
    })

    const { name } = termSingleModel

    // console.log("Модель", termSingleModel)

    if (loader) {
        return <p className="text-center">...Идёт загрузка</p>
    } else {
        return (
            // isLoading ? '...Loading' :
            <Fragment>
                {/* <ModelDesc
                /> */}
                <div className="container">
                    <div className="col-sm-12 text-center"><h3>Модель {name}</h3></div>
                    <hr />

                    {thisDescription}
                    <hr />
                </div>
                {scheme.length > 0 ?
                    <SRLWrapper options={options}>
                        <div className="row mb-3">
                            {scheme.map((item) => {
                                return (
                                    <div className="col-sm-4 mb-3" key={item.id}>
                                        <a href={`${basePath}${item.uri.url}`}>
                                            <img src={`${basePath}${item.uri.url}`} alt={item.filename} className="img-fluid" />
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </SRLWrapper>
                    : <p>Схемы нет</p>
                }

                <ItemsByModels // компонент в котором Подгружаем список товаров по модели текущего товара
                    urlName={urlModelName}//передача uuid товара в блок отображения других товаров из той-же модели
                    // currentModelItems={currentModelItems}
                    // content={content}
                    termName={name}
                    term={termSingleModel}
                />
            </Fragment>
        )
    }
}