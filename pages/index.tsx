import ReactFullpage from '@fullpage/react-fullpage';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import ProjectUbooze from '../components/Project-ubooze';
import ProjectWatchlist from '../components/Project-watchlist';
import ProjectEssenceAndElements from '../components/Project-essence-and-elements';
import ProjectOscarWillowKhan from '../components/Project-oscar-willow-khan';

const HomePage = () => {
  const title = 'Frontend Web Developer';

  return (
    <Layout title={title}>
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
    </Layout>
  );
};

export default HomePage;
