import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import "./index.css"
import Privacypolicy from './components/privacypolicy/Privacypolicy';
import Footer from './components/footer/Footer';
import Termandcondition from './components/termandcondition/Termandcondition';
import Contactus from './components/contactus/Contactus';
import Helpcenter from './components/helpcenter/Helpcenter';
import Aboutus from './components/aboutus/Aboutus';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/privacypolicy" element={<Privacypolicy />} />
          <Route exact path="/termandcondition" element={<Termandcondition />} />
          <Route exact path="/helpandsupport" element={<Helpcenter />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/contactus" element={<Contactus />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
