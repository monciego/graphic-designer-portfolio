import { GlobalStyles } from "./styles/Global/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme/theme";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar />
      </>
    </ThemeProvider>
  );
};

export default App;
