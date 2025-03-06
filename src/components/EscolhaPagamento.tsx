import React, { useState } from 'react'

const EscolhaPagamento = () => {


    const [checkboxValue, setCheckboxValue] = useState<any>("dddddd");

    return (
        <div>
            <h1 className="flex justify-start text-3xl font-bold text-customWhite ">
                Escolha como pagar
            </h1>

            <div className='w-1/2'>
                <div className='mt-2 flex justify-between bg-customGrayHover rounded-md text-sm'>
                    <div className='py-3 px-2 flex'>
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
                                <h2 className='ml-2'>Pix</h2>
                                <span className="absolute bg-white w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                            </label>

                        </div>

                        <div className="px-2">
                            <div className='mt-2'>
                                <span>Av dos Abacates, Rua 11</span>
                            </div>

                            <div className='mt-2'>
                                <span>Goiânia-Goiás</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mt-2 flex justify-between bg-customGrayHover rounded-md text-sm'>
                    <div className='py-3 px-2 flex'>
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
                                <h2 className='ml-2'>Boleto</h2>
                                <span className="absolute bg-white w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                            </label>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default EscolhaPagamento;