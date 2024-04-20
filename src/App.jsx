import "./App.css";
import Home from "./pages/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HeroHome from "./pages/Heros";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<HeroHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {/* <HeroHome/> */}
    </>
  );
}

export default App;
