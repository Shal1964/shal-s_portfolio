import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Hero from "./features/hero/Hero"
import AboutMe from "./features/About/AboutMe";
import Projects from "./features/projects/Projects";
import Skills from "./features/skills/Skills";
import Experience from "./features/experience/Experience";

function App() {
  return (
    <>
      <ScrollProgressBar />
      <NavBar/>
      <section
        style={{
          position: "relative",
          backgroundColor: "#EEF8FF",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <Hero />
        {}

        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
        <Experience></Experience>

      </section>
      <Footer />
    </>
  );
}

export default App;