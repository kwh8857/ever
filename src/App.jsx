import { useEffect, useState, useCallback } from "react";
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
  const change = useCallback(
    (e) => {
      if (
        e.target.innerWidth < 1025 &&
        e.target.innerWidth > 767 &&
        agent !== "tablet"
      ) {
        setAgent("tablet");
      }
      if (e.target.innerWidth < 768 && agent !== "mb") {
        setAgent("mb");
      }
      if (e.target.innerWidth > 1025 && agent !== "pc") {
        setAgent("pc");
      }
    },
    [agent]
  );
  useEffect(() => {
    window.addEventListener("resize", change);

    return () => {
      window.removeEventListener("resize", change);
    };
  }, [agent, change]);
  useEffect(() => {
    const size = window.innerWidth;
    if (size < 1025 && size > 767) {
      setAgent("tablet");
    }
    if (size < 768) {
      setAgent("mb");
    }
    if (size > 1025) {
      setAgent("pc");
    }

    return () => {};
  }, []);

  return (
    <Router>
      <Header agent={agent} />
      <Routes>
        <Route path="/" exact element={<Main agent={agent} />} />
        <Route path="/about" exact element={<About agent={agent} />} />
        <Route path="/product" exact element={<Product agent={agent} />} />
        <Route path="/homeclean" exact element={<HomeClean agent={agent} />} />
        <Route path="/business" exact element={<Business agent={agent} />} />
        <Route path="/partner" exact element={<Partner agent={agent} />} />
      </Routes>
      <Footer agent={agent} />
    </Router>
  );
}

export default App;
