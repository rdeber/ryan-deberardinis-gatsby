import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ScrollDown from '../components/scrollDown'


const AboutPage = (props) => (
  <Layout>
    <SEO title="Page two" />

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

    <div className="container">
      <div className="columns">

        <div className="column col-4">
          <div className="card">
            <div className="card-image">
            <ScrollDown />
              <Img fluid={props.data.imageOne.childImageSharp.fluid} />
            </div>
            <div className="card-header">
              <div className="card-title h5">Hello. I'm Ryan DeBerardinis.</div>
              <div className="card-subtitle text-gray">a designer, developer and photographer working in New York City</div>
            </div>
            <div className="card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis convallis nunc bibendum fermentum. Praesent gravida eros nisl, eget egestas tortor facilisis sed. Fusce at velit a nibh pretium dignissim imperdiet vitae turpis. Etiam egestas nulla at arcu scelerisque, quis maximus ex auctor. Proin pretium augue maximus, blandit ex nec, maximus neque. Pellentesque elementum nulla feugiat congue aliquet. Fusce lacus sem, fringilla in ultrices sit amet, efficitur sit amet massa. Phasellus bibendum maximus dui sodales pharetra. Nunc ultrices auctor mauris lobortis auctor. Mauris neque diam, luctus et scelerisque et, dapibus et neque. Mauris in finibus neque. Mauris quis leo sit amet nibh euismod congue ut id est. Nulla sit amet lacus quis risus sollicitudin facilisis quis ac nisi. Fusce in tellus scelerisque, aliquam odio.</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Click</button>
            </div>
          </div>
        </div>

        <div className="column col-4">
          <div className="card">
            <div className="card-image">
              <Img fluid={props.data.imageOne.childImageSharp.fluid} />
            </div>
            <div className="card-header">
              <div className="card-title h5">Header</div>
              <div className="card-subtitle text-gray">subheader</div>
            </div>
            <div className="card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis convallis nunc bibendum fermentum. Praesent gravida eros nisl, eget egestas tortor facilisis sed. Fusce at velit a nibh pretium dignissim imperdiet vitae turpis. Etiam egestas nulla at arcu scelerisque, quis maximus ex auctor. Proin pretium augue maximus, blandit ex nec, maximus neque. Pellentesque elementum nulla feugiat congue aliquet. Fusce lacus sem, fringilla in ultrices sit amet, efficitur sit amet massa. Phasellus bibendum maximus dui sodales pharetra. Nunc ultrices auctor mauris lobortis auctor. Mauris neque diam, luctus et scelerisque et, dapibus et neque. Mauris in finibus neque. Mauris quis leo sit amet nibh euismod congue ut id est. Nulla sit amet lacus quis risus sollicitudin facilisis quis ac nisi. Fusce in tellus scelerisque, aliquam odio.</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Click</button>
            </div>
          </div>
        </div>

        <div className="column col-4">
          <div className="card">
            <div className="card-image">
              <Img fluid={props.data.imageOne.childImageSharp.fluid} />
            </div>
            <div className="card-header">
              <div className="card-title h5">Header</div>
              <div className="card-subtitle text-gray">subheader</div>
            </div>
            <div className="card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis convallis nunc bibendum fermentum. Praesent gravida eros nisl, eget egestas tortor facilisis sed. Fusce at velit a nibh pretium dignissim imperdiet vitae turpis. Etiam egestas nulla at arcu scelerisque, quis maximus ex auctor. Proin pretium augue maximus, blandit ex nec, maximus neque. Pellentesque elementum nulla feugiat congue aliquet. Fusce lacus sem, fringilla in ultrices sit amet, efficitur sit amet massa. Phasellus bibendum maximus dui sodales pharetra. Nunc ultrices auctor mauris lobortis auctor. Mauris neque diam, luctus et scelerisque et, dapibus et neque. Mauris in finibus neque. Mauris quis leo sit amet nibh euismod congue ut id est. Nulla sit amet lacus quis risus sollicitudin facilisis quis ac nisi. Fusce in tellus scelerisque, aliquam odio.</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Click</button>
            </div>
          </div>
        </div>

          <div name="scroll-to-element" className="element">
            Scroll to element
        </div>

      </div>
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
  }
`

