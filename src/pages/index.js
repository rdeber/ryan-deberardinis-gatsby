import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Contact from '../components/contact'

import styles from '../styles/index.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ryan`, `deberardinis`, `developer`, `designer`, `photographer`, `react`]} />
    <div className={styles.homeHero}>
      <div className={styles.myTitle}>
        <h1 className={styles.myName}>RYAN DeBERARDINIS</h1>
        <h2 className={styles.mySkills}>Developer + Designer + Photographer</h2>
      </div>
      <div className={[styles.myBox, "myForm"].join(' ')}>
        <Contact />
      </div>
    </div>
  </Layout>
)

export default IndexPage