import { Link } from "react-router-dom";
import basePath from '../utils/basePath'
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
import { useContext } from "react";
import { Card } from "../components/Card";
import { PaginationBlock } from "../components/navigation/paginationBlock";

const ItemsByModels = ({ urlName }) => {

    // const { fetchData, content,  fetchProduct, product, loader } = useContext(SoftFurContext)
    const { content, product, loader, currentBlock, itemsPerBlock } = useContext(SoftFurContext)

    const { model } = product

    const current = content.filter(callback => {
            return callback.id !== urlName && callback.model.name === model  
    })

    const indexofLastItems = currentBlock * itemsPerBlock
    const indexOfFirstItems = indexofLastItems - itemsPerBlock
    const currentItems = current.slice(indexOfFirstItems, indexofLastItems)

    console.log("Из той-же модели : ", current)   
    
    return (
        <div className="container">
            <div className="col-sm-12 text-center"> <h3>Другие товары модели {model}</h3> </div>
            <hr />
            <div className="row">
                {(loader) ?//если loader = true, то:  
                    <p className="text-center">...Идёт загрузка</p> : //иначе:
                    (current.length == 0) ? //если массив пустой(длина массива = 0 ), то:
                    <p className="text-center"><h3>К сожалению ничего не найдено</h3></p> ://иначе:
                    currentItems.map((val) => {                       
                        return (
                            //переделать на карточки:
                            <div className="col-sm-4 mb-4" key={val.id}>
                                <Card
                                    {...val}
                                />                                
                            </div>
                        )
                    })
                }
            </div>
            <PaginationBlock
                urlName={urlName}
                current={current}
            />
        </div>
    )}





export default ItemsByModels