import LeftMenu from "./Components/LeftMenu";
import RightHome from "./Components/RightHome";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <LeftMenu/>
      <RightHome />
      <Routes>
        {/* <Route path="/" element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
