import Navbar from "../../components/Navbar/Navbar";
import IntroSection from "../../components/IntroSection/IntroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import BackToTopArrow from "../../components/BackToTopArrow/BackToTopArrow.jsx";

function MainPage() {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <BackToTopArrow />
    </div>
  );
}

export default MainPage;
