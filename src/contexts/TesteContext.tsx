import { createContext, ReactNode, useState } from "react";
import { CarrinhoContextType, ItemCarrinho } from "../components/type/ItemCarrinho";

// Criamos o contexto com um valor padrão nulo
export const CarrinhoContext = createContext<CarrinhoContextType | null>(null);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
    const [carrinhoCompras, setCarrinhoCompras] = useState<ItemCarrinho[]>([]);

    const adicionarAoCarrinho = (item: ItemCarrinho) => {
        setCarrinhoCompras((prev) => [...prev, item]);
    };

    const removerDoCarrinho = (id: number) => {
        setCarrinhoCompras((prev) => prev.filter((item) => item.id !== id));
    };

    const limparCarrinho = () => {
        setCarrinhoCompras([]);
    };

    return (
        <CarrinhoContext.Provider
            value={{ carrinhoCompras, adicionarAoCarrinho, removerDoCarrinho, limparCarrinho }}
        >
            {children}
        </CarrinhoContext.Provider>
    );
};
