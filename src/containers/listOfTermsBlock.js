//получаем массив моделей за исключением текущей и выводим их в списке/таблице

// import { Fragment, useContext, useEffect } from "react"
import { TermsTableItem } from "../components/TermsTableItem"

export const ListOfTermsBlock = ({ termModels, productModelName }) => {

  //отфильтровать массив с терминами таксономии "Модели" - исключив из него модель отображаемого товара. Для блока списка моделей
  const excludeCurrentModel = termModels.filter((callback) => {//получим новый массив со значениями: исключить текущего объекта, но оставить все остальные из той-же модели
    return callback.name !== productModelName
  })
  //получаем новый массив excludeCurrentModel --^

    return (
        <div>
            <div className="col-sm-12 text-center"> <h5>Посмотреть другие модели</h5></div>
            <hr />
            <table className="table table-responsive-sm table-striped table-dark">
                <tbody>
                    {excludeCurrentModel.map((term) => { //извлекаем/итерируем данные из массива моделей и ложим каждый из элементов в term
                        // console.log(term['scheme'][0])                            
                        return (
                            <TermsTableItem key={term.id}
                                id={term.id}
                                name={term.name}
                                scheme={term.scheme}
                                // {...term}
                            />
                        )
                    }
                    )

                    }

                    {/* {newTerms} */}

                </tbody>
            </table>
        </div>
    )
}