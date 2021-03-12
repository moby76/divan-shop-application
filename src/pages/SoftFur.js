// import axios from "axios";
import API from '../utils/api'
import React, { useEffect, useState } from "react";

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

// const NodeItem = ({ drupal_internal__nid, drupal_internal__fid, title, uri }) => (
//   <div>
//     <a href={`/node/${drupal_internal__fid}`}>wsrwrgwgr</a>
//     <img src={`http://api.divan-shop.loc/${uri.url}`} alt=""/>
//   </div>
// );

// const NoData = () => (
//   <div>No articles found.</div>
// );

const SoftFur = () => {
  const [content, setContent] = useState([]);
  // const [content, setContent] = useState({ values: [], rel: [] });
  // const [image, setImage] = useState([]);
  // const [filter, setFilter] = useState(null);

  // console.log(content.data)

  useEffect(() => {
    // This should point to your local Drupal instance. Alternatively, for React
    // applications embedded in a Drupal theme or module this could also be set
    // to a relative path.
    // const API_ROOT = 'http://api.divan-shop.loc/jsonapi/';
    // const urlArticle = `${API.baseUrl}`
   
    // const headers = new Headers({
    //   Accept: 'application/vnd.api+json',
    // });

    const fetchData = async () => {
      const respValues = await API.get(
        `node/article?include=field_image&fields[node--article]=id,drupal_internal__nid,title,body,field_image&sort=created&page[limit]=10`
      );
      // const respImg = await axios(
      //   `${url}?fields[node--article]=null&include=field_image&fields[file--file]=id,uri,url`, { headers }
      // )

      // setContent({ values: respValues.data.data, rel: respImg.data.included });
      setContent(respValues.data.data);
      // setImage(respImg.data.included);


    };

    fetchData();

    // fetch(url, { headers })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (isValidData(data)) {
    //       setContent(data.data)
    //     }
    //   })
    //   .catch(err => console.log('There was an error accessing the API', err));
  }, []);

  // console.log('render')

  console.log("Content", content)
  // console.log("ID", content.data.id)
  // console.log("Images", content.rel)
  // }

  // const contentMap = content.map
  // const imageMap = image.map
  // const result = [...content , ...image]
  // console.log("Result", result)
  return (
    <div>
      <h1>Hello</h1>
      <div className="row">
        {content.map((val) => {
          return (
            <div className="col-sm-4 mb-4" key={val.id}>
              <div className="card">
                <img src={`http://api.divan-shop.loc/${val.field_image.uri.url}`} alt={val.field_image.filename} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{val.title}</h5>
                  {/* <Link to={'/profile/' + user.login} className="btn btn-primary">Открыть</ Link > */}
                </div>
              </div>
            </div>
          )
        })}

      </div>

    </div>
  );
};

export default SoftFur;
