import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/layout/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
      <div className="font-['Poppins']">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;