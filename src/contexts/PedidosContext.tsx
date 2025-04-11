import React, { createContext, ReactNode, useState } from 'react';

interface PedidoContextType {
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
export const PedidosContext = createContext<PedidoContextType[] | undefined>(undefined);

// Interface para os props do PedidoProvider
interface PedidosProviderProps {
    children: ReactNode; // Define o tipo de children
}

// Componente Provider para passar os valores para os children
const PedidosProvider: React.FC<PedidosProviderProps> = ({ children }) => {


    const [carrinhoCompras, setCarrinhoCompras] = useState<any[]>([]);
    const [endereco, setEndereco] = useState<string | any>("");
    const [pagamento, setPagamento] = useState<string | any>("");
    const [dataPedido, setDataPedido] = useState<number | any>(0);


    return (
        <PedidosContext.Provider value={[{ carrinhoCompras, setCarrinhoCompras, endereco, setEndereco, pagamento, setPagamento, dataPedido, setDataPedido }]}>
            {children}
        </PedidosContext.Provider>
    );
};

export default PedidosProvider;
