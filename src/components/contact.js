import React from 'react'
import Fade from 'react-reveal/Fade';

const Contact = () => (
  <div className="formWrap">

    <form className="myForm" action="https://formspree.io/rdeber@gmail.com" method="POST">

      <div className="form-group">
        <Fade cascade>
          <span className="input input--manami">
            <input className={`input__field input__field--manami`} type="text" id="name" required />
            <label className={`input__label input__label--manami`} htmlFor="name">
              <span className={`input__label-content input__label-content--manami`}>Name</span>
            </label>
          </span>
          <span className="input input--manami">
            <input className={`input__field input__field--manami`} type="text" id="email" required />
            <label className={`input__label input__label--manami`} htmlFor="email">
              <span className={`input__label-content input__label-content--manami`}>Email</span>
            </label>
          </span>
          <span className="input input--manami">
            <input className={`input__field input__field--manami`} type="text" id="phone" required />
            <label className={`input__label input__label--manami`} htmlFor="phone">
              <span className={`input__label-content input__label-content--manami`}>Phone</span>
            </label>
          </span>
        </Fade>
      </div>

      <div className="form-group">
        <span className="input input--manami">
          <textarea className={`input__field input__field--manami`} id="message" rows="3" required></textarea>
          <label className={`input__label input__label--manami`} htmlFor="message">
            <span className={`input__label-content input__label-content--manami`}>What's Up?</span>
          </label>
        </span>
      </div>

      <input type="text" name="_gotcha" className="gotcha"></input>
      <input type="hidden" name="_subject" value="Message via http://ryandeberardinis.com"></input>
      <input className="btn btn-primary" type="submit" value="Send"></input>

    </form>
  </div>

)

export default Contact