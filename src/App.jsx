import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./css/core.css";
import About from "./pages/About/About";
import Business from "./pages/Business/Business";
import HomeClean from "./pages/HomeClean/HomeClean";
import Main from "./pages/Main/Main";
import Product from "./pages/Product/Product";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/product" exact element={<Product />} />
        <Route path="/homeclean" exact element={<HomeClean />} />
        <Route path="/business" exact element={<Business />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
