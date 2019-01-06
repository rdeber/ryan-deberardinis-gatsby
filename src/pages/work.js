import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'


const WorkPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`ryan`, `deberardinis`, `developer`, `designer`, `photographer`, `react`]} />
    <div className="work">
      <section className="pageCover">
      
      </section>
      <section className="section-1">
        <figure className="device-wrap">
          <div className="device">
            <div className="browser-ui">
              <div className="browser-ui-buttons">
                <div className="browser-ui-button"></div>
                <div className="browser-ui-button"></div>
                <div className="browser-ui-button"></div>  
              </div>
              <div className="browser-ui-search"></div>
              <div className="browser-ui-close"></div>
            </div>
            <div className="device-img">
              <Img fluid={props.data.imageOne.childImageSharp.fluid} />
            </div>
          </div>
        </figure>
        <article>
          <h2>Indeed Academy</h2>
          <h3>Frontend design + Development</h3>
          <h4>HTML, CSS/LESS, JS, PHP, Moodle</h4>
          <p></p>
        </article>
      </section>
      
      <section className="section-2">
        <figure className="device-wrap">
          <div className="device">
            <div className="browser-ui">
              <div className="browser-ui-buttons">
                <div className="browser-ui-button"></div>
                <div className="browser-ui-button"></div>
                <div className="browser-ui-button"></div>  
              </div>
              <div className="browser-ui-search"></div>
              <div className="browser-ui-close"></div>
            </div>
            <div className="device-img">
              <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
            </div>
          </div>
        </figure>
        <article>
          <h2>Learning Spaces</h2>
          <h3>Frontend design + Development</h3>
          <h4>HTML, CSS/LESS, JS, Moodle</h4>
          <p></p>
        </article>
      </section>
      
      <section className="">
      
      </section>
      <section className="">
      
      </section>
      <section className="">
      
      </section>
    hi
    </div>
  </Layout>
)

export default WorkPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "work/work-indeedacademy-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "work/work-learningspaces-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`