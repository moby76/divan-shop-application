import React from 'react'
import basePath from '../../utils/basePath'

function Scheme({ scheme }) {
    return (
        <>
          <h5>Схема</h5>
					<div className="row">
						{scheme && scheme.length > 0 ? scheme.map((item) => {
							return (
								<div className="col-sm-6 mb-3" key={item.id}>
									<img src={`${basePath}${item.uri.url}`} alt={item.filename} className="img-fluid" />
									{/* <sub>{item.uri.url}</sub> */}
								</div>
							)
						}) : <p>Схемы нет</p>
						}
					</div>  
        </>
    )
}

export default Scheme
