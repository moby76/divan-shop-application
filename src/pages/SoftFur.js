//Страница отображения всех товаров типа "мягкая мебель"


import React, { useContext, useEffect } from "react";
import { Card } from '../components/Card';
import { PaginationPage } from "../utils/navigation/paginationPage";
import { SoftFurContext } from '../context/SoftFur/SoftFurContext';
import { PaginationContext } from "../context/pagination/paginationContext";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
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
    <MDBContainer>
      <MDBCol sm="12" className="text-center"><h3>Вся Мягкая мебель</h3></MDBCol>
      <hr />
      <MDBRow>
        {loader ?
          <p className="text-center">...Идёт загрузка</p> :
          currentItems.map((val) => (
            <MDBCol sm="4" className="w-100 d-flex align-items-stretch mb-4" key={val.id}>
              <Card
                {...val}
              />
            </MDBCol>
          ))
        }
      </MDBRow>
      <PaginationPage
      // totalItems={content.length}
      // itemsPerPage={itemsPerPage}
      />
    </MDBContainer>
  );
};

export default SoftFur;
