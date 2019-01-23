import React from 'react';
import { Events, animateScroll as scroll } from 'react-scroll'
import { FaRocket } from 'react-icons/fa'


class ScrollUp extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

    window.addEventListener("scroll", this.toggleBodyClass);
    this.toggleBodyClass();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleBodyClass);
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  toggleBodyClass = () => {
    if (window.scrollY > 500) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  };

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <button className="scrollToTop" onClick={this.scrollToTop}><FaRocket />Back to Top</button>
    );
  }
};

export default ScrollUp;
