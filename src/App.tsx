import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <NextUIProvider>
      <div className="containerAll">
        <NavBar />
        <Footer />
      </div>
    </NextUIProvider>
  );
}

export default App;
