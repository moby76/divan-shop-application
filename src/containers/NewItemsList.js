//контейнер с новинками. Загружается на главной странице

import { useContext, useEffect } from "react"
// import { SRLWrapper } from "simple-react-lightbox"
import { NewItem } from "../components/NewItem"
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"

export const NewItemsList = () => {

    const { fetchNewItems, newitems } = useContext(SoftFurContext)

    useEffect(() => {
        fetchNewItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="container rounded bg-light pb-1 mb-3">
            {/* <div className="col-sm-12 p-3"> */}
                <button class="btn btn-outline-dark dropdown-toggle collapsed mb-3 mt-3" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Посмотреть новые поступления
                </button>
            {/* </div> */}
            <div class="collapse" id="collapseExample">
                <div className="container">
                    {newitems.map((val) => {
                        return (
                            <>
                            <div className="row mb-4" key={val.id}>
                                <NewItem
                                    {...val}
                                />
                            </div>
                            <hr/>
                            </>
                        )
                    })}
                </div>
                <button class="btn btn-outline-dark mb-3 mt-3" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Закрыть
                </button> 
            </div>

            {/* <div className="col-sm-12 text-center"> <h3>Последние поступления</h3> </div>
            <hr /> */}
           

        </div>
    )
}