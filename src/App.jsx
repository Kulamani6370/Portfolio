import About from "./components/About";
import Certifications from "./components/Certifications";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Qualifications from "./components/Qualifications";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Certifications />
      <Qualifications />
    </>
  );
}

export default App;
