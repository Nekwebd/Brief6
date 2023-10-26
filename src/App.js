import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/index.css";
import Header from "./components/Header";
import Template from "./pages/Template";
import Home from "./pages/Home";
const App = () => {
  const products = useSelector((state) => state.productReducer);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hommes" element={<Template category="Hommes" />} />
          <Route path="/Femmes" element={<Template category="Femmes" />} />
          <Route path="/Enfants" element={<Template category="Enfants" />} />
          <Route path="/Ados" element={<Template category="Ados" />} />
          <Route path="/Bébés" element={<Template category="Bébés" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
