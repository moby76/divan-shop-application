//контейнер с новинками. Загружается на главной странице

import { MDBBtn, MDBCollapse, MDBContainer, MDBIcon } from "mdbreact"
import { useContext, useEffect, useState } from "react"
// import { SRLWrapper } from "simple-react-lightbox"
import { NewItem } from "../components/NewItem"
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"

export const NewItemsList = () => {

    const { fetchNewItems, newitems } = useContext(SoftFurContext)

    const [toggle, setToggle] = useState(false)
        
    //Активируем получение массива newitems
    useEffect(() => {
        fetchNewItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        // <div className="container-fluid text-center rounded bg-light pb-1 mb-3">
        <MDBContainer className="bg-light mb-3 py-2">
            {/* <div className="col-sm-12 p-3"> */}
            {/* <button class="btn btn-outline-danger dropdown-toggle collapsed mb-3 mt-3" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> */}

            {/* <MDBBtn color="purple">Посмотреть новые поступления</MDBBtn> */}
            <>
                <MDBBtn 
                color="purple"
                // onClick={toggleCollapse("basicCollapse")}
                onClick={() => setToggle(!toggle)}//переключаем на противоположное значение
                // style={{ marginBottom: "1rem" }}
                className="mb-3"
                >
                <MDBIcon icon="magic" className="mr-1" />
                Посмотреть новые поступления
                </MDBBtn>

            </>

            {/* </button> */}
            {/* </div> */}
            <MDBCollapse id="basicCollapse" isOpen={toggle}>
            {/* <div class="collapse" id="collapseExample"> */}
                <div className="container">
                    {newitems.map((val) => {
                        return (
                            <>
                                <div className="row mb-4" key={val.id}>
                                    <NewItem
                                        {...val}
                                    />
                                </div>
                                <hr />
                            </>
                        )
                    })}
                </div>
                <>
                <MDBBtn 
                color="default"
                // onClick={toggleCollapse("basicCollapse")}
                onClick={() => setToggle(!toggle)}//переключаем на противоположное значение
                style={{ marginBottom: "1rem" }}
                >
                <MDBIcon icon="magic" className="mr-1" />
                Свернуть
                </MDBBtn>

            </>
            {/* </div> */}
            </MDBCollapse>

            {/* <div className="col-sm-12 text-center"> <h3>Последние поступления</h3> </div>
            <hr /> */}
        </MDBContainer>

        // </div>
    )
}