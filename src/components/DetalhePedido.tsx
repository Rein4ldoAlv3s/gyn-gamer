import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PedidoContext } from '../contexts/PedidoContext';
import { PedidosContext } from '../contexts/PedidosContext';
import { Pedido } from './type/Pedido';

const DetalhePedido = () => {

    const contextPedidos = useContext(PedidosContext);

    const { id } = useParams();
    const [pedido, setPedido] = useState<Pedido>();

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

    useEffect(() => {
        console.log(id);

        // busca o pedido pelo id
        const pedidoObj = contextPedidos?.pedidos.find(obj => obj.idPedido === id)
        setPedido(pedidoObj);

    }, [contextPedidos])


    return (
        <div>
            <h1 className="flex justify-start text-3xl font-bold text-customWhite ">
                Detalhe do Pedido
            </h1>
            <div>

                <div className="w-1/2 flex flex-col">
                    {/*detalhe item  */}
                    <div className='mt-2 flex justify-between bg-customGrayHover rounded-md text-sm'>
                        <div className='py-3 px-4 flex justify-between w-full items-center'>
                            <div className='flex flex-col'>
                                <div className='flex items-center'>
                                    <span>TRAVA P/NOTEBOOK C/CHAVE TR0001</span>
                                </div>

                                <div className='mt-2'>
                                    <span>{pedido?.carrinhoCompras.qtdTotalProdutos || ""} unid | </span>
                                    <Link className='text-blue-300' to={"/produtos/1"}>Ver detalhe</Link>
                                </div>

                                <div className='mt-2'>
                                    <div>
                                        <span>Produto: R$ 22,00</span>
                                    </div>
                                    <div>
                                        <span>Frete: R$ 6,00</span>
                                    </div>
                                    <div>
                                        <span>Total: R$ 28,00</span>
                                    </div>
                                </div>

                                <div className='mt-2'>
                                    <span>Pagamento: {pedido?.pagamento || ""}</span>
                                </div>
                            </div>
                            <div>
                                <img
                                    className='w-[100px]'
                                    src="https://images.tcdn.com.br/img/img_prod/1214924/trava_p_notebook_c_chave_tr0001_19524_1_6a1a53146c9ae27859a40eb406ce7c87.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    {/* detalhe envio */}
                    <div className='mt-2 flex justify-between bg-customGrayHover rounded-md text-sm'>
                        <div className='py-3 px-4 flex justify-between w-full items-center'>
                            <div className='flex flex-col w-4/5'>
                                <span className='text-orange-400 fe'>Aguardando Pagamento</span>

                                <span className='mt-1'>Pedido solicitado em {converterData(pedido?.dataPedido) || ""}</span>

                                <span className='mt-1 text-lg'>Prévisão de entrega após o pagamento</span>

                                <span className='mt-1'>Entregamos seu pacote na Av dos Abacates, Rua 11, Goiânia-Goiás, Perto do Rede Store Supermercado</span>
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
        </div>
    )
}

export default DetalhePedido