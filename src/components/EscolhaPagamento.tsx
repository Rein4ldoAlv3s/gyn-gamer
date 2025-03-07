import React, { useState } from 'react'

const EscolhaPagamento = () => {


    const [checkboxValue, setCheckboxValue] = useState<any>("dddddd");

    return (
        <div>
            <h1 className="flex justify-start text-3xl font-bold text-customWhite ">
                Escolha como pagar
            </h1>

            <div className='w-1/2'>

                {/* div pai de um card */}
                <div className='flex items-center py-3 px-2 mt-2 bg-customGrayHover rounded-md text-sm h-20'>
                    {/* checkbox para selecionar endereço de entrega*/}
                    <div className="inline-flex items-center">
                        <label className="relative flex items-center cursor-pointer">
                            <input
                                name="color"
                                type="radio"
                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                                readOnly
                                onChange={e => setCheckboxValue(e.target.value)}
                            />
                            <span className="absolute bg-white w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>

                        </label>
                    </div>

                    {/* imagem do pix */}
                    <img src="/bf_v6_pix.svg" className='w-[50px]' />

                    {/* texto sobre o pix */}
                    <div>
                        <div className='mb-1 font-bold'>
                            <span>Pix</span>
                        </div>
                        <div className='font-light'>
                            <span>Aprovação imediata</span>
                        </div>
                    </div>
                </div>


                <div className='flex items-center py-3 px-2 mt-2 bg-customGrayHover rounded-md text-sm h-20'>
                    {/* checkbox para selecionar endereço de entrega*/}
                    <div className="inline-flex items-center">
                        <label className="relative flex items-center cursor-pointer">
                            <input
                                name="color"
                                type="radio"
                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                                readOnly
                                onChange={e => setCheckboxValue(e.target.value)}
                            />
                            <span className="absolute bg-white w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>

                        </label>
                    </div>

                    {/* imagem do pix */}
                    <img src="/bf_v6_boleto.svg" className='w-[50px]' />

                    {/* texto sobre o pix */}
                    <div>
                        <div className='mb-1'>
                            <div className='font-bold'>
                                <span>Boleto</span>
                            </div>
                            <div className='font-light'>
                                <span>Aprovação em 1 ou 2 dias úteis</span>
                            </div>
                        </div>
                    </div>
                </div>





            </div>

        </div>
    )
}
export default EscolhaPagamento;