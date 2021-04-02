//Блок подгружаемый на странице товара. Показывает товары из той-же модели что и выведенный на экран
//Инкапсулируется в компонент/страницу описания товара ProdDesc

import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
import { useContext, useEffect } from "react";
import { Card } from "../components/Card";
import { PaginationBlock } from "../components/navigation/paginationBlock";
import { AlertContext } from "../context/alert/alertContext";
import { Alert } from "../components/Alert";

export const ItemsByModels = ({ urlName, productModelName, product }) => {

    const { currentBlock, itemsPerBlock, loader, content } = useContext(SoftFurContext)//объекты из контекста Мягкой мебели
    const { hide, show } = useContext(AlertContext)//получение функции для скрытия Алерта из контекста 
    
    //отфильтровать массив content выводящий товары той-же модели что и отображаемый исключив из него текущий. Для блока товаров из той-же модели
    const currentModelItems = content.filter(callback => {//получим новый массив со значениями: исключить текущего объекта, но оставить все остальные из той-же модели
        return callback.id !== urlName && callback.model.name === productModelName
    })
    //получаем массив current --^

    //запуск функции для показа или скрытия алерта
    useEffect(() => {setTimeout(() => {
               if (currentModelItems.length === 0) {
            //показываем алерт если в массиве с товарами по данной модели нет данных
            show(`Модель ${productModelName} представлена только одним товаром`, 'info')//вызов функции показывающей алерт с передачей в него значений
        } else {
            //скрываем алерт
            hide()
        }
    }, 3500);
 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product])

    //Вычисление первого и последнего элемента списка для вычисления текущего для пагинации
    const indexofLastItems = currentBlock * itemsPerBlock
    const indexOfFirstItems = indexofLastItems - itemsPerBlock
    //вычисление текущих отображаемых элементов массива для пагинации
    const currentItems = currentModelItems.slice(indexOfFirstItems, indexofLastItems)

    // console.log("Из той-же модели : ", current)

    return (
        <div className="container">
            <div className="col-sm-12 text-center"> <h3>Другие товары модели {productModelName}</h3> </div>
            <hr />
            {(currentModelItems.length === 0) ? //при пустом изначальном(общем) массиве 
                <Alert alert={{}} /> : //отображаем алерт, а иначе - отображаем карточки товаров по этой модели
                <div className="row">
                    {
                    // (loader) ?//если loader = true, то:  
                    //     <p className="text-center">...Идёт загрузка</p> : //иначе:            
                         <>
                            {currentItems.map((val) => {//итерация отображаемых на странице элементов массива с предачей их значений в карточки
                                return (
                                    <div className="col-sm-4 mb-4" key={val.id}>
                                        {/* карточка товара */}
                                        <Card
                                            {...val}
                                        />
                                    </div>
                                )
                            })}
                        </>
                    }
                </div>
            }
            {/* Блок с пагинацией */}
            <PaginationBlock
                urlName={urlName}
                current={currentModelItems}
            />
        </div>
    )
}
// export default ItemsByModels