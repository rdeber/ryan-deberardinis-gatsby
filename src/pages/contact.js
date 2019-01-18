import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Contact from '../components/contact'
import styles from '../styles/index.module.scss'


const ContactPage = () => (
  <Layout>
    <SEO title="Ryan DeBerardinis" keywords={[`ryan`, `deberardinis`, `developer`, `designer`, `photographer`, `react`]} />
    <section className={styles.homeHero}>
      <div className={styles.myTitle}>
        <h1 className={styles.myName}>Get in Touch.</h1>
        <h2 className={styles.mySkills}>I'm always interested in hearing about new projects. Drop me a line if you'd like to collaborate on something new.</h2>
      </div>
      <div className="box-3d-right contact-form">
        <div className="myForm">
          <Contact />
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage