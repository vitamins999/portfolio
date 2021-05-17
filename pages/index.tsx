import ReactFullpage from '@fullpage/react-fullpage';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import ProjectUbooze from '../components/Project-ubooze';
import ProjectWatchlist from '../components/Project-watchlist';
import ProjectEssenceAndElements from '../components/Project-essence-and-elements';
import ProjectOscarWillowKhan from '../components/Project-oscar-willow-khan';

import { fadeOutPage } from '../animations/navigation';

const HomePage = () => {
  const title = 'Frontend Web Developer';

  return (
    <Layout title={title}>
      <motion.main
        variants={fadeOutPage}
        exit='exit'
        initial='initial'
        animate='animate'
        transition={{ duration: 0.75 }}
      >
        <ReactFullpage
          navigation
          navigationPosition={'left'}
          anchors={[
            'home',
            'about',
            'ubooze',
            'watchlist',
            'essence-and-elements',
            'oscar-willow-khan',
            'contact',
          ]}
          render={({ fullpageApi }) => (
            <ReactFullpage.Wrapper>
              <Hero fullpageApi={fullpageApi} />
              <About />
              <ProjectUbooze />
              <ProjectWatchlist />
              <ProjectEssenceAndElements />
              <ProjectOscarWillowKhan />
              <Contact />
            </ReactFullpage.Wrapper>
          )}
        />
      </motion.main>
    </Layout>
  );
};

export default HomePage;
