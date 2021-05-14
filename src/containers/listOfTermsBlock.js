//получаем массив моделей за исключением текущей и выводим их в списке/таблице
//

// import { Fragment, useContext, useEffect } from "react"
import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import { TermsTableItem } from "../components/TermsTableItem"

export const ListOfTermsBlock = ({ termModels, productModelName }) => {

  //отфильтровать массив с терминами таксономии "Модели" - исключив из него модель отображаемого товара. Для блока списка моделей
  const excludeCurrentModel = termModels.filter((callback) => {//получим новый массив со значениями: исключить текущего объекта, но оставить все остальные из той-же модели
    return callback.name !== productModelName
  })
  //получаем новый массив excludeCurrentModel --^

    return (
        <MDBContainer>
            <MDBCol sm="12" className="text-center"> <h5>Посмотреть другие модели</h5></MDBCol>
            <hr />
            <MDBRow className="table table-responsive-sm table-striped table-hover align-middle">
                {/* <tbody> */}
                    {excludeCurrentModel.map((term) => ( //извлекаем/итерируем данные из массива моделей и ложим каждый из элементов в term
                        <MDBCol sm="4" className="d-flex align-items-stretch mb-4" key={term.id}>
                            <TermsTableItem 
                                id={term.id}
                                name={term.name}
                                scheme={term.scheme}
                                // {...term}
                            />
                            </MDBCol>
                        ))
                    }

                    {/* {newTerms} */}

                {/* </tbody> */}
            </MDBRow>
        </MDBContainer>
    )
}