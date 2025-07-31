import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import PrivacyPolicy from './pages/Policy/Policy';
import './reset.css';
import './App.css';
import { Toaster } from 'react-hot-toast';
import NotFound from './pages/NotFound/NotFound';
const App = () => {
  return (
    <Router>
      <Toaster position="right-top" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
