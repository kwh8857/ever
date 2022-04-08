import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./css/core.css";
import About from "./pages/About/About";
import Business from "./pages/Business/Business";
import HomeClean from "./pages/HomeClean/HomeClean";
import Main from "./pages/Main/Main";
import Partner from "./pages/Partner/Partner";
import Product from "./pages/Product/Product";
function App() {
  const [agent, setAgent] = useState("pc");
  useEffect(() => {
    function change(e) {
      if (
        e.target.innerWidth < 1024 &&
        e.target.innerWidth > 767 &&
        agent !== "tablet"
      ) {
        setAgent("tablet");
      }
      if (e.target.innerWidth < 768 && agent !== "mb") {
        setAgent("mb");
      }
      if (e.target.innerWidth > 1023 && agent !== "pc") {
        setAgent("pc");
      }
    }
    window.addEventListener("resize", change);

    return () => {
      window.removeEventListener("resize", change);
    };
  }, [agent]);

  return (
    <Router>
      <Header agent={agent} />
      <Routes>
        <Route path="/" exact element={<Main agent={agent} />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/product" exact element={<Product />} />
        <Route path="/homeclean" exact element={<HomeClean />} />
        <Route path="/business" exact element={<Business />} />
        <Route path="/partner" exact element={<Partner />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
