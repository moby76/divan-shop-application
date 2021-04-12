import React from 'react'

function Description({ modelDesc, modelName }) {
    return (
        <>
            <h5>описание модели {modelName}</h5>
            <div className="row">
                {modelDesc.split('\n').map((item, i) => {
                    return <p className="mb-1" key={i}>{item}</p>
                })}
            </div>
        </>
    )
}

export default Description
