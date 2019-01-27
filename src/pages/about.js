import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import { FaCode } from 'react-icons/fa'
import { FaPaintBrush } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa'

const AboutPage = (props) => (
  <Layout>
    <SEO title="Ryan DeBerardinis - About" keywords={[`ryan`, `deberardinis`, `developer`, `designer`, `photographer`, `photos`]} />

    <div className="about">
      <section className="pageCover">
        <div className="pageCoverImg">
          <Img fluid={props.data.map2.childImageSharp.fluid} alt="Map of New York City" />
        </div>
        <Reveal effect="fadeInRight3dBox">
          <div className="pageCoverInfo box-3d-right">
            <div className="pageCoverTitle">
              <h1>Hello.</h1>
              <h2>I'm a creative professional from New York City</h2>
              <p>My work focuses on the intersection between design and development. I have a passion for creating clean and beautiful user experiences built on a solid understanding of the latest technologies. When I’m not writing code and pushing pixels, you can often find me photographing the streets of New York City. I'm currently working as lead front end developer for Remote-Learner.</p>
            </div>
          </div>
        </Reveal>
        <div className="my-skills">
          <h4>My skills:</h4>
          <div className="skills-wrap">
            <span className="label label-rounded label-primary">HTML</span>
            <span className="label label-rounded label-primary">CSS</span>
            <span className="label label-rounded label-primary">SCSS/LESS</span>
            <span className="label label-rounded label-primary">UI/UX</span>
            <span className="label label-rounded label-primary">JavaScript</span>
            <span className="label label-rounded label-primary">jQuery</span>
            <span className="label label-rounded label-primary">Git</span>
            <span className="label label-rounded label-primary">Bootstrap</span>
            <span className="label label-rounded label-primary">Wordpress</span>
            <span className="label label-rounded label-primary">Gulp/Grunt</span>
            <span className="label label-rounded label-primary">Nodejs/NPM</span>
            <span className="label label-rounded label-primary">React</span>
            <span className="label label-rounded label-primary">PHP</span>
            <span className="label label-rounded label-primary">Moodle</span>
            <span className="label label-rounded label-primary">Photoshop</span>
            <span className="label label-rounded label-primary">Illustrator</span>
          </div>
        </div>
      </section>

      <section className="thingsido">
        <Fade>
          <h1>What I Do</h1>
        </Fade>
        <div className="columns col-gapless">
          <div className="column col-4">
            <Fade>
              <Reveal effect="reveal-dash">
                <FaCode />
              </Reveal>
              <span>
                <h2>Development</h2>
                <p>I have extensive experience with front-end website development for a variety of clients and projects. I’m skilled at writing optimized HTML5 and CSS3 for streamlined websites and user interfaces, including WordPress and Moodle.</p>
              </span>
            </Fade>
          </div>
          <div className="column col-4">
            <Fade delay={200}>
              <Reveal effect="reveal-dash">
                <FaPaintBrush />
              </Reveal>
              <span>
                <h2>Design</h2>
                <p>My designs focus on a beautiful minimalist approach to creating responsive websites and user interfaces. I have over 10 years of industry experience designing creative solutions for brochures, logos, websites, brand identity, flyers, business cards and more.</p>
              </span>
            </Fade>
          </div>
          <div className="column col-4">
            <Fade delay={400}>
              <Reveal effect="reveal-dash">
                <FaCamera />
              </Reveal>
              <span>
                <h2>Photography</h2>
                <p>My photography focuses on a range of subjects covering grand natural landscapes to intimate urban city scenes. I have a background in traditional darkroom techniques and alternative photographic process. Currently my work focuses on urban scenes around New York City.</p>
              </span>
            </Fade>
          </div>
        </div>
      </section>

      <section className="tech">
        <h1>How's It Made</h1>
        <p>This website is build from scratch using the following technologies:</p>
        <div className="logos">
          <div className="logo">
            <Img fluid={props.data.gatsby.childImageSharp.fluid}  alt="Gatsby Logo"/>
          </div>
          <div className="logo">
            <Img fluid={props.data.react.childImageSharp.fluid} alt="React JS Logo"/>
          </div>
          <div className="logo">
            <Img fluid={props.data.html.childImageSharp.fluid} alt="HTML5 Logo"/>
          </div>
          <div className="logo">
            <Img fluid={props.data.css.childImageSharp.fluid} alt="CSS3 Logo"/>
          </div>
          <div className="logo">
            <Img fluid={props.data.sass.childImageSharp.fluid} alt="SASS Logo"/>
          </div>
          <div className="logo">
            <Img fluid={props.data.github.childImageSharp.fluid} alt="Github Logo"/>
          </div>
          <div className="logo">
            <Img fluid={props.data.netlify.childImageSharp.fluid} alt="Netlify Logo"/>
          </div>
        </div>
      </section>

      <footer><span>Ⓒ 2019</span> - RYAN DeBERARDINIS</footer>

    </div>
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "photos/about-bg.jpg" }) {
      childImageSharp {
        fluid(
            maxWidth: 1000
            duotone: { highlight: "#ffffff", shadow: "#3d4676", opacity: 100 }
          ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    map: file(relativePath: { eq: "map.jpg" }) {
      childImageSharp {
        fluid(
            maxWidth: 1920
            duotone: { highlight: "#ffffff", shadow: "#3d4676", opacity: 100 }
          ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    map2: file(relativePath: { eq: "map2.jpg" }) {
      childImageSharp {
        fluid(
            maxWidth: 1920
            duotone: { highlight: "#ffffff", shadow: "#3d4676", opacity: 100 }
          ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    me: file(relativePath: { eq: "ryan-deberardinis.jpg" }) {
      childImageSharp {
        fluid(
            maxWidth: 300
          ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }


    react: file(relativePath: { eq: "tech/react.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gatsby: file(relativePath: { eq: "tech/gatsby.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    html: file(relativePath: { eq: "tech/html.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    css: file(relativePath: { eq: "tech/css.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sass: file(relativePath: { eq: "tech/sass.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    netlify: file(relativePath: { eq: "tech/netlify.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    github: file(relativePath: { eq: "tech/github.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

