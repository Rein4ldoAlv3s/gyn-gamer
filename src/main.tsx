import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AuthProvider from './contexts/AuthContext'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CartProvider from './contexts/CartContext.tsx'
import PedidoProvider from './contexts/PedidoContext.tsx'
import PedidosProvider from './contexts/PedidosContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <PedidosProvider>
        <PedidoProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </PedidoProvider>
      </PedidosProvider>
    </AuthProvider>
  </React.StrictMode>,
)
