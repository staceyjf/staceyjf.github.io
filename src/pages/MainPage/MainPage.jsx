import Navbar from "../../components/Navbar/Navbar";
import IntroSection from "../../components/IntroSection/IntroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import SkillsSection from "../../components/SkillsSection/SkillsSection.jsx";
import ContactSection from "../../components/ContactSection/ContactSection.jsx";
import BackToTopArrow from "../../components/BackToTopArrow/BackToTopArrow.jsx";

function MainPage() {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <AboutSection />
      {/* <SkillsSection /> */}
      <ProjectsSection />
      <ContactSection />
      <BackToTopArrow />
    </div>
  );
}

export default MainPage;
