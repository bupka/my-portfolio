import { Container } from "./components/styles/Container.styled";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/main/intro/Intro";
import About from "./components/main/about/About";
import Projects from "./components/main/projects/Projects";
import Contact from "./components/main/contact/Contact";

function App() {
  return (
    <Container>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
