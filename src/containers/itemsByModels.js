//Блок подгружаемый на странице товара. Показывает товары из той-же модели что и выведенный на экран
//Инкапсулируется в компонент/страницу описания товара ProdDesc

import { Link } from "react-router-dom";
import basePath from '../utils/basePath'
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
import { useContext, useEffect } from "react";
import { Card } from "../components/Card";
import { PaginationBlock } from "../components/navigation/paginationBlock";
import { AlertContext } from "../context/alert/alertContext";
import { Alert } from "../components/Alert";

export const ItemsByModels = ({ urlName }) => {

    const { content, product, loader, currentBlock, itemsPerBlock } = useContext(SoftFurContext)//объекты из контекста Мягкой мебели
    const { hide, show } = useContext(AlertContext)//получение функции для скрытия Алерта из контекста 

    const { productModelName } = product//имя модели полученное из объекта product

    //отфильтровать массив content выводящий товары той-же модели что и отображаемый исключив из него текущий
    const current = content.filter(callback => {//получим новый массив со значениями: исключить текущего объекта, но оставить все остальные из той-же модели
        return callback.id !== urlName && callback.model.name === productModelName
    })

    //запуск функции для показа или скрытия алерта
    useEffect(() => {
        if (current.length == 0) {
            //скрываем алерт
            show(`Модель ${productModelName} представлена только одним товаром`, 'info')
        } else {
            hide()
        }
    }, [])
     
    //Вычисление первого и последнего элемента списка для вучисления текущего для пагинации
    const indexofLastItems = currentBlock * itemsPerBlock
    const indexOfFirstItems = indexofLastItems - itemsPerBlock
    const currentItems = current.slice(indexOfFirstItems, indexofLastItems)

    // console.log("Из той-же модели : ", current)

    return (
        <div className="container">
            <div className="col-sm-12 text-center"> <h3>Другие товары модели {productModelName}</h3> </div>
            <hr />
            <Alert alert={{ text: 'Test Alert' }} />
            <div className="row">
                {(loader) ?//если loader = true, то:  
                    <p className="text-center">...Идёт загрузка</p> : //иначе:            
                        <>  
                        {currentItems.map((val) => {
                            return (
                                <div className="col-sm-4 mb-4" key={val.id}>
                                    <Card
                                        {...val}
                                    />
                                </div>
                            )
                        })}
                        </>
                }
            </div>
            <PaginationBlock
                urlName={urlName}
                current={current}
            />
        </div>
    )
}
// export default ItemsByModels