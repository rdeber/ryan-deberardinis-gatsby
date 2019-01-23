import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'



const PhotosPage = (props) => (
  <Layout>
    <SEO title="Ryan DeBerardinis - Photo" keywords={[`ryan`, `deberardinis`, `developer`, `designer`, `photographer`, `photos`]} />

    <div className="photos">
      <section className="banner">
        <h1>Photography</h1>
        <h2>Landscapes + Cityscapes + Abstract</h2>
        <div className="logos-wrap">
          <h4>My photos have been featured on:</h4>
          <div className="logos">
            <div className="logo">
              <Img fluid={props.data.logo1.childImageSharp.fluid} alt="New York Post Logo"/>
            </div>
            <div className="logo">
              <Img fluid={props.data.logo2.childImageSharp.fluid} alt="Colorado Official Website Logo"/>
            </div>
            <div className="logo">
              <Img fluid={props.data.logo3.childImageSharp.fluid} alt="Frontier Airlines Logo"/>
            </div>
            <div className="logo">
              <Img fluid={props.data.logo4.childImageSharp.fluid} alt="Today Show Logo"/>
            </div>
            <div className="logo">
              <Img fluid={props.data.logo5.childImageSharp.fluid} alt="The Clymb Logo"/>
            </div>
            <div className="logo">
              <Img fluid={props.data.logo6.childImageSharp.fluid} alt="Denver Philharmonic Orchestra Logo"/>
            </div>
            <div className="logo">
              <Img fluid={props.data.logo7.childImageSharp.fluid} alt="AAA Logo"/>
            </div>
            <div className="logo">
              <Img fluid={props.data.logo8.childImageSharp.fluid} alt="The Huffington Post Logo"/>
            </div>
            <div className="logo">
              <Img fluid={props.data.logo9.childImageSharp.fluid} alt="Manhattan Institute Logo"/>
            </div>
            <div className="logo">
              <Img fluid={props.data.logo10.childImageSharp.fluid} alt="BBC News Logo"/>
            </div>
            <div className="logo">
              <Img fluid={props.data.logo11.childImageSharp.fluid} alt="Curbed New York Logo"/>
            </div>
            <div className="logo">
              <Img fluid={props.data.logo12.childImageSharp.fluid} alt="Medium Logo"/>
            </div>
          </div>
        </div>
      </section>

      <section className="photo-grid">
        <div className="photo">
          <h5>New York City</h5>
          <Img fluid={props.data.photo1.childImageSharp.fluid} alt="Photo of New York City"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo2.childImageSharp.fluid} alt="Photo of New York City"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo3.childImageSharp.fluid} alt="Photo of New York City"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo4.childImageSharp.fluid} alt="Photo of New York City"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo5.childImageSharp.fluid} alt="Photo of New York City"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo6.childImageSharp.fluid} alt="Photo of New York City"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo7.childImageSharp.fluid} alt="Photo of a Big Red Tree"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo8.childImageSharp.fluid} alt="Photo of Redwood Forest Landscape"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo9.childImageSharp.fluid} alt="Photo of Denver Colorado Skyline and Lightning"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo10.childImageSharp.fluid} alt="Photo of Great Sand Dunes National Park Landscape"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo11.childImageSharp.fluid} alt="Photo of Thick Aspen Forest in Fall Landscape"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo12.childImageSharp.fluid} alt="Photo of Pink Blossoms in Central Park"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo13.childImageSharp.fluid} alt="Photo of Colorado Fall Landscape"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo14.childImageSharp.fluid} alt="Photo of Trains in Hudson Yards New York City"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo15.childImageSharp.fluid} alt="Photo of Modern Subway Station Architecture in New York City"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo16.childImageSharp.fluid} alt="Photo of Graffiti Covered Rooftops on Manhattan"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo17.childImageSharp.fluid} alt="Photo of Sunset Over the Hudson River"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo18.childImageSharp.fluid} alt="Photo of Old Buildings in the East Village of New York City"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo19.childImageSharp.fluid} alt="Photo of Historic Building New York City"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo20.childImageSharp.fluid} alt="Photo of Yellowstone National Park Frozen Winter Landscape"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo21.childImageSharp.fluid} alt="Photo of Black and White Great Sand Dunes Landscape"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo22.childImageSharp.fluid} alt="Photo of Colorful Old Buildings of New York City"/>
        </div>
        <div className="photo">
          <Img fluid={props.data.photo23.childImageSharp.fluid} alt="Photo of Staten Island Ferry and Docks"/>
        </div>
      </section>

      <section className="quote">
        <div className="quote-wrap">
          <p>"Our job is to record, each in his own way, this world of light and shadow and time that will never come again exactly as it is today."</p>
          <p>-Edward Abbey</p>
        </div>
      </section>

      <footer><span>Ⓒ 2019</span> - RYAN DeBERARDINIS</footer>

    </div>
  </Layout>
)

export default PhotosPage

export const pageQuery = graphql`
  query {
    photo1: file(relativePath: { eq: "photos/2016-12-3-NYC-Rooftop_5983-1-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo2: file(relativePath: { eq: "photos/5-Pointz-Brooklyn-Manhattan-084-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo3: file(relativePath: { eq: "photos/2015-10-15-Williamsburg-Bridge_0027-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo4: file(relativePath: { eq: "photos/2015-10-15-Williamsburg-Bridge_0419-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo5: file(relativePath: { eq: "photos/2016-1-2-NYC-NYD2_3900a-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo6: file(relativePath: { eq: "photos/2016-12-3-NYC-Rooftop_5983-1-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo7: file(relativePath: { eq: "photos/big-red-tree-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo8: file(relativePath: { eq: "photos/Cali-Trip-09-253-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo9: file(relativePath: { eq: "photos/denver-lightning-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo10: file(relativePath: { eq: "photos/Great-Sand-Dunes-NP-047-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo11: file(relativePath: { eq: "photos/IMG_3608-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo12: file(relativePath: { eq: "photos/IMG_3690-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo13: file(relativePath: { eq: "photos/IMG_3762-panoramic-600x361.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo14: file(relativePath: { eq: "photos/IMG_4314-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo15: file(relativePath: { eq: "photos/IMG_4387-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo16: file(relativePath: { eq: "photos/IMG_6386-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo17: file(relativePath: { eq: "photos/IMG_7557_0985-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo18: file(relativePath: { eq: "photos/IMG_9017-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    imageOne: file(relativePath: { eq: "photos/IMG_9290_tonemapped-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo19: file(relativePath: { eq: "photos/IMG_9612-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo20: file(relativePath: { eq: "photos/May-Trip-10-270-4-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo21: file(relativePath: { eq: "photos/Great-Sand-Dunes-NP-162-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo22: file(relativePath: { eq: "photos/Saturday-in-December_1720-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    photo23: file(relativePath: { eq: "photos/Staten-Island-065a_b_c_tonemapped-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
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
    logo5: file(relativePath: { eq: "logos/the-clymb-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo6: file(relativePath: { eq: "logos/denver-philharmonic-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo7: file(relativePath: { eq: "logos/logo1.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo8: file(relativePath: { eq: "logos/logo2.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo9: file(relativePath: { eq: "logos/logo3.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo10: file(relativePath: { eq: "logos/logo4.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo11: file(relativePath: { eq: "logos/logo5.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo12: file(relativePath: { eq: "logos/logo6.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`