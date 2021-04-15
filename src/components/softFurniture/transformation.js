import React, { Fragment, useContext, useEffect } from 'react'
import { AlertContext } from '../../context/alert/alertContext';
import { AlertOfTransformers } from '../AlertOfTransformers';



function Transformation({ transformation }) {

	const { hideTransformers, showTransformers } = useContext(AlertContext)

	useEffect(() => {
		setTimeout(() => {
			if (transformation.length > 1) {
				//показываем алерт если в массиве с товарами по данной модели нет данных
				showTransformers(`Данный комплект мебели включает в себя ${transformation.length} вида трансформации`, 'dark')//вызов функции показывающей алерт с передачей в него значений
			} else {
				//скрываем алерт
				hideTransformers()
			}
		}, 1000);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [transformation])

	return (
		<>
			<h5>Трансформация :</h5>
			{transformation.length > 1 &&
				//  <span className="badge bg-dark text-light">Данный комплект мебели включает в себя <span class="badge bg-light">{transformation.length}</span> вида трансформации</span>
				<AlertOfTransformers alertOfTransformers={{}} />
			}
			{transformation.length > 0 ? transformation.map(item => {
				return (
					<Fragment key={item.id}>
						<p >{item.title}</p>
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
