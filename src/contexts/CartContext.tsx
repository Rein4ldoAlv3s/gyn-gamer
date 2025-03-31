import React, { createContext, ReactNode, useState } from 'react';
import { Produto } from '../constants';

interface CartContextType {
    produtos: Produto[] | any;
    setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>;
    // qtd de um produto (ex: 2 mouses === 2 qtdProduto)
    qtdProduto: number;
    setQtdProduto: React.Dispatch<React.SetStateAction<number>>;

    // criar context oara pedido
}

// Crie o Contexto com um valor padrão inicial (opcionalmente undefined)
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Interface para os props do CartProvider
interface CartProviderProps {
    children: ReactNode; // Define o tipo de children
}

// Componente Provider para passar os valores para os children
const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [produtos, setProdutos] = useState<Produto[] | any>([]);
    const [qtdProduto, setQtdProduto] = useState<number | any>(0);

    return (
        <CartContext.Provider value={{ produtos, setProdutos, qtdProduto, setQtdProduto }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
