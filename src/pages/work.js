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
          <div className="device device-3d-left">
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
          <h3>Frontend Development + UI Design</h3>
          <h4>Created for Remote-Learner</h4>
          <p>Working with the creative team at Remote-Learner, I lead the front-end development and design of this complex project. The site is built on the Moodle LMS and utilizes the latest technologies for responsive web development.</p>
          <a href="" className="btn btn-default">Learn More</a>
          <a href="" className="btn btn-default">View Site</a>
        </article>
      </section>
      
      <section className="section-2">
        <figure className="device-wrap">
          <div className="device device-3d-right">
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
          <h3>Frontend Development + UI Design</h3>
          <h4>HTML, CSS/LESS, JS, Moodle</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien eu dui dictum mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien eu dui dictum mattis. Vestibulum finibus lacus mauris, eget cursus lectus gravida vel. Aenean hendrerit vulputate sem, eu semper mauris dignissim id. Fusce mollis et odio imperdiet ornare. Sed aliquam id eros vulputate accumsan. Maecenas et semper odio. Aliquam luctus finibus viverra. Quisque id interdum odio. Nullam pretium odio ante, et posuere turpis molestie eget. Donec non molestie nulla.</p>
        </article>
      </section>
      
      <section className="">
        <figure className="device-wrap">
          <div className="device device-3d-left">
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
              <Img fluid={props.data.imageThree.childImageSharp.fluid} />
            </div>
          </div>
        </figure>
        <article>
          <h2>Solar Energy International</h2>
          <h3>Frontend Development + Design</h3>
          <h4>HTML, CSS, JS, Moodle</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien eu dui dictum mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien eu dui dictum mattis. Vestibulum finibus lacus mauris, eget cursus lectus gravida vel. Aenean hendrerit vulputate sem, eu semper mauris dignissim id. Fusce mollis et odio imperdiet ornare. Sed aliquam id eros vulputate accumsan. Maecenas et semper odio. Aliquam luctus finibus viverra. Quisque id interdum odio. Nullam pretium odio ante, et posuere turpis molestie eget. Donec non molestie nulla.</p>
        </article>
      </section>

      <section className="">
      
      </section>

      <section className="">
      
      </section>

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
    imageThree: file(relativePath: { eq: "work/work-solarenergy-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`