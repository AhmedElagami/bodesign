// import React from "react"
// import { StaticQuery, graphql } from "gatsby"
// import Lightbox from "./lightbox"
// const Projects = () => (
// 	<StaticQuery

// 		const query={graphql`
// query MyQuery4 {
//   allStrapiProject(sort: {fields: strapiId, order: DESC}) {
//     nodes {
//       projectName
//       id
//       Images {
//         localFile {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//               src
//             }
//           }
//         }
//       }
//     }
//   }
// }

// `}
// 		render={data => <Lightbox projectData={data} />}
// 	/>
// )
// export default Projects;