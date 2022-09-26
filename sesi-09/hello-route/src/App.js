import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import ProtectedRoute from "./components/protectedRoute";

import Home from "./pages/home";
import About from "./pages/about";
import AboutCompany from "./pages/aboutCompany";
import AboutMe from "./pages/aboutMe";
import Members from "./pages/members";
import Member from "./pages/member";
import Login from "./pages/login";
import Items from "./pages/items";
import Item from "./pages/item";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="about-company" element={<AboutCompany />} />
          <Route path="about-me" element={<AboutMe />} />
        </Route>
        <Route path="/members" element={<Members />}>
          <Route path=":memberName" element={<Member />} />
        </Route>
        <Route
          path="/items"
          element={
            <ProtectedRoute>
              <Items />
            </ProtectedRoute>
          }>
          <Route path=":itemId" element={<Item />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;