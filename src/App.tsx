import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { useContext } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import { AuthContext } from './contexts/AuthContext';
import PrivateRoutes from './routes/private.routes';
import PublicRoutes from './routes/public.routes';

function App() {

  const auth = useContext(AuthContext)?.auth
  console.log(auth);
  const privateRoutes = PrivateRoutes();
  const publicRoutes = PublicRoutes();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark', // Ativa o modo escuro
      background: {
        default: "#212121" // Define a cor de fundo do body
      }
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Router>
          <Navbar />
          <main className="container mx-auto px-8 pt-4 pb-10 min-h-[calc(100vh-6.875rem)]">
            <Routes>
              {auth ? privateRoutes : publicRoutes}
            </Routes>
          </main>
          <Footer />
        </Router>

      </div>
    </ThemeProvider>
  )
}

export default App