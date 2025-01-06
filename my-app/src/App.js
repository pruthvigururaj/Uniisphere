import logo from './logo.svg';
import './App.css';
import Loginform from './Components/Loginform';
import Landingpage from './Components/Landingpage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  alert("Click on Login Button to View Landing page");
  return (
    
      <Router>
         <Routes>
           <Route path="/" element={<Loginform />} />
           <Route path="/landing" element={<Landingpage />} />
         </Routes>
      </Router>
    
  );
}

export default App;
