import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutMe from '../components/AboutMe';
import WebShop from '../components/Webshop';
import ContactMe from '../components/Contact';
import Portfolio from '../components/Portfolio';

import "../styles/main.scss";

const IndexPage = ({ data }) => {
  const { strapiHomepageHeroImage: { image: homePageHero } } = data;
  const { strapiLogo: { image: logo } } = data;
  return (
    <Layout logo={logo.localFile.childImageSharp.fluid}>
      <Hero fluid={homePageHero.localFile.childImageSharp.fluid}>
        <p className="hero__text">DOLGOZZUNK EGYÜTT</p>

        <p className="hero__text">CÉGE LEGMEGFELELŐBB</p>

        <p className="hero__text">VIZUÁLIS KÉPÉNEK</p>

        <p className="hero__text">MEGALKOTÁSÁBAN!</p>
      </Hero>
      <AboutMe />
      <Services />
      <WebShop />
      <Portfolio />
      <ContactMe heading="ÁRAJÁNLAT KÉRÉS" paragraphs={[
        "Grafikai tervezés | Logótervezés | Arculattervezés | Reklámanyag tervezés | Csomagolástervezés | Honlapkészítés",
        "Érdeklődjön vagy kérjen árajánlatot grafikai tervezésre!"
      ]} showImage={true} bgBlack={false} />
    </Layout>
  );
};

export default IndexPage;

export const heroQuery = graphql`
query {
  strapiHomepageHeroImage {
    id
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