import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePortfolio from './pages/HomePortfolio/HomePortfolio';
import About from "./components/home/about";
import Experience from "./components/home/experience";
import Education from "./components/home/education";
import Skills from "./components/home/skills";
import Interests from "./components/home/interests";
import Sidebar from './components/Sidebar/Sidebar';
import Awards from "./components/home/awards"

function App() {
  return (
    <div className="row">
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path="/About" element={<About/>} />
          <Route path="/Experience" element={<Experience/>} />
          <Route path="/Education" element={<Education/>} />
          <Route path="/Skills" element={<Skills/>} />
          <Route path="/Interests" element={<Interests/>} />
          <Route path="/Awards" element={<Awards/>} />
          <Route path="/" element={<HomePortfolio/>} />
        </Routes>
      </BrowserRouter>
        </div>
  );
}

export default App;
