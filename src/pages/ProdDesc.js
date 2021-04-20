//Страница описания товара

import { Fragment, useContext, useEffect } from "react"
import { SRLWrapper } from "simple-react-lightbox"
import { ItemsByModelsOfProduct } from '../containers/itemsByModelsOfProduct'
import { ListOfTermsBlock } from "../containers/listOfTermsBlock"
import Specifications from "../containers/Specifications"
// import { AlertContext } from "../context/alert/alertContext"
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
import { TermsContext } from "../context/Terms/termsContext"
import basePath from '../utils/basePath'

export const ProdDesc = ({ match }) => {

	const urlName = match.params.id

	const { fetchData, fetchProduct, content, product, loader, productModelName, productModelId, photo, config, transformation, filling, productModelScheme, dimensions, productModelDesc, features } = useContext(SoftFurContext)
	const { fetchTermsModel, termModels } = useContext(TermsContext)
	// const { title, price, config, img_url, img_alt, productModelName } = product//свойства из продукта

	        //Опции для Лайтбокса
			  const options = {
            settings: {
                overlayColor: "rgb(15 15 15 / 95%)",
                disableKeyboardControls: false,
                disableWheelControls: true,
                autoplaySpeed: 1500,
                transitionSpeed: 100,
            },
            buttons: {
                // backgroundColor: "#1b5245",
                // iconColor: "rgba(126, 172, 139, 0.8)",
                showDownloadButton: false,
                showNextButton: true,
                showPrevButton: true,
                showThumbnailsButton: false,
                showAutoplayButton: true,
            },
            caption: {
                showCaption: false,
            }, 
            thumbnails: {
                showThumbnails: true
            }
        }

	//вызов ф-ции получения конкретного продукта по urlName(uuid) из контекста SoftFurContext
	useEffect(() => {

		setTimeout(() => {

			fetchProduct(urlName)//

			console.log('useEffect 1 (fetchProduct)')
		}, 1000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	//вызов ф-ции получения всех товаров мягкой мебели из контекста SoftFurContext
	useEffect(() => {
		setTimeout(() => {

			fetchData()//

			console.log('useEffect 2 (fetchData)')
		}, 1500);
		// eslint-disable-next-line
	}, [])

	//вызов ф-ции получения списка моделей
	useEffect(() => {
		// let mounted = true
		setTimeout(() => {

			fetchTermsModel()			

			console.log('useEffect 3 (fetchTermsModel)')
		}, 2500)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	//отфильтровать массив content выводящий товары той-же модели что и отображаемый исключив из него текущий. Для блока товаров из той-же модели
	const currentModelItems = content.filter(callback => {//получим новый массив со значениями: исключить текущего объекта, но оставить все остальные из той-же модели
		return callback.id !== urlName && callback.model.name === productModelName
	})


	if (loader) {
		return <p className="text-center">...Идёт загрузка</p>
	} else {
		return (
			<Fragment>
				<div className="container mb-3">

					{/* Название */}

					<h5 className="col-sm-12 text-center" >{product.title}</h5>

					{/* Фотографии */}


					{/* {thisPhoto} */}
					{photo.length > 0 ?
						<SRLWrapper options={options}>
							<div className="row">
								{photo.map((item) => {
									return (
										<Fragment key={item.id}>
											<div className="col-sm-4 mb-3" >
												<a href={`${basePath}${item.uri.url}`} alt={item.filename}>
													<img src={`${basePath}${item.uri.url}`} alt={item.filename} className="img-fluid" />
												</a>
											</div>
										</Fragment>
									)
								})}
							</div>
						</SRLWrapper>

						: <p>Фото нет</p>
					}


					{/* Цена */}

					<h5>{product.price_base}</h5>

					{/* Наличие */}

					<p>Наличие: {product.available ? <span>В наличии</span> : <span>Отсутствует</span>}</p>

					<Specifications
						config={config}
						transformation={transformation}
						filling={filling}
						productModelScheme={productModelScheme}
						dimensions={dimensions}
						productModelDesc={productModelDesc}
						features={features}
						productModelId={productModelId}
						productModelName={productModelName}
						available={product.available}
					/>

				</div>

				<ItemsByModelsOfProduct // компонент в котором Подгружаем список товаров по модели текущего товара
					urlName={urlName}//передача uuid товара в блок отображения других товаров из той-же модели
					currentModelItems={currentModelItems}
					// content={content}
					productModelName={productModelName}
				// content={content}
				/>

				<ListOfTermsBlock // компонент - список моделей
					termModels={termModels}//передача массива терминов "Модели мягкой мебели" в блок со списком/таблицей моделей
					productModelName={productModelName}
				/>

			</Fragment>
		)
	}
}