import React, { createContext, useState, ReactNode } from 'react';

// Defina a interface para o valor do contexto
interface CartContextType {
    auth: boolean;
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

// Crie o Contexto com um valor padrão inicial (opcionalmente undefined)
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Interface para os props do CartProvider
interface CartProviderProps {
    children: ReactNode; // Define o tipo de children
}

// Componente Provider para passar os valores para os children
const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState(false);

    return (
        <CartContext.Provider value={{ auth, setAuth }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
