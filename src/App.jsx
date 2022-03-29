import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./css/core.css";
import Main from "./pages/Main/Main";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
