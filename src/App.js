// Main Imports
import './App.css';
import './scss/style.scss';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";


// Global Imports
import Navbar from './components/Globals/Navbar';
import Footer from './components/Globals/Footer';

// Pages Imports
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Contactp from './components/Pages/Contactp';
import Career from './components/Pages/Career';


function App() {
  return (
    <>
      <Router>
      <Navbar />
      
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Contact" element={<Contactp />}></Route>
          <Route path="/Career" element={<Career />}></Route>
        </Routes>

      <Footer />
      </Router>
      
    </>
  );
}

export default App;
