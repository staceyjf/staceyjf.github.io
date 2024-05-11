import Navbar from "../../components/Navbar/Navbar";
import IntroSection from "../../components/IntroSection/IntroSection";
import AboutSection from "../../components/AboutSection/AboutSection";

function MainPage() {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <AboutSection />
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
