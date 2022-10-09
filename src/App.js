import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Components/SignIn/SignIn";
// import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp/SignUp";
import About from "./Pages/AboutPage/About";
import Home from "./Pages/HomePage/Home";
import Testimonial from "./Pages/TestimonalPage/Testimonial";


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */} 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="testimonial" element={<Testimonial/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="signin" element={<SignIn/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
