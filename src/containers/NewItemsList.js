import { useContext, useEffect } from "react"
import { NewItem } from "../components/NewItem"
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"

export const NewItemsList = () => {

    const { fetchNewItems, newitems, loader } = useContext(SoftFurContext)

    useEffect(() => {
        fetchNewItems()
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <div className="row">
            Новинки
            {loader ? 
        <p className="text-center">...Идёт загрузка</p> :
        newitems.map((val) => {
          return (
            // <h5>sfsfdsf</h5>
            <div className="col-sm-4 mb-4" key={val.id}>
              <NewItem 
                {...val}
            />
            </div>
          )
        })
      }
            
        </div>
    )
}