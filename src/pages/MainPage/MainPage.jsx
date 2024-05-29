import Navbar from "../../components/Navbar/Navbar";
import IntroSection from "../../components/IntroSection/IntroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ContactSection from "../../components/ContactSection/ContactSection.jsx";
import BackToTopArrow from "../../components/BackToTopArrow/BackToTopArrow.jsx";

function MainPage() {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <BackToTopArrow />
    </div>
  );
}

export default MainPage;
