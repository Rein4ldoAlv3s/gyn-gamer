import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PedidoContext } from '../contexts/PedidoContext';
import { PedidosContext } from '../contexts/PedidosContext';
import { Pedido } from './type/Pedido';

const DetalhePedido = () => {

    const contextPedidos = useContext(PedidosContext);

    const { id } = useParams();
    const [pedido, setPedido] = useState<any>();
    const [endereco, setEndereco] = useState<any>();

    const converterData = (dataPedido: string) => {
        const formatter = new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'full',
            timeStyle: 'short',
        });

        if (dataPedido) {
            const dataConvertida = formatter.format(new Date(dataPedido))
            return dataConvertida;
        }

    }

    function formatarMoeda(valor: any) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(valor);
    }

    useEffect(() => {
        console.log(id);

        // busca o pedido pelo id
        const pedidoObj = contextPedidos?.pedidos.find((obj: any) => obj.idPedido === id)
        setPedido(pedidoObj);
        setEndereco(pedidoObj?.endereco)

    }, [contextPedidos])


    return (
        <div>
            <h1 className="flex justify-start text-3xl font-bold text-customWhite ">
                Detalhe do Pedido
            </h1>

            <div className="w-1/2 flex flex-col ">
                {/*detalhe item  */}
                <div className='mt-2 bg-customGrayHover rounded-md text-sm py-3 px-4'>
                    {pedido?.carrinhoCompras.produtos.map((produto: any, index: number) => (
                        <div key={index}>
                            <div className=' flex justify-between w-full items-center'>
                                <div className='flex flex-col'>
                                    <div className='flex items-center'>
                                        <span>{produto.name || ""}</span>
                                    </div>

                                    <div className='mt-2'>
                                        <span>{produto.quantity || ""} unid | </span>
                                        <Link className='text-blue-300' to={"/produtos/" + produto.id}>Ver detalhe</Link>
                                    </div>

                                    <div className='mt-2'>
                                        <div>
                                            <span> {formatarMoeda(produto.price) || ""}</span>
                                        </div>
                                    </div>

                                    <div className='mt-2'>
                                        <span>Pagamento: {pedido?.pagamento || ""}</span>
                                    </div>


                                </div>
                                <div>
                                    <img
                                        className='w-[100px]'
                                        src={produto.img || ""}
                                        alt=""
                                    />
                                </div>
                            </div>

                            <hr className='my-3' />
                        </div>
                    ))}
                    <div className='text-base'>
                        Total: R$ {formatarMoeda(pedido?.carrinhoCompras.precoTotalCompras) || ""}
                    </div>

                </div>
                {/* detalhe envio */}
                <div className='mt-2 flex justify-between bg-customGrayHover rounded-md text-sm'>
                    <div className='py-3 px-4 flex justify-between w-full items-center'>
                        <div className='flex flex-col w-4/5'>
                            <span className='text-orange-400 fe'>Aguardando Pagamento</span>

                            <span className='mt-1'>Pedido solicitado em {converterData(pedido?.dataPedido) || ""}</span>

                            <span className='mt-1 text-lg'>Previsão de entrega após o pagamento</span>

                            <span className='mt-1'>Entregamos sua encomenda em {endereco?.logradouro}, {endereco?.cidade}-{endereco?.estado}, {endereco?.complemento}</span>

                            <div className='flex mt-4'>
                                <div className=''>
                                    <Link to="/produtos/1" className='bg-black rounded-full px-4 py-2'>Comprar novamente</Link>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/5 flex justify-end'>
                            <img src="/full.svg" className='w-[50px]' />
                        </div>
                    </div>
                </div>
                <div className='mt-3 self-end'>
                    <Link to="/meus-pedidos" className='bg-black rounded-full px-4 py-2'>Ver Pedidos</Link>
                </div>
            </div>

        </div>
    )
}

export default DetalhePedido