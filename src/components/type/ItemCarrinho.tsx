export type ItemCarrinho = {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
};

export type CarrinhoContextType = {
    carrinhoCompras: ItemCarrinho[];
    adicionarAoCarrinho: (item: ItemCarrinho) => void;
    removerDoCarrinho: (id: number) => void;
    limparCarrinho: () => void;
};
