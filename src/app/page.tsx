// page.tsx

import Hero from './components/Hero';
import Partners from './components/Partners';
import Projects from './components/Projects';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Team />
      <Testimonials />
      <Partners />
    </>
  );
}

