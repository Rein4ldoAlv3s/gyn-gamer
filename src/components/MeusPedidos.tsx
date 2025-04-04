import { Link } from 'react-router-dom'

const MeusPedidos = () => {
    return (
        <div>
            <div className='flex items-center'>
                <h1 className="flex justify-start text-3xl font-bold text-customWhite ">
                    Meus Pedidos
                </h1>
            </div>
            <div className='py-1'>
                1 Pedido
            </div>
            <div>
                <div className="w-1/2">
                    {/*detalhe item  */}
                    <div className='mt-2 bg-customGrayHover rounded-md text-sm'>
                        <div className=''>
                            <div className='w-full py-3 px-5 text-sm'>
                                <span>13 de março</span>
                            </div>
                            <hr className=" border-[1/2px] border-gray-400" />
                        </div>
                        <div className='flex justify-between py-3 px-5'>
                            <div className='flex'>
                                <div className='p-2 border-[3px] border-white rounded-md bg-white'>
                                    <img
                                        className='w-[80px]'
                                        src="https://images.tcdn.com.br/img/img_prod/1214924/trava_p_notebook_c_chave_tr0001_19524_1_6a1a53146c9ae27859a40eb406ce7c87.png"
                                        alt=""
                                    />
                                </div>
                                <div className='ml-2'>
                                    <div className='flex'>
                                        <span className='text-orange-400'>Aguardando Pagamento</span>
                                    </div>
                                    <div className='mt-1'>
                                        <span className=''>TRAVA P/NOTEBOOK C/CHAVE TR0001</span>
                                    </div>
                                    <div className='mt-1'>
                                        <span className=''>Prévisão de entrega após o pagamento</span>
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
                    {/* detalhe envio */}

                </div>

            </div>
        </div>
    )
}

export default MeusPedidos