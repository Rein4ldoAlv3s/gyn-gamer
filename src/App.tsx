import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Promocoes from "./components/Promocoes"
import Pcgamer from './components/Pcgamer';
import Produtos from './components/Produtos';
import Footer from './components/Footer';
import Notebooks from './components/Notebooks';

function App() {

  return (
    <div>
      {/* Conteudo Body */}
      <Router>
        <Navbar />
        <main className="container mx-auto px-8 pt-4 min-h-[calc(100vh-6.875rem)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/promocoes" element={<Promocoes />} />
            <Route path="/pcgamer" element={<Pcgamer />} />
            <Route path="/produtos/:id" element={<Produtos />} />
            <Route path="/notebooks" element={<Notebooks />} />
          </Routes>
        </main>
        <Footer />
      </Router>

    </div>
  )
}

export default App