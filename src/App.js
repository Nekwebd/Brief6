import React from "react";
import { useSelector } from "react-redux";

import { isEmpty } from "./components/Utils";
import Header from "./components/Header";
import Card from "./components/Card";
import "./styles/index.css";

const App = () => {
  const products = useSelector((state) => state.productReducer);

  return (
    <div className="App">
      <Header />
      <div className="container">
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Enfant />} />
          <Route path="/" element={<Ado />} />
          <Route path="/" element={<Bebe />} />
          <Route path="/" element={<Homme />} />
          <Route path="/" element={<Femme />} />
        </Routes> */}
        <div className="container flex flex-wrap">
          {!isEmpty(products) &&
            products.map((product, index) => (
              <Card product={product} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
