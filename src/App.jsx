import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./css/core.css";
import About from "./pages/About/About";
import Main from "./pages/Main/Main";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
