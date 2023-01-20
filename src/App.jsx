import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Blog, Portfolio, EachPortfolio } from "./pages";
import { Footer } from "./Layouts";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:title" element={<EachPortfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
