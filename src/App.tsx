import Header from "./components/Header"
import Home from "./pages/Home"
import Market from "./pages/Market";
import Stats from "./pages/Stats";
import Cart from "./pages/Cart";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Login from "./pages/Login";


import {  Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
       <Header />

		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/market" element={<Market />} />
			<Route path="/stats" element={<Stats />} />
			<Route path="/create" element={<Create />} />
			<Route path="/login" element={<Login />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/cart" element={<Cart />} />
		</Routes>
	
     
    </>
  )
}

export default App
