import { ThemeProvider } from "styled-components";
import Hero from "./components/organismes/Hero/Hero";
import { GlobalTheme } from "./themes/GlobalTheme";
import { GreenTheme } from "./themes/GreenTheme";

function App() {
  //fix: router
  return (
    <ThemeProvider theme={GreenTheme}>
      <GlobalTheme />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
