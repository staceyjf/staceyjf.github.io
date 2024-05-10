import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import IntroSection from "../../components/IntroSection/IntroSection";

function MainPage() {
  useEffect(() => {
    document.title = "Welcome to Stacey Fanner's portfolio";
    return () => (document.title = "Welcome to Stacey Fanner's portfolio");
  }, []);

  return (
    <div>
      <Navbar />
      <IntroSection />
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

//https://github.com/sreerag-rajan/developer-portfolio/blob/main/src/components/Landing/Landing.js
