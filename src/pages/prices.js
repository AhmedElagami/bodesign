import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ContactMe from '../components/Contact';
import Prices from '../components/Prices';

import "../styles/main.scss";

const PricesPage = ({ data }) => {
	const { strapiPricesHeroImage: { Image: pricesPageHero } } = data;
	console.log(data);
	return (
		<Layout>
			<Hero fluid={pricesPageHero.localFile.childImageSharp.fluid}>
				<h2 className="heading-secondary heading--hero">ÁRAK</h2>
			</Hero>
			<Prices />
			<ContactMe heading="" paragraphs={[
				"Érdeklődjön vagy kérjen árajánlatot grafikai tervezésre!"
			]} showImage={false} bgBlack={true} />
		</Layout>
	);
};

export default PricesPage;

export const heroQuery = graphql`
query {
  strapiPricesHeroImage {
    Image {
      localFile {
        childImageSharp {
          fluid {

          ...GatsbyImageSharpFluid}
        }
      }
    }
  }
}

`;