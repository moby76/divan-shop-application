//Контейнер со списком моделей - подгружается на странице Модели
//Инкапсулирован в: <Models>

import { Fragment, useContext, useEffect } from "react"
// import { Link } from "react-router-dom"
import { ModeIsItem } from "../components/ModeIsItem"
// import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
import { TermsContext } from "../context/Terms/termsContext"
// import basePath from '../utils/basePath'

export const ModelsContainer = () => {

    const { fetchTermsModel, termModels, loader } = useContext(TermsContext)
    // const { content } = useContext(SoftFurContext)

    //вызов ф-ции получения списка моделей - массива
    useEffect(() => {
        setTimeout(() => {
            fetchTermsModel()
            // eslint-disable-next-line react-hooks/exhaustive-deps   
            console.log('i fire from Models useEffect')
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])



    // console.log("Массив моделей :", termModels)

    return (
        <div className="container-fluid">
            <div className="col-sm-12 text-center"> <h3>Модели</h3> </div>
            <hr />
            {loader ?
                <p className="text-center">...Идёт загрузка</p> :
                termModels.map((model) => {//получить объекты из массива termModels
                    return (//вернуть содержимое массива в виде разметки
                        <Fragment key={model.id}>
                            <div className="row mb-4">
                                <ModeIsItem
                                    {...model}
                                />
                            </div>                           
                        </Fragment>
                    )
                })
            }
        </div>

    )
}