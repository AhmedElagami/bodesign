import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
const query = graphql`
query {
  allStrapiAbout {
    edges {
      node {
        introduction
        Information {
	  value
	  id
        }
        Photo {
          localFile {
            childImageSharp {
              fluid {
		...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}

`;
const AboutMe = () => {
	const { allStrapiAbout: { edges } } = useStaticQuery(query);
	const [node] = edges;
	const { node: { introduction, Information, Photo: image } } = node;
	return (
		<div id="rolam" className="about-me">
			<h2 className="heading-primary about-me__heading">Rólam</h2>
			<Img fluid={image[0].localFile.childImageSharp.fluid} className="about-me__image" alt="About Me" />
			<p className="about-me__text about-me__name">{introduction}
			</p>
			{
				Information.map((data) => {
					return <p className="about-me__text" key={data.id}>{data.value}</p>
				})
			}

		</div>
	);
};

export default AboutMe;