import React, { useState } from 'react'
import Markdown from 'react-markdown';

const Description = ({ title, descArray }) => {

	const [show, setShow] = useState(false);
	return (
		<div><button className={"price__button " + (!show ? " price__button--bg" : "")} data-icon={(show ? "-" : "+")} onClick={() => {
			setShow(prevShow => !prevShow)
		}}>{title}</button>
			<div className={"price__desc-container " + (show ? " price__desc-container--shown" : "")}>
				{
					descArray.map(({ id, description }, i) => {
						return (
							<div key={"div" + id} className="price__desc">
								<Markdown children={description} escapeHTML={false}></Markdown>
								{i !== descArray.length - 1 ? <img className="price__line" alt="" src="/assets/black_border.png" /> : null}
							</div>
						);
					})

				}
			</div>
		</div>);
};

export default Description;