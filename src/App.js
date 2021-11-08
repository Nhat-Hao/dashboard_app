import './App.css';
import DashboardMenu from './components/Layout/DashboardMenu';
import DashboardGSM from './components/Layout/DashboardGSM';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return ( 
      <Router>
        <Routes>
          <Route exact path="/" element={<DashboardMenu />} />
          <Route exact path="/gsm" element={<DashboardGSM />} />
        </Routes>
      </Router>       
  );
}

export default App;
