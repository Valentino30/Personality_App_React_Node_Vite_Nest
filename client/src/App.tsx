import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";

import Landing from "./pages/Landing";
import Results from "./pages/Results";
import Question from "./pages/Question";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
