import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Contact from '../components/contact'
import Reveal from 'react-reveal/Reveal';


const IndexPage = () => (
  <Layout>
    <SEO title="Ryan DeBerardinis" keywords={[`ryan`, `deberardinis`, `developer`, `designer`, `photographer`, `react`]} />
    <section className="home-banner">
      <div className="my-title">
        <h1 className="my-name">RYAN <br/>DeBERARDINIS</h1>
        <h2 className="my-positions">Developer + Designer + Photographer</h2>
        <p className="my-description">I'm a creative professional living and working in New York City. My work combines a love of clean minimalist design with a passion for the latest web technologies. I'm always interested in hearing about new projects. Drop me a line if you'd like to collaborate on something new.</p>
      </div>
      <Reveal effect="fadeInRight3dBox">
        <div className="box-3d-right contact-form">
          <div className="myForm">
            <Contact />
          </div>
        </div>
      </Reveal>
    </section>
  </Layout>
)

export default IndexPage