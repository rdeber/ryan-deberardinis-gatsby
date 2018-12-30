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
      <div className={[styles.myBox, "myForm"].join(' ')}>
        <form className={styles.myForm} action="https://formspree.io/rdeber@gmail.com" method="POST">

          <div className="form-group">
            <span className="input input--manami">
              <input className={`input__field input__field--manami`} type="text" id="name" />
              <label className={`input__label input__label--manami`} htmlFor="name">
                <span className={`input__label-content input__label-content--manami`}>Name</span>
              </label>
            </span>
            <span className="input input--manami">
              <input className={`input__field input__field--manami`} type="text" id="email" />
              <label className={`input__label input__label--manami`} htmlFor="email">
                <span className={`input__label-content input__label-content--manami`}>Email</span>
              </label>
            </span>
            <span className="input input--manami">
              <input className={`input__field input__field--manami`} type="text" id="color" />
              <label className={`input__label input__label--manami`} htmlFor="color">
                <span className={`input__label-content input__label-content--manami`}>Favorite Color</span>
              </label>
            </span>
          </div>

          <div className="form-group">
            <span className="input input--manami">
              <textarea className={`input__field input__field--manami`} id="message" rows="3"></textarea>
              <label className={`input__label input__label--manami`} htmlFor="message">
                <span className={`input__label-content input__label-content--manami`}>What's Up?</span>
              </label>
            </span>
          </div>

          <input type="text" name="_gotcha" className={styles.gotcha}></input>
          <input type="hidden" name="_subject" value="Message via http://ryandeberardinis.com"></input>
          <input className="btn btn-primary" type="submit" value="Send"></input>
       
       </form>
      </div>
    </div>
  </Layout>
)

export default IndexPage