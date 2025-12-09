import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/inicio/inicio';
import CS16 from './paginas/CS1.6/16';
import CSGO from './paginas/CS-GO/csgo';
import CS2 from './paginas/CS2/cs2';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cs16" element={<CS16 />} />
          <Route path="/csgo" element={<CSGO />} />
          <Route path="/cs2" element={<CS2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
