import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = (props) => (
  <Layout>
    <SEO title="Page two" />
    <div className="img-container">
      <Img fluid={props.data.imageOne.childImageSharp.fluid} />
    </div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis convallis nunc bibendum fermentum. Praesent gravida eros nisl, eget egestas tortor facilisis sed. Fusce at velit a nibh pretium dignissim imperdiet vitae turpis. Etiam egestas nulla at arcu scelerisque, quis maximus ex auctor. Proin pretium augue maximus, blandit ex nec, maximus neque. Pellentesque elementum nulla feugiat congue aliquet. Fusce lacus sem, fringilla in ultrices sit amet, efficitur sit amet massa. Phasellus bibendum maximus dui sodales pharetra. Nunc ultrices auctor mauris lobortis auctor. Mauris neque diam, luctus et scelerisque et, dapibus et neque. Mauris in finibus neque. Mauris quis leo sit amet nibh euismod congue ut id est. Nulla sit amet lacus quis risus sollicitudin facilisis quis ac nisi. Fusce in tellus scelerisque, aliquam odio tristique, pretium leo. Maecenas ligula felis, sagittis quis tincidunt non, consequat eget velit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis convallis nunc bibendum fermentum. Praesent gravida eros nisl, eget egestas tortor facilisis sed. Fusce at velit a nibh pretium dignissim imperdiet vitae turpis. Etiam egestas nulla at arcu scelerisque, quis maximus ex auctor. Proin pretium augue maximus, blandit ex nec, maximus neque. Pellentesque elementum nulla feugiat congue aliquet. Fusce lacus sem, fringilla in ultrices sit amet, efficitur sit amet massa. Phasellus bibendum maximus dui sodales pharetra. Nunc ultrices auctor mauris lobortis auctor. Mauris neque diam, luctus et scelerisque et, dapibus et neque. Mauris in finibus neque. Mauris quis leo sit amet nibh euismod congue ut id est. Nulla sit amet lacus quis risus sollicitudin facilisis quis ac nisi. Fusce in tellus scelerisque, aliquam odio tristique, pretium leo. Maecenas ligula felis, sagittis quis tincidunt non, consequat eget velit.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "about-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

