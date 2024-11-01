import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
