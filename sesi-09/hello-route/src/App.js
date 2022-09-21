import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import ProtectedRoute from "./components/protectedRoute";
import AboutCompany from "./pages/aboutCompany";
import Home from "./pages/home";
import Item from "./pages/item";
import Login from "./pages/login";
import Member from "./pages/member";
import Members from "./pages/members";
import About from "./pages/about";
import AboutMe from "./pages/aboutMe";
import Items from "./pages/items";

function App() {
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