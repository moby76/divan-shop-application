// import axios from "axios";
// import API from '../utils/api'
import React, { useContext, useEffect } from "react";
import { Card } from '../components/Card';
import { SoftFurContext } from '../context/SoftFur/SoftFurContext';

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

  useEffect(() => {
    fetchData()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <h1>Hello</h1>
      <div className="row">
        {loader ? 
        <p className="text-center">...Идёт загрузка</p> :
        content.map((val) => {
          return (
            // <h5>sfsfdsf</h5>
            <div className="col-sm-4 mb-4" key={val.id}>
              <Card
                {...val}
              />
            </div>
          )
        })
      }
      
      </div>
    </div>
  );
};

export default SoftFur;
