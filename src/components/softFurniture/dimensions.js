import React from 'react'
// import { SRLWrapper } from 'simple-react-lightbox'
import basePath from '../../utils/basePath'

function Dimensions({ dimensions }) {

	//Опции для Лайтбокса
	// const options = {
	// 	settings: {
	// 		overlayColor: "rgb(255 255 255 / 95%)",
	// 		disableKeyboardControls: false,
	// 		disableWheelControls: true,
	// 		autoplaySpeed: 1500,
	// 		transitionSpeed: 300,
	// 	},
	// 	buttons: {
	// 		// backgroundColor: "#1b5245",
	// 		// iconColor: "rgba(126, 172, 139, 0.8)",
	// 		showDownloadButton: false,
	// 		showNextButton: false,
	// 		showPrevButton: false,
	// 		showThumbnailsButton: false,
	// 		showAutoplayButton: true,
	// 	},
	// 	caption: {
	// 		showCaption: false,
	// 	},
	// 	thumbnails: {
	// 		showThumbnails: false
	// 	}
	// }

	return (
		<>
			{/* <h5>Габариты</h5> */}
			<div className="row">
				{dimensions && dimensions.length > 0 ?					
						dimensions.map(item => (
							<div className="col-sm-6 mb-3" key={item.id}>
								{/* <SRLWrapper > */}
									<a href={`${basePath}${item.uri.url}`}>
										<img src={`${basePath}${item.uri.url}`} alt={item.filename} className="img-fluid" />
									</a>
								{/* </SRLWrapper> */}
							</div>

						))
					:
					<p>Уточняйте</p>
				}
			</div>

		</>
	)
}

export default Dimensions
