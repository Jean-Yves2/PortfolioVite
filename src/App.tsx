import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Projets from "./components/Projets/Projets";

import "./App.css";

function App() {
  return (
    <NextUIProvider>
      <Router>
      <div className="containerAll">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </NextUIProvider>
  );
}
export default App;
