
import Creation from "./components/Creation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Vr from "./components/Vr";

function App() {
  return (
    <div className="w-full" >
      <div className="relative">
      <Hero />
      <div className="absolute top-0 left-0 right-0">
      <Navbar />
      </div>
      </div>
      <Vr/>
      <Creation />
     
     <Footer/>
    
    </div>
  );
}

export default App;
