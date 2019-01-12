import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SlickPhotos from '../components/slick-photos'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'


const PhotosPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`ryan`, `deberardinis`, `developer`, `designer`, `photographer`, `react`]} />
    
    <div className="photos">
      <section className="banner">
        <h1>Photography</h1>
        <h2>Featured on:</h2>
        <div className="logos">
          <div className="logo">
            <Img fluid={props.data.logo1.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.logo2.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.logo3.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.logo4.childImageSharp.fluid} />
          </div>
        </div>
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
    logo1: file(relativePath: { eq: "logos/newyorkpost-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo2: file(relativePath: { eq: "logos/co-gov-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo3: file(relativePath: { eq: "logos/frontier-airlines-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo4: file(relativePath: { eq: "logos/today-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`