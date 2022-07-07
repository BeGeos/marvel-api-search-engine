// Import components
import Navbar from "./components/Navbar";
import NavItem from "./components/Navbar/NavItem";
import Logo from "./components/Navbar/Logo";
import About from "./components/About";
import HeroDetails from "./components/HeroDetails";
import Home from "./components/Home";

// Import dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar logo={<Logo text={"Marbabel"} />}>
        <NavItem to={"/"} text={"Home"} />
        <NavItem to={"/about"} text={"About"} />
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<HeroDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
