import { Fragment, useContext, useEffect, useState } from "react"
import { ItemsByModelsOfProduct } from '../containers/itemsByModelsOfProduct'
import { ListOfTermsBlock } from "../containers/listOfTermsBlock"
import Specifications from "../containers/Specifications"
// import { AlertContext } from "../context/alert/alertContext"
import { SoftFurContext } from "../context/SoftFur/SoftFurContext"
import { TermsContext } from "../context/Terms/termsContext"
import basePath from '../utils/basePath'

export const ProdDesc = ({ match }) => {

	const urlName = match.params.id

	const { fetchData, fetchProduct, content, product, loader, productModelName, productModelId, photo, config, basePrice, transformation, filling, productModelScheme, dimensions, productModelDesc, features } = useContext(SoftFurContext)
	const { fetchTermsModel, termModels, fetchSingleModel, termSingleModel } = useContext(TermsContext)
	// const { title, price, config, img_url, img_alt, productModelName } = product//свойства из продукта

	const [mounted, setMounted] = useState(true)

	//  const urlName = productModelId
	useEffect(() => {
		setTimeout(() => {
			setMounted(false)
		}, 100);
	}, [])

	//вызов ф-ции получения конкретного продукта по urlName(uuid) из контекста SoftFurContext
	useEffect(() => {
		// let mounted = true    
		setTimeout(() => {
			// if (mounted) {
			fetchProduct(urlName)//
			// }
			// return () => {
			//   console.log('Unmounting')
			//   setMounted(false)
			// }
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, 1000);
	}, [])

	//вызов ф-ции получения всех товаров мягкой мебели из контекста SoftFurContext
	useEffect(() => {
		setTimeout(() => {
			// let mounted = true
			// if (mounted) {
			fetchData()//
			// eslint-disable-next-line react-hooks/exhaustive-deps
			// }
			// return () => {
			// mounted = false
			// }
		}, 1000);

	}, [])

	//вызов ф-ции получения списка моделей
	useEffect(() => {
		// let mounted = true
		setTimeout(() => {
			// if (mounted) {
			fetchTermsModel()
			// eslint-disable-next-line react-hooks/exhaustive-deps
			// }
		}, 1000)
		// return () => {
		//   console.log("fired from ProdDesc")
		//   // mounted = false
		// }
		// // return fetchTermsModel()
	}, [])

	//получить модель текущего товара отфильтровав массив моделей termModels
	// const currentModel = termModels.filter(model => {
	//   return model.id === product.model.id
	// })

	//отфильтровать массив content выводящий товары той-же модели что и отображаемый исключив из него текущий. Для блока товаров из той-же модели
	const currentModelItems = content.filter(callback => {//получим новый массив со значениями: исключить текущего объекта, но оставить все остальные из той-же модели
		return callback.id !== urlName && callback.model.name === productModelName
	})

	// console.log(productModelScheme)
	console.log(features)

	if (loader) {
		return <p className="text-center">...Идёт загрузка</p>
	} else {
		return (
			<Fragment>
				<div className="container mb-3">

					{/* Название */}

					<h5 className="col-sm-12 text-center" >{product.title}</h5>

					{/* Фотографии */}

					<div className="row">
						{/* {thisPhoto} */}
						{photo.length > 0 ? photo.map((item) => {
							return (
								<Fragment>
									<div className="col-sm-4 mb-3" key={item.id}>
										<img src={`${basePath}${item.uri.url}`} className="img-fluid" />
										{/* <sub>{item.uri.url}</sub> */}
									</div>
								</Fragment>
							)
						}) : <p>Фото нет</p>
						}
					</div>

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