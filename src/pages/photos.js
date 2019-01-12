import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'


const PhotosPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`ryan`, `deberardinis`, `developer`, `designer`, `photographer`, `react`]} />
    
    <div className="photos">
      <section className="pageCover">
        PHOTOS!
      </section>

      <section className="photo-grid">
        <div className="photo">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
      </section>

    </div>
  </Layout>
)

export default PhotosPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "photos/2016-12-3-NYC-Rooftop_5983-1-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`