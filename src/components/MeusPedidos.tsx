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
            <div>
                {pedidos?.map((pedido: any, index: number) => (

                    <div key={index} className="w-1/2">
                        {/*detalhe item  */}
                        <div className='mt-2 bg-customGrayHover rounded-md text-sm'>
                            <div className=''>
                                <div className='w-full py-3 px-5 text-sm'>
                                    <span>{pedido.dataPedido}</span>
                                </div>
                            </div>
                            {pedido.carrinhoCompras.produtos.map((produto: any, index: number) => (
                                <div key={index}>
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
                                                    <span className='text-white'>R$ {produto.price}</span>
                                                </div>
                                                <div className='flex mt-1'>
                                                    <span className='text-white'>x{produto.quantity}</span>
                                                </div>
                                                <div className='flex mt-1'>
                                                    <span className='text-orange-400'>Aguardando Pagamento</span>
                                                </div>


                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <div className='mb-5'>
                                                <Link to="/detalhe-pedido" className='bg-black rounded-full px-4 py-2'>Ver compra</Link>
                                            </div>
                                            <div>
                                                <Link to="/produtos/1" className='bg-black rounded-full px-4 py-2'>Comprar novamente</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        {/* detalhe envio */}

                    </div>

                ))}
            </div>
        </div>
    )
}

export default MeusPedidos