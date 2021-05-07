import React from 'react';
import ScrollSnap from 'scroll-snap';

import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import ProjectUbooze from './Project-ubooze';
import ProjectWatchlist from './Project-watchlist';
import ProjectEssenceAndElements from './Project-essence-and-elements';
import ProjectOscarWillowKhan from './Project-oscar-willow-khan';

const callback = () => {
  console.log('snapped');
};

class ScrollableContainer extends React.Component {
  container = React.createRef();

  bindScrollSnap() {
    const element = this.container.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: '90%',
    });

    snapElement.bind(callback);
  }

  componentDidMount() {
    this.bindScrollSnap();
  }

  render() {
    return (
      <div id='container' ref={this.container}>
        <Hero />
        <About />
        <ProjectUbooze />
        <ProjectWatchlist />
        <ProjectEssenceAndElements />
        <ProjectOscarWillowKhan />
        <Contact />
      </div>
    );
  }
}

export default ScrollableContainer;
