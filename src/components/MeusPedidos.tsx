import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PedidosContext } from '../contexts/PedidosContext';

const MeusPedidos = () => {

    const contextPedidos = useContext(PedidosContext);
    const [pedidos, setPedidos] = useState<any[] | undefined>();

    useEffect(() => {
        setPedidos(contextPedidos?.pedidos)
    }, [])

    useEffect(() => {
        console.log("Pedidos atualizados:", pedidos);
    }, [pedidos]);

    const converterData = (dataPedido: string) => {
        const formatter = new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'short',
            timeStyle: 'short',
        });

        if (dataPedido) {
            const dataConvertida = formatter.format(new Date(dataPedido))
            return dataConvertida;
        }

    }

    const formatarMoeda = (valor: any) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(valor);
    }


    return (
        <div>
            <div className='flex items-center'>
                <h1 className="flex justify-start text-3xl font-bold text-customWhite ">
                    Meus Pedidos
                </h1>
            </div>
            <div className='py-1'>
                {(pedidos ?? []).length > 0 ? (
                    <span className='text-sm'>Você possui {pedidos?.length} pedido(s)</span>
                ) : (
                    <span className='text-sm'>Você não possui pedidos </span>
                )}
            </div>
            <div className='mb-10'>
                {pedidos?.map((pedido: any, index: number) => (
                    <div className='w-full mt-2 pb-2 bg-customGrayHover rounded-md text-sm'>

                        <div className='w-full py-3 px-5 flex '>
                            <span>{converterData(pedido?.dataPedido) || ""}</span>
                            <span className='text-orange-400 text-sm m-auto'> Aguardando Pagamento</span>
                            <div className=''>
                                <Link to={"/detalhe-pedido/" + pedido.idPedido} className='bg-black rounded-full px-4 py-2'>Ver Pedido</Link>
                            </div>
                        </div>

                        {pedido.carrinhoCompras.produtos.map((produto: any, index: number) => (
                            <div>
                                <hr className=" border-[1/2px] border-gray-400" />
                                <div className='flex justify-between py-3 px-5'>
                                    <div className='flex'>
                                        <div className='p-2 border-[3px] border-white rounded-md bg-white'>
                                            <img
                                                className='w-[80px]'
                                                src={produto.img}
                                                alt=""
                                            />
                                        </div>
                                        <div className='ml-2 flex flex-col justify-center'>
                                            <div className='flex'>
                                                <span className='text-white'>{produto.name}</span>
                                            </div>
                                            <div className='flex mt-1'>
                                                <span className='text-white'>{formatarMoeda(produto.price)}</span>
                                            </div>
                                            <div className='flex mt-1'>
                                                {(produto.quantity > 1) ? (
                                                    <span className='text-sm'>{produto.quantity} unidades</span>
                                                ) : (
                                                    <span className='text-sm'>{produto.quantity} unidade </span>
                                                )}

                                            </div>

                                        </div>
                                    </div>
                                    {/* <div className='flex flex-col justify-center'>
                                        <div className='mb-5'>
                                            <Link to="/detalhe-pedido" className='bg-black rounded-full px-4 py-2'>Ver compra</Link>
                                        </div>
                                        <div>
                                            <Link to="/produtos/1" className='bg-black rounded-full px-4 py-2'>Comprar novamente</Link>
                                        </div>
                                    </div> */}
                                </div>

                            </div>
                        ))}
                        <span className='text-base pl-5'>Total: {formatarMoeda(pedido.carrinhoCompras.precoTotalCompras) || ""} </span>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default MeusPedidos