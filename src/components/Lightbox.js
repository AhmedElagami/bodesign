import React from "react"

import LightboxReact from "lightbox-react"
import "lightbox-react/style.css"

import Img from 'gatsby-image';
import NonStretchedImage from "./NonStretchedImage"

const Lightbox = ({
	images,
	selectedImage,
	handleClose,
	handlePrevRequest,
	handleNextRequest,
}) => {
	const array = []

	images.forEach(image =>
		array.push(<img srcset={image.localFile.childImageSharp.fluid.src} />)
	)

	return (
		<LightboxReact
			enableZoom={false}
			clickOutsideToClose={true}
			mainSrc={array[selectedImage]}
			nextSrc={array[(selectedImage + 1) % array.length]}
			prevSrc={array[(selectedImage + array.length - 1) % images.length]}
			onCloseRequest={handleClose}
			onMovePrevRequest={handlePrevRequest(selectedImage, array.length)}
			onMoveNextRequest={handleNextRequest(selectedImage, array.length)}
		/>
	)
}

export default Lightbox
