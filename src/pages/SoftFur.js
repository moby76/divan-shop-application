// import axios from "axios";
// import API from '../utils/api'
import React, { useContext } from "react";
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

  const { content } = useContext(SoftFurContext)

  // useEffect(() =>{ 
  //   const { content } = useContext(SoftFurContext)
  //   content
  // }  
  // ,[])

  // useEffect(() => {

  //   const fetchData = async () => {
  //     const respValues = await API.get(
  //       `node/soft_fur?include=field_photo,field_soft_config&sort=created&page[limit]=10`
  //     );

  //     setContent(respValues.data.data);
  //     // setImage(respImg.data.included)
  //   }
  //   fetchData();
  //   //   .catch(err => console.log('There was an error accessing the API', err));
  // }, [])

  console.log("Content", content)

  return (
    <div>
      <h1>Hello</h1>
      <div className="row">
        {content.map((val) => {
          return (
            // <h5>sfsfdsf</h5>
            <div className="col-sm-4 mb-4" key={val.id}>
              <Card
                val={val}
              />
            </div>
          )
        })}

      </div>

    </div>
  );
};

export default SoftFur;
