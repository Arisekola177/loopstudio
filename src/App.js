import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
