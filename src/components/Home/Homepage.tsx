import Blogs from './Blogs';
import { Hero } from './Hero';
import { Projects } from './Projects';
import { ResumeButton } from './ResumeButton';
import { Skills } from './Skills';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Blogs />
      <ResumeButton />
    </div>
  );
};

export default Homepage;
