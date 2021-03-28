import { Fragment, useContext, useEffect } from "react"
import { NewItem } from "../components/NewItem"
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"

export const NewItemsList = () => {

    const { fetchNewItems, newitems, loader } = useContext(SoftFurContext)

    useEffect(() => {
        fetchNewItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="container-fluid">
            <div className="col-sm-12 text-center"> <h3>Новинки</h3> </div>
            <hr/>
            {loader ?
                <p className="text-center">...Идёт загрузка</p> :
                newitems.map((val) => {
                    return (
                        <Fragment>                            
                            <div className="row mb-4" key={val.id}>
                                <NewItem
                                    {...val}
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