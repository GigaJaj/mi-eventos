import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
