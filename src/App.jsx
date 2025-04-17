import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './component/Homepage';
import About from './About/About';
import Service from './Services/Service';
import Connect from './Connect/Connect';

 

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navigation /> */}
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
