import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import styles from '../styles/index.module.scss'
import '../styles/main.scss'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ryan`, `deberardinis`, `developer`, `designer`, `photographer`, `react`]} />
    <div className={styles.homeHero}>
      <div className={styles.myTitle}>
        <h1 className={styles.myName}>RYAN DeBERARDINIS</h1>
        <h2 className={styles.mySkills}>Developer + Designer + Photographer</h2>
      </div>
      <div className={[styles.myBox, "card"].join(' ')}>
        <form className={styles.myForm} action="https://formspree.io/rdeber@gmail.com" method="POST">
          <div className="form-group">
            <label className="form-label" htmlFor="input-example-1">Name</label>
            <input className="form-input" type="text" id="input-example-1" placeholder="Name" />
            <label className="form-label" htmlFor="input-example-2">Email</label>
            <input className="form-input" type="text" id="input-example-2" placeholder="Email" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="input-example-3">Message</label>
            <textarea className="form-input" id="input-example-3" placeholder="Textarea" rows="3"></textarea>
          </div>
          <input type="text" name="_gotcha" className={styles.gotcha}></input>
          <input type="hidden" name="_subject" value="Message via http://ryandeberardinis.com"></input>
          <input type="submit" value="Send"></input>
        </form>
      </div>
    </div>
  </Layout>
)

export default IndexPage