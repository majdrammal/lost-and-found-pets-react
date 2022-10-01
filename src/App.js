import './App.css';
import HomePage from './pages/HomePage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MissingPage from './pages/MissingPage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import FoundPage from './pages/FoundPage';
import Report from './pages/Report';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/missing" element={<MissingPage />} />
          <Route exact path="/found" element={<FoundPage />} />
          <Route exact path="/report" element={<Report />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
