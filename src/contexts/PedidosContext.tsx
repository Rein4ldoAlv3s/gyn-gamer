import React, { createContext, ReactNode, useState } from 'react';

interface Pedido {
    idPedido: string;
    setIdPedido: React.Dispatch<React.SetStateAction<string>>;

    carrinhoCompras: any[];
    setCarrinhoCompras: React.Dispatch<React.SetStateAction<any[]>>;

    endereco: string | any;
    setEndereco: React.Dispatch<React.SetStateAction<string | any>>;

    pagamento: string | any;
    setPagamento: React.Dispatch<React.SetStateAction<string | any>>;

    // criar context para pedido
    dataPedido: number | any;
    setDataPedido: React.Dispatch<React.SetStateAction<number | any>>;
}

interface PedidoContextType {
    pedidos: Pedido[];
    setPedidos: React.Dispatch<React.SetStateAction<Pedido[]>>;
}

// Crie o Contexto com um valor padrão inicial (opcionalmente undefined)
export const PedidosContext = createContext<PedidoContextType | undefined>(undefined);

// Interface para os props do PedidoProvider
interface PedidosProviderProps {
    children: ReactNode; // Define o tipo de children
}

// Componente Provider para passar os valores para os children
const PedidosProvider: React.FC<PedidosProviderProps> = ({ children }) => {

    const [pedidos, setPedidos] = useState<Pedido[]>([])

    return (
        <PedidosContext.Provider value={{ pedidos, setPedidos }}>
            {children}
        </PedidosContext.Provider>
    );
};

export default PedidosProvider;
