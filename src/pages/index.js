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
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis convallis nunc bibendum fermentum. Praesent gravida eros nisl, eget egestas tortor facilisis sed. Fusce at velit a nibh pretium dignissim imperdiet vitae turpis. Etiam egestas nulla at arcu scelerisque, quis maximus ex auctor. Proin pretium augue maximus, blandit ex nec, maximus neque. Pellentesque elementum nulla feugiat congue aliquet. Fusce lacus sem, fringilla in ultrices sit amet, efficitur sit amet massa. Phasellus bibendum maximus dui sodales pharetra. Nunc ultrices auctor mauris lobortis auctor. Mauris neque diam, luctus et scelerisque et, dapibus et neque. Mauris in finibus neque. Mauris quis leo sit amet nibh euismod congue ut id est. Nulla sit amet lacus quis risus sollicitudin facilisis quis ac nisi. Fusce in tellus scelerisque, aliquam odio tristique, pretium leo. Maecenas ligula felis, sagittis quis tincidunt non, consequat eget velit.</p>
  </Layout>
)

export default IndexPage