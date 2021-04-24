// import axios from "axios";
// import API from '../utils/api'
import React, { useContext, useEffect } from "react";
import { Card } from '../components/Card';
import { PaginationPage } from "../utils/navigation/paginationPage";
import { SoftFurContext } from '../context/SoftFur/SoftFurContext';
import { PaginationContext } from "../context/pagination/paginationContext";
// import { PaginationContext } from "../context/pagination/paginationContext";

// function isValidData(data) {
//   if (data === null) {
//     return false;
//   }
//   if (data.data === undefined ||
//     data.data === null ||
//     data.data.length === 0) {
//     return false;
//   }
//   return true;
// }

// const NoData = () => (
//   <div>No articles found.</div>
// );

export const SoftFur = () => {
  // const [content, setContent] = useState([]);

  const { fetchData, content, loader } = useContext(SoftFurContext)
  const { currentPage, itemsPerPage } = useContext(PaginationContext)

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  //Вычисление значений для интервала отображаемых элементов на странице. Для пагинации
  const indexofLastItems = currentPage * itemsPerPage
  const indexOfFirstItems = indexofLastItems - itemsPerPage
  // Создание нового массива на основе полученного, в который будет попадать только значения из интервала
  const currentItems = content.slice(indexOfFirstItems, indexofLastItems)
  // console.log(content)

  return (
    <div>
      <h1>Вся Мягкая мебель</h1>
      <div className="row">
        {loader ?
          <p className="text-center">...Идёт загрузка</p> :
          currentItems.map((val) => {
            return(
              
              <div className="col-sm-4 mb-4" key={val.id}>
                <Card
                  {...val}
                />
              </div>
            )
          })
        }           
      </div>
      <PaginationPage
        // totalItems={content.length}
        // itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default SoftFur;
