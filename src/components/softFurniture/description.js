import React from 'react'
import { Link } from 'react-router-dom'

function Description({ modelDesc, modelName, id }) {
    return (
        // <>
            <div className="container">
                <h5>описание модели <Link to={`/models/${id}`} target="_blank" className="text-info" >{modelName}</Link></h5>

                {modelDesc.split('\n').map((item, i) => {
                    return <p className="mb-1" key={i}>{item}</p>
                })}
            </div>
        // </>
    )
}

export default Description
