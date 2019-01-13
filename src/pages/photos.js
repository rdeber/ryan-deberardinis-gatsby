import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'


const PhotosPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`ryan`, `deberardinis`, `developer`, `designer`, `photographer`, `react`]} />
    
    <div className="photos">
      <section className="banner">
        <h1>Photography</h1>
        <h2>Landscapes + Cityscapes + Abstract</h2>
        <h4>My photos have been featured on:</h4>
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
          <div className="logo">
            <Img fluid={props.data.logo5.childImageSharp.fluid} />
          </div>
          <div className="logo">
            <Img fluid={props.data.logo6.childImageSharp.fluid} />
          </div>
        </div>
      </section>

      <section className="photo-grid">
        <div className="photo">
          <Img fluid={props.data.photo1.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo2.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo3.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo4.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo5.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo6.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo7.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo8.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo9.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo10.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo11.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo12.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo13.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo14.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo15.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo16.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo17.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo18.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo19.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo20.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo21.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo22.childImageSharp.fluid} />
        </div>
        <div className="photo">
          <Img fluid={props.data.photo23.childImageSharp.fluid} />
        </div>
      </section>

    </div>
  </Layout>
)

export default PhotosPage

export const pageQuery = graphql`
  query {
    photo1: file(relativePath: { eq: "photos/2016-12-3-NYC-Rooftop_5983-1-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo2: file(relativePath: { eq: "photos/5-Pointz-Brooklyn-Manhattan-084-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo3: file(relativePath: { eq: "photos/2015-10-15-Williamsburg-Bridge_0027-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo4: file(relativePath: { eq: "photos/2015-10-15-Williamsburg-Bridge_0419-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo5: file(relativePath: { eq: "photos/2016-1-2-NYC-NYD2_3900a-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo6: file(relativePath: { eq: "photos/2016-12-3-NYC-Rooftop_5983-1-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo7: file(relativePath: { eq: "photos/big-red-tree-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo8: file(relativePath: { eq: "photos/Cali-Trip-09-253-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo9: file(relativePath: { eq: "photos/denver-lightning-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo10: file(relativePath: { eq: "photos/Great-Sand-Dunes-NP-047-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo11: file(relativePath: { eq: "photos/IMG_3608-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo12: file(relativePath: { eq: "photos/IMG_3690-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo13: file(relativePath: { eq: "photos/IMG_3762-panoramic-600x361.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo14: file(relativePath: { eq: "photos/IMG_4314-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo15: file(relativePath: { eq: "photos/IMG_4387-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo16: file(relativePath: { eq: "photos/IMG_6386-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo17: file(relativePath: { eq: "photos/IMG_7557_0985-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo18: file(relativePath: { eq: "photos/IMG_9017-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageOne: file(relativePath: { eq: "photos/IMG_9290_tonemapped-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo19: file(relativePath: { eq: "photos/IMG_9612-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo20: file(relativePath: { eq: "photos/May-Trip-10-270-4-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo21: file(relativePath: { eq: "photos/Great-Sand-Dunes-NP-162-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo22: file(relativePath: { eq: "photos/Saturday-in-December_1720-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo23: file(relativePath: { eq: "photos/Staten-Island-065a_b_c_tonemapped-600x403.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
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
  }
`