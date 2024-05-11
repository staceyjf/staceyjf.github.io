import Navbar from "../../components/Navbar/Navbar";
import IntroSection from "../../components/IntroSection/IntroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";

function MainPage() {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      {/* <Landing />
      <About />
      <Skills />
      <Projects />
      <Achievement />
      <Contacts />  */}
    </div>
  );
}

export default MainPage;
