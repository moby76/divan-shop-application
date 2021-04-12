import React from 'react'

function Filling({ filling }) {
    return (
        <>
            {filling.length > 0 ?
                <>
                    <h5>Основной вариант наполнения основания :</h5>
                    {filling.map(item => (
                        <p key={item.id}>{item.name}</p>
                    ))}
                </> :
                <p>{null}</p>}
        </>
    )
}

export default Filling
