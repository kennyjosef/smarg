import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/AboutPage/About";
import Home from "./Pages/HomePage/Home";
import Testimonial from "./Pages/TestimonalPage/Testimonial";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="testimonial" element={<Testimonial/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
