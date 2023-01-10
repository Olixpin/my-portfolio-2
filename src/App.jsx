import { Header, Hero, About, Resume } from "./Layouts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = ({}) => {
  return (
    <Router>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};
export default App;
