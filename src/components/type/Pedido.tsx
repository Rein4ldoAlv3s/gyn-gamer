export interface Pedido {
    idPedido: string | any;
    setIdPedido: React.Dispatch<React.SetStateAction<string | any>>;

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