import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'


const WorkPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`ryan`, `deberardinis`, `developer`, `designer`, `photographer`, `react`]} />
    <div className="work">

      <section className="banner">
        <h1>Creative Work</h1>
        <h2>Frontend Development + UI Design</h2>
        <h4>I'm proud to have worked with some awesome companies:</h4>
        <div className="logos">
          <div className="logo">
            <Img fluid={props.data.clientlogo1.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.clientlogo2.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.clientlogo3.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.clientlogo4.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.clientlogo5.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.clientlogo6.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.clientlogo7.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.clientlogo8.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.clientlogo9.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.clientlogo10.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.clientlogo11.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.clientlogo12.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.clientlogo13.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.clientlogo14.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.clientlogo15.childImageSharp.fluid} />
          </div>
        </div>
      </section>

      <section className="project">
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
          <h2>Remote-Learner.com</h2>
          <h3>Development + UI Design</h3>
          <h4>HTML, CSS/SCSS, JavaScript, Wordpress</h4>
          <p>Working with the creative team at Remote-Learner, I lead the front-end development and design of this complex project. The site is built on the Moodle LMS and utilizes the latest technologies for responsive web development.</p>
          <a href="#" className="btn btn-primary">View Site</a>
        </article>
      </section>
      
      <section className="project">
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
          <h3>Frontend Development + UI/UX Design</h3>
          <h4>HTML, CSS/LESS, JavaScript, Moodle</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien eu dui dictum mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien eu dui dictum mattis. Vestibulum finibus lacus mauris, eget cursus lectus gravida vel. Aenean hendrerit vulputate sem, eu semper mauris dignissim id. Fusce mollis et odio imperdiet ornare. Sed aliquam id eros vulputate accumsan. Maecenas et semper odio. Aliquam luctus finibus viverra. Quisque id interdum odio. Nullam pretium odio ante, et posuere turpis molestie eget. Donec non molestie nulla.</p>
          <a href="#" className="btn btn-primary">View Site</a>
        </article>
      </section>

      <section className="project">
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
              <Img fluid={props.data.imageFour.childImageSharp.fluid} />
            </div>
          </div>
        </figure>
        <article>
          <h2>Mandaloun Bistro</h2>
          <h3>Frontend Development + Design</h3>
          <h4>HTML, CSS</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien eu dui dictum mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien eu dui dictum mattis. Vestibulum finibus lacus mauris, eget cursus lectus gravida vel. Aenean hendrerit vulputate sem, eu semper mauris dignissim id. Fusce mollis et odio imperdiet ornare. Sed aliquam id eros vulputate accumsan. Maecenas et semper odio. Aliquam luctus finibus viverra. Quisque id interdum odio. Nullam pretium odio ante, et posuere turpis molestie eget. Donec non molestie nulla.</p>
          <a href="#" className="btn btn-primary">View Site</a>
        </article>
      </section>

    </div>
  </Layout>
)

export default WorkPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "work/work-remotelearner-1.jpg" }) {
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
    imageFour: file(relativePath: { eq: "work/work-mandaloun-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  
  

    clientlogo1: file(relativePath: { eq: "clients/logo1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clientlogo2: file(relativePath: { eq: "clients/logo2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clientlogo3: file(relativePath: { eq: "clients/logo3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clientlogo4: file(relativePath: { eq: "clients/logo4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clientlogo5: file(relativePath: { eq: "clients/logo5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clientlogo6: file(relativePath: { eq: "clients/logo6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clientlogo7: file(relativePath: { eq: "clients/logo7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clientlogo8: file(relativePath: { eq: "clients/logo8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clientlogo9: file(relativePath: { eq: "clients/logo9.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clientlogo10: file(relativePath: { eq: "clients/logo10.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clientlogo11: file(relativePath: { eq: "clients/logo11.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clientlogo12: file(relativePath: { eq: "clients/logo12.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clientlogo13: file(relativePath: { eq: "clients/logo13.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clientlogo14: file(relativePath: { eq: "clients/logo14.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clientlogo15: file(relativePath: { eq: "clients/logo15.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`