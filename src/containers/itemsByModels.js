//Блок подгружаемый на странице товара. Показывает товары из той-же модели что и выведенный на экран
//Инкапсулируется в компонент/страницу описания товара ProdDesc

import { useContext, useEffect } from "react";

import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
//import { PaginationContext } from "../context/pagination/paginationContext";
import { AlertContext } from "../context/alert/alertContext";

import { Alert } from "../components/Alert";
import { Card } from "../components/Card";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
//import { PaginationBlock } from "../utils/navigation/paginationBlock";

export const ItemsByModels = ({ urlName, termName, term }) => {

    const { content } = useContext(SoftFurContext)//объекты из контекста Мягкой мебели
    // const { currentBlock, itemsPerBlock } = useContext(PaginationContext)//объекты из контекста Пагинации
    const { hide, show } = useContext(AlertContext)//получение функции для скрытия Алерта из контекста 

    //отфильтровать массив content выводящий товары той-же модели что и отображаемый
    const currentModelItems = content.filter(callback => {//получим новый массив со значениями: исключить текущего объекта, но оставить все остальные из той-же модели
        return callback.model.name === termName
    })
    //получаем массив current --^

    //запуск функции для показа или скрытия алерта
    useEffect(() => {
        setTimeout(() => {
            if (currentModelItems.length === 0) {
                //показываем алерт если в массиве с товарами по данной модели нет данных
                show(`Модель ${termName} представлена только одним товаром`, 'info')//вызов функции показывающей алерт с передачей в него значений
            } else {
                //скрываем алерт
                hide()
            }
        }, 3500);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [term])

    // // Вычисление первого и последнего элемента списка для вычисления текущего для пагинации
    // const indexofLastItems = currentBlock * itemsPerBlock
    // const indexOfFirstItems = indexofLastItems - itemsPerBlock
    // // Создание нового массива на основе полученного, в который будет попадать только значения из интервала 
    // const currentItems = currentModelItems.slice(indexOfFirstItems, indexofLastItems)

    // console.log("Массив товаров", content)
    // console.log("Из той-же модели : ", current)

    return (
        <MDBContainer>
            <MDBCol sm="12" className="text-center"> <h5>Все товары модели {termName}</h5> </MDBCol>
            <hr />
            {(currentModelItems.length === 0) ? //при пустом изначальном(общем) массиве 
                <Alert alert={{}} /> : //отображаем алерт, а иначе - отображаем карточки товаров по этой модели
                <MDBRow>
                    {
                        // (loader) ?//если loader = true, то:  
                        //     <p className="text-center">...Идёт загрузка</p> : //иначе:            
                        <>
                            {currentModelItems.map((val) => {//итерация отображаемых на странице элементов массива с предачей их значений в карточки
                                return (
                                    <MDBCol sm="4" className="w-100 d-flex align-items-stretch mb-4" key={val.id}>
                                        {/* карточка товара */}
                                        <Card
                                            {...val}
                                        />
                                    </MDBCol>
                                )
                            })}
                        </>
                    }
                </MDBRow>
            }
            {/* Блок с пагинацией */}
            {/* <PaginationBlock
                urlName={urlName}
                array={currentModelItems}//Передача массива в компонент/утилиту PaginationBlock для пагинации блоков
            /> */}
        </MDBContainer>
    )
}
// export default ItemsByModelsOfProduct