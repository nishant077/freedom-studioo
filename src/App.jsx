import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './component/Homepage';
import About from './About/About';
import Service from './Services/Service';
import Connect from './Connect/Connect';
import DynamicPage from './Map/InteractiveMap/DynamicPage';
import MapMain from './Map/MapMain';
import Happening from './Map/InteractiveMap/Happening';
import KnowledgeDesign from './Services/KnowledgeDesign';
import StrategyDevelopment from './Services/StrategyDevelopment';
import DigitalDevelopment from './Services/DigitalDevelopment';
import Project from './Project/Project';
import LearningCorner from './LearningCorner/LearningCorner';

 

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
          <Route path="/dynamic/:id" element={<DynamicPage />} />
          <Route path="/map" element={<MapMain />} />
          <Route path='/happening' element={<Happening/>}/>
          <Route path='/services/knowledge-design' element={<KnowledgeDesign/>}/>
          <Route path='/services/strategy-development' element={<StrategyDevelopment/>}/>
          <Route path='/services/digital-communication' element={<DigitalDevelopment/>}/>
          <Route path='/project' element={<Project/>}/>
         <Route path='/learning-corner' element={<LearningCorner/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
