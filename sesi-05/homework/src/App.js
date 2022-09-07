//import react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import pages
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import MeetUp from "./pages/meetup/MeetUp"
import Explore from "./pages/explore/Explore"
//import navigation
import Navigation from "./components/Navigation"
//import footer
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/create-meetup" element={<MeetUp/>} />
            <Route path="/explore" element={<Explore/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App