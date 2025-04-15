import React, { createContext, ReactNode, useState } from 'react';

interface PedidoContextType {
    idPedido: string;
    setIdPedido: React.Dispatch<React.SetStateAction<string>>;

    carrinhoCompras: any[];
    setCarrinhoCompras: React.Dispatch<React.SetStateAction<any[]>>;

    endereco: string | any;
    setEndereco: React.Dispatch<React.SetStateAction<string | any>>;

    pagamento: string | any;
    setPagamento: React.Dispatch<React.SetStateAction<string | any>>;

    // criar context oara pedido
    dataPedido: number | any;
    setDataPedido: React.Dispatch<React.SetStateAction<number | any>>;

}

// Crie o Contexto com um valor padrão inicial (opcionalmente undefined)
export const PedidoContext = createContext<PedidoContextType | undefined>(undefined);

// Interface para os props do PedidoProvider
interface PedidoProviderProps {
    children: ReactNode; // Define o tipo de children
}

// Componente Provider para passar os valores para os children
const PedidoProvider: React.FC<PedidoProviderProps> = ({ children }) => {


    const [carrinhoCompras, setCarrinhoCompras] = useState<any[]>([]);
    const [endereco, setEndereco] = useState<string | any>("");
    const [pagamento, setPagamento] = useState<string | any>("");
    const [dataPedido, setDataPedido] = useState<number | any>(0);
    const [idPedido, setIdPedido] = useState<string | any>("");


    return (
        <PedidoContext.Provider value={{ carrinhoCompras, setCarrinhoCompras, endereco, setEndereco, pagamento, setPagamento, dataPedido, setDataPedido, idPedido, setIdPedido }}>
            {children}
        </PedidoContext.Provider>
    );
};

export default PedidoProvider;
