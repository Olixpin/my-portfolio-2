import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Blog,
  Branding,
  Development,
  Photography,
  UIUX,
  Portfolio,
  EachPortfolio,
} from "./pages";
import { Footer } from "./Layouts";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/development" element={<Development />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/uiux" element={<UIUX />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:title" element={<EachPortfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
