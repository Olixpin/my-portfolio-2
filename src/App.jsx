import { Header } from "./Layouts";
import { BrowserRouter as Router } from "react-router-dom";

const App = ({}) => {
  return (
    <Router>
      {/* basename={process.env.PUBLIC_URL} */}
      <Header />
    </Router>
  );
};
export default App;
