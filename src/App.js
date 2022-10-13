import { Route, Routes } from "react-router-dom";
import Confirm from "./Components/Confirmation/Confirm";
import Password from "./Components/Password/Password";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import About from "./Pages/AboutPage/About";
import Home from "./Pages/HomePage/Home";
import Testimonial from "./Pages/TestimonalPage/Testimonial";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="testimonial" element={<Testimonial/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="signin" element={<SignIn/>}/>
        <Route path="password" element={<Password/>}/>
        <Route path="confirm" element={<Confirm/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
