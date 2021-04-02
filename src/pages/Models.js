import { Fragment, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { ModeIsItem } from "../components/ModeIsItem"
import { TermsContext } from "../context/Terms/termsContext"
import basePath from '../utils/basePath'

export const Models = () => {

    const { fetchTermsModel, termModels, loader } = useContext(TermsContext)

    //вызов ф-ции получения  списка моделей - массива
    useEffect(() => {
        setTimeout(() => {
            fetchTermsModel()
            // eslint-disable-next-line react-hooks/exhaustive-deps   
            console.log('i fire from Models useEffect')
        }, 1000);
    }, [])

    console.log("Массив моделей :", termModels)

    return (
        <div className="container-fluid">
            <div className="col-sm-12 text-center"> <h3>Модели</h3> </div>
            <hr />
            {loader ?
                <p className="text-center">...Идёт загрузка</p> :                
                    termModels.map((model) => {//получить объекты из массива termModels
                        return (//вернуть содержимое массива в виде разметки
                            <Fragment>
                                <div className="row mb-4">
                                    <ModeIsItem key={model.id}
                                        {...model}
                                    />
                                </div>

                                <hr />
                            </Fragment>
                        )
                    })
                }
        </div>

    )
}