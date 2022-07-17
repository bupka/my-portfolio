import Main from "./components/main/Main";
import About from "./components/main/section1/About";
// import Footer from "./components/main/section1/Footer";
import Navbar from "./components/navbar/Navbar";
import { Container } from "./components/styles/Container.styled";

function App() {
  return (
    <Container>
      <Navbar />
      <Main />
      <About />
    </Container>
  );
}

export default App;
