import React, { createContext, ReactNode, useState } from 'react';
import { Pedido } from '../components/type/Pedido';

interface PedidoContextType {
    pedidos: Pedido[] | any;
    setPedidos: React.Dispatch<React.SetStateAction<Pedido[] | any>>;
}


// Crie o Contexto com um valor padrão inicial (opcionalmente undefined)
export const PedidosContext = createContext<PedidoContextType | undefined>(undefined);

interface PedidoProviderProps {
    children: ReactNode; // Define o tipo de children

}

// Componente Provider para passar os valores para os children
const PedidosProvider: React.FC<PedidoProviderProps> = ({ children }) => {

    const [pedidos, setPedidos] = useState<Pedido[]>([])

    return (
        <PedidosContext.Provider value={{ pedidos, setPedidos }}>
            {children}
        </PedidosContext.Provider>
    );
};

export default PedidosProvider;
