//Описание модели Мягкой мебели

import { Fragment, useContext, useEffect } from "react"
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

    // //отфильтровать массив content выводящий товары той-же модели что и отображаемый исключив из него текущий. Для блока товаров из той-же модели
    // const currentModelItems = content.filter(callback => {//получим новый массив со значениями: исключить текущего объекта, но оставить все остальные из той-же модели
    //     return callback.id !== urlName && callback.model.name === productModelName
    // })
    // const { name, description, scheme } = termSingleModel

    // let newDescription = description.split('\n').map((item, key) => {
    //     return <span key={key}>{item}<br /></span>
    // })

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
                <h3 className="col-sm-12 text-center">Модель {name}</h3>
                <div className="row">
                    {thisDescription}
                    <hr />
                </div>

                <div className="row">

                    {scheme.length > 0 ? scheme.map((item) => {
                        return (
                            <div className="col-sm-4 mb-3" key={item.id}>
                                <img src={`${basePath}${item.uri.url}`} alt={item.filename} className="img-fluid" />
                                {/* <sub>{item.uri.url}</sub> */}
                            </div>
                        )
                    }) : <p>Схемы нет</p>
                    }
                </div>
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