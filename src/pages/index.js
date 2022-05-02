import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Playground from '../components/Playground/Playground';
import Contact from '../components/Contact/Contact';
import { Layout } from '../layout/Layout';
import About from '../components/About/About';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      <BgAnimation />
      </Section>
      <Playground />
      <About/>
      <Contact />
      </Layout>
  );
};

export default Home;
