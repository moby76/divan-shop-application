import React, { Fragment } from 'react'

function Transformation({ transformation }) {
    return (
        <>
            <h5>Трансформация :</h5>
						{transformation.length > 0 ? transformation.map(item => {
							return (
								<Fragment >
									<p key={item.id}>{item.name}</p>
									<hr />
								</Fragment>
							)
						}) :
							<Fragment>
								<p>Без трансформации</p>
								<hr />
							</Fragment>
						}
        </>
    )
}

export default Transformation
