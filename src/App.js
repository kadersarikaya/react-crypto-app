import React from "react";
import Home from "./pages/Home";
import CryptoDetail from "./pages/CryptoDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/coins/:id" element={<CryptoDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
