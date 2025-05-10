import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main className="container mx-auto py-4">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App; 