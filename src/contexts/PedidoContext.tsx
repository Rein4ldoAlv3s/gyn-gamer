import React, { createContext, useState, ReactNode, useContext } from 'react';
import Produtos from '../components/Produtos';
import { Produto } from '../constants';
import { CartContext } from '../contexts/CartContext';

interface PedidoContextType {
    carrinhoCompras: string | any;
    setCarrinhoCompras: React.Dispatch<React.SetStateAction<string | any>>;

    endereco: string | any;
    setEndereco: React.Dispatch<React.SetStateAction<string | any>>;

    pagamento: string | any;
    setPagamento: React.Dispatch<React.SetStateAction<string | any>>;

    // criar context oara pedido
}

// Crie o Contexto com um valor padrão inicial (opcionalmente undefined)
export const PedidoContext = createContext<PedidoContextType | undefined>(undefined);

// Interface para os props do PedidoProvider
interface PedidoProviderProps {
    children: ReactNode; // Define o tipo de children
}

// Componente Provider para passar os valores para os children
const PedidoProvider: React.FC<PedidoProviderProps> = ({ children }) => {


    const [carrinhoCompras, setCarrinhoCompras] = useState<string | any>();
    const [endereco, setEndereco] = useState<string | any>("");
    const [pagamento, setPagamento] = useState<string | any>("");


    return (
        <PedidoContext.Provider value={{ carrinhoCompras, setCarrinhoCompras, endereco, setEndereco, pagamento, setPagamento }}>
            {children}
        </PedidoContext.Provider>
    );
};

export default PedidoProvider;
