import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ScrollDown from '../components/scrollDown'


const AboutPage = (props) => (
  <Layout>
    <SEO title="Ryan DeBerardinis - About" keywords={[`ryan`, `deberardinis`, `developer`, `designer`, `photographer`, `photos`]} />

    <div className="about">
      <section className="pageCover">
        <div className="pageCoverImg">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
        <div className="box-3d-right">
          <div className="pageCoverTitle">
            <h1 className="myName">Hello, I'm Ryan.</h1>
            <h2 className="mySkills">a creative professional from NYC</h2>
            <p>My work focuses on the intersection between design and development. I have a relentless passion for creating clean and beautiful user experiences built on a solid understanding of the latest technologies. When I’m not writing code and pushing pixels, you can often find me photographing the streets of New York City.</p>
            <p>I'm currently working as lead front end developer for Remote-Learner in NYC</p>
          </div>
        </div>
      </section>

      <section className="skills">
        <h4>My skills:</h4>
        <div className="skills-wrap">
          <span class="label label-rounded label-primary">HTML</span>
          <span class="label label-rounded label-primary">CSS</span>
          <span class="label label-rounded label-primary">SCSS/LESS</span>
          <span class="label label-rounded label-primary">UI/UX</span>
          <span class="label label-rounded label-primary">JavaScript</span>
          <span class="label label-rounded label-primary">jQuery</span>
          <span class="label label-rounded label-primary">Git</span>
          <span class="label label-rounded label-primary">Bootstrap</span>
          <span class="label label-rounded label-primary">Wordpress</span>
          <span class="label label-rounded label-primary">Gulp/Grunt</span>
          <span class="label label-rounded label-primary">Nodejs/NPM</span>
          <span class="label label-rounded label-primary">React</span>
          <span class="label label-rounded label-primary">PHP</span>
          <span class="label label-rounded label-primary">Moodle</span>
          <span class="label label-rounded label-primary">Photoshop</span>
          <span class="label label-rounded label-primary">Illustrator</span>
        </div>
      </section>

      <section className="tech">
        <h3>About this website:</h3>
        <p>This website is build from scratch using the following technologies:</p>
        <div className="logos">
          <div className="logo">
            <Img fluid={props.data.gatsby.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.react.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.html.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.css.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.sass.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.github.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.netlify.childImageSharp.fluid} />
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "photos/about-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
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

