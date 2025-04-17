export interface Pedido {
    idPedido: string;
    setIdPedido: React.Dispatch<React.SetStateAction<string>>;

    carrinhoCompras: any;
    setCarrinhoCompras: React.Dispatch<React.SetStateAction<any>>;

    endereco: string | any;
    setEndereco: React.Dispatch<React.SetStateAction<string | any>>;

    pagamento: string | any;
    setPagamento: React.Dispatch<React.SetStateAction<string | any>>;

    // criar context para pedido
    dataPedido: number | any;
    setDataPedido: React.Dispatch<React.SetStateAction<number | any>>;
}
