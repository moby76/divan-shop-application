import React from 'react'
import basePath from '../../utils/basePath'

function Dimensions({ dimensions }) {
    return (
        <>
           <h5>Габариты</h5>
					<div className="row">
						{dimensions && dimensions.length > 0 ?
							dimensions.map(item => (
								<div className="col-sm-12 mb-3" key={item.id}>
									<img src={`${basePath}${item.uri.url}`} className="img-fluid" />
								</div>
							)
							)
							:
							<p>Уточняйте</p>
						}
					</div>
 
        </>
    )
}

export default Dimensions
