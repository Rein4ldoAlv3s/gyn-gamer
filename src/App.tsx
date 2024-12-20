import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Promocoes from "./components/Promocoes"
import Pcgamer from './components/Pcgamer';
import Produtos from './components/Produtos';
import Footer from './components/Footer';
import Notebooks from './components/Notebooks';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import MinhaConta from './components/MinhaConta';
import TesteUsestate from './components/TesteUsestate';

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
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/minha-conta" element={<MinhaConta />} />
            <Route path="/teste-usestate" element={<TesteUsestate />} />

          </Routes>
        </main>
        <Footer />
      </Router>

    </div>
  )
}

export default App