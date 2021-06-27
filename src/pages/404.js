import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import "../styles/main.scss";

const NotFound = (data) => {
	const { strapiLogo: { image: logo } } = data.data;
	return (
		<Layout logo={logo.localFile.childImageSharp.fluid}>
			<div className="FourOhFour">
				<div className="bg" style={{ backgroundImage: 'url(' + 'http://i.giphy.com/l117HrgEinjIA.gif' + ')' }}></div>
				<div className="code">404</div>
			</div>
		</Layout>
	);
}

export default NotFound;

export const heroQuery = graphql`
query {
  strapiLogo {
    image {
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


`;