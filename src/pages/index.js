import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Contact from '../components/contact'


const IndexPage = () => (
  <Layout>
    <SEO title="Ryan DeBerardinis" keywords={[`ryan`, `deberardinis`, `developer`, `designer`, `photographer`, `react`]} />
    <section className="home-banner">
      <div className="my-title">
        <h1 className="my-name">RYAN DeBERARDINIS</h1>
        <h2 className="my-positions">Developer + Designer + Photographer</h2>
        <p className="my-description">I'm always interested in hearing about new projects. Drop me a line if you'd like to collaborate on something new.</p>
      </div>
      <div className="box-3d-right contact-form">
        <div className="myForm">
          <Contact />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage