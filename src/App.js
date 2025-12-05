import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/inicio/inicio';
import CS16 from './paginas/CS1.6/16';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cs16" element={<CS16 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
