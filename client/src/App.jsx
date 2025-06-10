import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";
import About from "./Pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
