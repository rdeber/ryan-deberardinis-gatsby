import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { TiArrowBackOutline } from 'react-icons/ti'
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';


const WorkPage = (props) => (
  <Layout>
    <SEO title="Ryan DeBerardinis - Work" keywords={[`ryan`, `deberardinis`, `developer`, `designer`, `photographer`, `portfolio`]} />
    <div className="work">

      <section className="banner">
        <h1>Creative Work</h1>
        <h2>Frontend Development + UI Design</h2>
        <div className="logos-wrap">
          <h4>I'm proud to have worked on some awesome projects:</h4>
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
        </div>
      </section>

      <section className="project">
        <figure className="device-wrap">
          <Reveal effect="fadeInLeft3d">
            <div className="device device-3d-left">
              <div className="device-home"></div>
              <div className="device-camera"></div>
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
          </Reveal>
          <Reveal effect="fadeInScrollText">
            <h4><TiArrowBackOutline /> Scroll Device to View</h4>
          </Reveal>
        </figure>
        <article>
          <Fade cascade>
            <h2>Remote-Learner.com</h2>
            <h3>Development + UI Design + Branding</h3>
            <h4>HTML, CSS/SCSS, JavaScript, Wordpress</h4>
            <p>Working with the creative team at Remote-Learner, I lead the development and design of the company's new Wordpress website. Some of the unique elements included a custom built animated SVG graphic powered by Snap.svg and jQuery; and an interactive photo grid built with Slick Carousel and qTip2.</p>
            <a href="https://www.remote-learner.com/" className="btn btn-primary">View Site</a>
          </Fade>
        </article>
      </section>

      <section className="project">
        <figure className="device-wrap">
          <Reveal effect="fadeInRight3d">
            <div className="device device-3d-right">
              <div className="device-home"></div>
              <div className="device-camera"></div>
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
          </Reveal>
          <Reveal effect="fadeInScrollText">
            <h4><TiArrowBackOutline /> Scroll Device to View</h4>
          </Reveal>
        </figure>
        <article>
          <Fade cascade>
            <h2>Learning Spaces</h2>
            <h3>Frontend Development + UI Design</h3>
            <h4>HTML, CSS/LESS, JavaScript, Moodle</h4>
            <p>This project involved a custom built theme for Moodle LMS. The Learning Spaces site featured an interactive grid of courses with a modern and intuitive UI inspired by Netflix's web interface.</p>
            <a href="https://learningspaces.remote-learner.com/" className="btn btn-primary">View Site</a>
          </Fade>
        </article>
      </section>

      <section className="project">
        <figure className="device-wrap">
          <Reveal effect="fadeInLeft3d">
            <div className="device device-3d-left">
              <div className="device-home"></div>
              <div className="device-camera"></div>
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
          </Reveal>
          <Reveal effect="fadeInScrollText">
            <h4><TiArrowBackOutline /> Scroll Device to View</h4>
          </Reveal>
        </figure>
        <article>
          <Fade cascade>
            <h2>Mandaloun Bistro</h2>
            <h3>Website Design + Development</h3>
            <h4>HTML, CSS</h4>
            <p>This project involved creating a custom website that captured the brand identity of this new restaurant and gave its customers an easy way to make reservations and explore the latest offerings. The website features a clean minimal style and utilizes a layout that highlights their powerful imagery.</p>
            <a href="http://www.mandalounbistro.com/" className="btn btn-primary">View Site</a>
          </Fade>
        </article>
      </section>

      <footer><span>Ⓒ 2019</span> - RYAN DeBERARDINIS</footer>

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