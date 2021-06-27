import React from 'react'
import { useInView } from 'react-intersection-observer';

const Service = (props) => {
	// const [ref, inView] = useInView({
	// 	triggerOnce: true,
	// 	threshold: 0.4,
	// })
	return (
		// <div ref={ref} className={"service " + (inView ? "move-in-from-behind" : "")}>
		<div className="service">
			<h2 className="heading-secondary">{props.title}</h2>
			<p className="service__text">{props.children}</p>
		</div>
	);
};

export default Service;