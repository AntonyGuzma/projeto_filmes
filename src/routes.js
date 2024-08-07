import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Erro from "./pages/Erro";
import Favoritos from "./pages/Favoritos";

function RoutesApp() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filme/:id" element={<Filme />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="*" element={<Erro />} />
          </Routes>
        </div>
        <Footer autor="Antony Gusmão" />
      </div>
    </BrowserRouter>
  );
}

export default RoutesApp;
