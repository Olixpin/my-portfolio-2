import { Header } from "./Layouts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Blog, Branding, Development, Photography, UIUX } from "./pages";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/development" element={<Development />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/uiux" element={<UIUX />} />
      </Routes>
    </Router>
  );
};
export default App;
