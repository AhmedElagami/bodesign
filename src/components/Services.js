import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Service from '../components/Service';

const query = graphql`
query MyQuery {
  allStrapiService {
    nodes {
      Description
      title
      id
    }
  }
}
`;
const Services = (props) => {
	const data = useStaticQuery(query);
	const { allStrapiService: { nodes: services } } = data;
	return (<div id="szolgaltatasok" className="services">
		<div className="services__heading">
			<h2 className="heading-primary">SZOLGÁLTATÁSOK</h2>
		</div>
		<div className="services__container">
			{
				services.map((service) => {
					return <Service title={service.title}>{service.Description}</Service>
				})
			}
		</div>
		<a className="services__button btn-secondary" href="/prices" >Árak</a>
	</div >
	);
};

export default Services;