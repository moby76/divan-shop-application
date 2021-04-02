import { Link } from "react-router-dom"

export const TermsTableItem = ({ id, name}) => {

    // if(scheme.length !== 0){
    //    console.log("scheme",scheme[0].type) 
    // }

    // console.log("scheme :", scheme)
    // console.log("type of scheme :", typeof(scheme))
    // const isArr = Array.isArray(scheme)
    // console.log("scheme :", isArr)
    // console.log(Object.prototype.toString.call(scheme))

    // const jsonobj = JSON.parse(scheme)
    // console.log(jsonobj)

    // try { 
    //     console.log("scheme",scheme[0].uri.url)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // for(let i =0; i< scheme.length; i++ ){
    //     return scheme[0]
    // }

    // for (i = 0; i < myObj.cars.length; i++) {
    //     x += myObj.cars[i];
    // } 

    return (
        <>
            <tr >
                <td>
                    <Link to={`/models/${id}`} target="_blank" className="text-light" >
                        {name}
                    </Link>
                </td>
                <td>

                </td>
            </tr>
        </>
    )
}