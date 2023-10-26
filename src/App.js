import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/index.css";
import Header from "./components/Header";
import Hommes from "./pages/Homme";
import Femmes from "./pages/Femme";
import Ados from "./pages/Ado";
import Enfants from "./pages/Enfant";
import Home from "./pages/Home";
import Bébés from "./pages/Bebe";
const App = () => {
  const products = useSelector((state) => state.productReducer);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hommes" element={<Hommes />} />
          <Route path="/Femmes" element={<Femmes />} />
          <Route path="/Enfants" element={<Enfants />} />
          <Route path="/Ados" element={<Ados />} />
          <Route path="/Bébés" element={<Bébés />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
