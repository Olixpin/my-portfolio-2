import { Header, Hero } from "./Layouts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = ({}) => {
  return (
    <Router>
      <Header />
      <Hero />
      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
    </Router>
  );
};
export default App;
