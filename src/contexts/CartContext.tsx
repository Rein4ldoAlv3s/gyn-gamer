import React, { createContext, useState, ReactNode } from 'react';
import Produtos from '../components/Produtos';
import { Produto } from '../constants';

interface CartContextType {
    produtos: Produto[] | any;
    setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>;
    // qtd de um produto (ex: 2 mouses === 2 qtdProduto)
    // qtdProduto: number;
    // setQtdProduto: React.Dispatch<React.SetStateAction<number>>;
    // qtd de varios produtos (ex: 2 mouses + 1 teclado + 1 notebook === 4 qtdTotal)
    // qtdTotal = qtdProduto + qtdProduto + ...
    // qtdTotal: number[];
    // setQtdTotal: React.Dispatch<React.SetStateAction<number[]>>;
    //valor unitario de um produto (4 mouses de R$ 20,00 === R$ 80,00 valorProduto)
    // valorProduto: number;
    // setValorProduto: React.Dispatch<React.SetStateAction<number>>;
    //valor total de varios produtos (1 mouse de R$ 20,00 + 3 fones de ouvido de R$ 50,00 === R$ 170,00 valorTotal)
    // valorTotal: number[];
    // setValorTotal: React.Dispatch<React.SetStateAction<number[]>>;
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

    return (
        <CartContext.Provider value={{ produtos, setProdutos }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
