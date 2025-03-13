import React from 'react'
import { FaHome } from 'react-icons/fa'

const DetalhePedido = () => {
    return (
        <div>
            <h1 className="flex justify-start text-3xl font-bold text-customWhite ">
                Detalhe do Pedido
            </h1>
            <div>
                <div className="w-1/2">
                    <div className='mt-2 flex justify-between bg-customGrayHover rounded-md text-sm'>
                        <div className='py-3 px-2 flex'>
                            {/* checkbox para selecionar endereço de entrega*/}

                            {/* dados endereço de entrega */}
                            <div className='px-2'>
                                <div className='flex items-center'>
                                    <FaHome size={20} className='mr-2 text-white ' />
                                    <span>Reinaldo Alves Lfdsfdsfdsfsd</span>
                                </div>

                                <div className='mt-2'>
                                    <span>Av dos Abacates, Rua 11</span>
                                </div>

                                <div>
                                    <span>Goiânia-Goiás</span>
                                </div>

                                <div className='mt-2'>
                                    <span>CEP 74000-000</span>
                                </div>

                                <div className='mt-2'>
                                    <span>Perto do Rede Store Supermercado</span>
                                </div>

                                <div>
                                    <span>Endereço Residencial</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetalhePedido