import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

import Price from './Price';

const query = graphql`
query {
  allStrapiPrice {
    nodes {
      Price
      Title
      id
      Info {
        Title
        description {
          description
          id
        }
        id
      }
    }
  }
}

`;
const Prices = () => {
	const data = useStaticQuery(query);
	const { allStrapiPrice: { nodes } } = data;
	return (
		<div className="prices">
			<p className="prices__paragraph">
				Az feltüntetett árak tájékoztató jellegűek. Kérjen egyedi árajánlatot a pontos kalkulációért.
			</p>
			<div className="prices__container">
				{nodes.map(({ Price: price, Title: title, id, Info: info }) => {
					return (
						<Price key={id} price={price} title={title} info={info} />
					)
				}
				)}</div>
			<p className="prices__paragraph">
				A feltüntetett árak bruttó árak.
			</p>

			<div className="prices__endShape"></div>

		</div>
	);
}

export default Prices;