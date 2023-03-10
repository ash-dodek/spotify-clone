import LeftMenu from "./Components/LeftMenu";
import RightHome from "./Components/RightHome";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <LeftMenu/>
      <Routes>
        <Route path="/" element={<RightHome />} />
      </Routes>
    </Router>
  );
}

export default App;
