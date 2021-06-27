import React from 'react';
import Img from 'gatsby-image';

const Hero = (props) => {

	return (
		<div id="home" className="hero">
			<Img className="hero__image" fluid={props.fluid} alt="Hero Logo" />
			{props.children}
		</div>
	);
};

export default Hero;