import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import styles from '../styles/index.module.scss'
import '../styles/main.scss'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ryan`, `deberardinis`, `developer`, `designer`, `photographer`, `react`]} />
    <h1 className={styles.myname}>RYAN DeBERARDINIS</h1>
    <h2 className={styles.myskills}>Developer + Designer + Photographer</h2>
    <p className="container">Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
