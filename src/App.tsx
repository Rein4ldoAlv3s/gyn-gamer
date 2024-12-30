import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import { useContext, useEffect, useState } from 'react';
import PrivateRoutes from './routes/private.routes';
import { AuthContext } from './contexts/AuthContext';
import PublicRoutes from './routes/public.routes';

function App() {

  const auth = useContext(AuthContext)?.auth
  console.log(auth);
  const privateRoutes = PrivateRoutes();
  const publicRoutes = PublicRoutes();

  return (
    <div>
      {/* Conteudo Body */}
      <Router>
        <Navbar />
        <main className="container mx-auto px-8 pt-4 min-h-[calc(100vh-6.875rem)]">
          <Routes>
            {auth ? privateRoutes : publicRoutes}
          </Routes>
        </main>
        <Footer />
      </Router>

    </div>
  )
}

export default App