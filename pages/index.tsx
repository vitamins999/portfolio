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
      <main>
        <Hero />
        <About />
        <ProjectUbooze />
        <ProjectWatchlist />
        <ProjectEssenceAndElements />
        <ProjectOscarWillowKhan />
        <Contact />
      </main>
    </Layout>
  );
};

export default HomePage;
