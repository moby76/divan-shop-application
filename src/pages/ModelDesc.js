//Описание модели Мягкой мебели

import { Fragment, useContext, useEffect, useState } from "react"
import { ItemsByModels } from "../containers/itemsByModels"
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
// import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
import { TermsContext } from "../context/Terms/termsContext"
import API from "../utils/api"
import basePath from "../utils/basePath"

export const ModelDesc = ({ match }) => {

    const urlModelName = match.params.id

    const { fetchSingleModel, termSingleModel, scheme, description, loader, error } = useContext(TermsContext)
    const { fetchData, content } = useContext(SoftFurContext)

    // const [mounted, setMounted] = useState(true)
    // const [isLoading, setIsLoading] = useState(true)
    // const [model, setModel] = useState({})
    // const [description, setDescription] = useState(null)
    // const [scheme, setScheme] = useState([])

    // useEffect(() => {
    //     setTimeout(() => {
    //         API.get(
    //             `taxonomy_term/models/${urlModelName}?include=scheme`
    //         )
    //             .then(value => {
    //                 setModel(value.data.data)
    //                 setDescription(value.data.data.model_desc.value)
    //                 setIsLoading(false)
    //                 setScheme(value.data.data.scheme)
    //             })

    //     }, 1000);
    // }, [0])

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
    }, [termSingleModel])

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

    let thisScheme = Array.from(scheme).map((item) => {
        return (
            <div className="col-sm-4 mb-3" key={item.id}>
                <img src={`${basePath}${item.uri.url}`} className="img-fluid" />
                {/* <sub>{item.uri.url}</sub> */}
            </div>
        )
    })

    const { name } = termSingleModel
    console.log("Модель", termSingleModel)
    // console.log("Описание Модели", description)
    // console.log("Описание Модели", termSingleModel)
    // console.log("Название Модели", name)
    console.log("Схема Модели", scheme)
    // console.log("Краткое описание Модели", model.model_desc.value)
    // console.log(scheme[0].uri.url)

    // if (loader) {
    //     return <p className="text-center">...Идёт загрузка</p>
    // } else {
    return (
        // isLoading ? '...Loading' :
        <Fragment>
            {/* <ModelDesc
                /> */}
            <h3 className="col-sm-12 text-center">Модель {name}</h3>    
            <div className="row">
                {thisDescription}
                <hr/>
            </div>

            <div className="row">
                {thisScheme}
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
    // }
}