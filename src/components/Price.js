import React from 'react'
import Description from './description';

const Price = (props) => {

	return (<div className="price">
		<h2 className="heading-primary price__title">{props.title}</h2>
		<h2 className="heading-primary price__value">{props.price} Ft<span>-Tól</span></h2>
		{
			props.info.map(({ id, Title: title, description: descArray }) => {

				return (
					<div key={id} className="price__info">
						<Description title={title} descArray={descArray} />
					</div>
				)
			})

		}
	</div>)
}


export default Price;