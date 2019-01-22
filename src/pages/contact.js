import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Contact from '../components/contact'
import { FiGithub } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { FiCodepen } from 'react-icons/fi'
import { FiImage } from 'react-icons/fi'

const ContactPage = () => (
  <Layout>
    <SEO title="Ryan DeBerardinis" keywords={[`ryan`, `deberardinis`, `developer`, `designer`, `photographer`, `react`]} />
    <div className="contact">
      <section className="home-banner">
        <div className="my-title">
          <h1 className="my-name">Get in Touch.</h1>
          <h2 className="my-positions">I'm always interested in hearing about new projects. Drop me a line if you'd like to collaborate on something new.</h2>

          <div className="external-links">
            <a href="https://github.com/rdeber" className="tooltip tooltip-bottom" data-tooltip="View source on Github"><FiGithub /></a>
            <a href="https://codepen.io/rdeber/" className="tooltip tooltip-bottom" data-tooltip="Check out my Codepens"><FiCodepen /></a>
            <a href="https://www.instagram.com/r.deber/" className="tooltip tooltip-bottom" data-tooltip="Follow me on Instagram"><FiInstagram /></a>
            <a href="https://www.shutterstock.com/g/deberarr" className="tooltip tooltip-bottom" data-tooltip="View my photos on Shutterstock"><FiImage /></a>
          </div>
          
        </div>
        <div className="box-3d-right contact-form">
          <div className="myForm">
            <Contact />
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default ContactPage