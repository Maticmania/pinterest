import "./App.css";
import Home from "./pages/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HeroHome from "./pages/Heros";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import ScrollToTop from "./components/SmoothScrolling";


function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/detail/:productId" element={<Detail />} />
          <Route path="/" element={<HeroHome />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {/* <HeroHome/> */}
    </>
  );
}

export default App;
