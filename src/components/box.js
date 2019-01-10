import React from 'react'
//import styles from '../styles/box.module.scss'

class Box extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.toggleBodyClass);
    this.toggleBodyClass();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleBodyClass);
  }

  toggleBodyClass = () => {
    if (window.scrollY < 100) {
      document.body.classList.add("showChildDiv");
    } else {
      document.body.classList.remove("showChildDiv");
    }
  };

  render() {
    return (
      <div>HI</div>
    );
  }
}

export default Box