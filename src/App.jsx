import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
// import Slider from './components/Slider';
import AboutUs from "./Pages/AboutUs";
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0088FA] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} /> {/* ✅ صفحة About Us هنا */}
          <Route path="/library" element={<div className="text-white p-10">Library Page</div>} />
          <Route path="/me" element={<div className="text-white p-10">Me Page</div>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;