import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Package from "./pages/Package";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Element from "./pages/Element";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/package" element={<Package />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/element" element={<Element />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
