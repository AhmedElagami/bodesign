import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import LightBox from './Lightbox';


const Portfolio = (props) => {
	const [showLightbox, setShowLightbox] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const handleOpen = i => e => {
		setShowLightbox(true);
		setSelectedImage(i);
	}

	const handleClose = () => {
		setShowLightbox(false);
		setSelectedImage(null);
	}
	const handlePrevRequest = (i, length) => e => {
		setSelectedImage((i - 1 + length) % length)
	}
	const handleNextRequest = (i, length) => e => {
		setSelectedImage((i + 1) % length)
	}

	return (
		<StaticQuery

			query={graphql`
query {
  allStrapiProject(sort: {fields: strapiId, order: DESC}) {
    nodes {
      projectName
      id
      Images {
        localFile {
          childImageSharp {
            fluid(quality: 100) {
	      ...GatsbyImageSharpFluid
	      src
            }
          }
        }
      }
    }
  }
}

`}
			render={data => {
				const { allStrapiProject: { nodes: projects } } = data;
				const images = [];
				projects.map((project) => {
					return project.Images.forEach((
						image
					) => {
						images.push(image);
					})
				})
				return (
					<div id="portfolio" className="portfolio">
						<h2 className="portfolio__heading heading-secondary">Portfólió</h2>
						<div className="portfolio__container">
							{
								images.map((image, i) => {
									return <div className="portfolio__image-container" onClick={handleOpen(i + 1)}><Img fluid={image.localFile.childImageSharp.fluid} className="portfolio__image" /></div>
								})
							}
							{showLightbox && selectedImage !== null && (<LightBox
								images={images}
								handleClose={handleClose}
								handleNextRequest={handleNextRequest}
								handlePrevRequest={handlePrevRequest}
								selectedImage={selectedImage} />)}

						</div>
						<div className="portfolio__bottom"></div>
					</div>
				)

			}} />)

};

export default Portfolio;