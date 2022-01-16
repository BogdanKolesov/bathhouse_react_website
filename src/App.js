import { ThemeProvider } from "styled-components";
import Home from './components/views/Home'
import { GlobalTheme } from "./themes/GlobalTheme";
import { GreenTheme } from "./themes/GreenTheme";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  //fix: router
  return (
    <Router>
      <ThemeProvider theme={GreenTheme}>
        <GlobalTheme />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>

  );
}

export default App;
