import React from 'react'

function Features({ features }) {
    return (
        <>
            <h5>Особенности товара</h5>
            <div className="row">
                {features ?
                    features.value.replace(/(<([^>]+)>)/ig, "").split('\n').map((item, i) => {
                        return <p className="mb-1" key={i}>{item}</p>
                    })
                    :
                    <p>Данный товар не имеет отличительных особенностей от базовой модели</p>
                }
            </div>
        </>
    )
}

export default Features
