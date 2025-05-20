import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <div className="pt-16">
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App; 