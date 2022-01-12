import { ThemeProvider } from "styled-components";
import { AppContainer } from "./components/atoms";
import Header from "./components/organismes/Header/Header";
import { GlobalTheme } from "./themes/GlobalTheme";
import { GreenTheme } from "./themes/GreenTheme";

function App() {
  return (
    <ThemeProvider theme={GreenTheme}>
      <GlobalTheme />
      <AppContainer>
        <Header />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
