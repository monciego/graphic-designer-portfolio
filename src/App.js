import { GlobalStyles } from "./styles/Global/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme/theme";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { Container } from "./styles/Global/Container.styled";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar />
        <Container>
          <Home />
          <About />
          <Projects />
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
