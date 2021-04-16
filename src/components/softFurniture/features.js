import React from 'react'

function Features({ features }) {
    return (
        <>
            
            <div className="container">
            <h5>Особенности товара</h5>
                {features ?
                    features.value.replace(/&nbsp;/g, '\u00A0\u00A0\u00A0\u00A0').replace(/(<([^>]+)>)/ig, "").split('\n').map((item, i) => {
                        return (
                            <>
                                <p className="mb-1" key={i}>{item}</p>                               
                            </>
                        )
                    })
                    :
                    <p>Данный товар не имеет отличительных особенностей от базовой модели</p>
                }
            </div>
        </>
    )
}

export default Features
