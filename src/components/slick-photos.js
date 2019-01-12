import React from 'react'
import Slider from "react-slick";
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

class SlickPhotos extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <Img fluid={this.props.data.imageOne.childImageSharp.fluid} />
        </div>
        <div>
          <Img fluid={this.props.data.imageTwo.childImageSharp.fluid} />
        </div>
        <div>
          <Img fluid={this.props.data.imageThree.childImageSharp.fluid} />
        </div>
      </Slider>
    );
  }
}

export default SlickPhotos

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "logos/today-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "logos/co-gov-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "logos/newyorkpost.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`