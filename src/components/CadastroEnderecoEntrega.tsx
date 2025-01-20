import React from 'react'

const CadastroEnderecoEntrega = () => {
    return (
        <div className=" flex flex-col max-w-lg mx-auto pb-5">
            <h1 className='text-white text-3xl text-center'>Adicionar Endereço</h1>

            <label htmlFor="name" className="mt-2 block text-sm/6 font-medium text-white">
                Nome Destinatário
            </label>
            <div className="mt-2">
                <input
                    id="name"
                    name="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>

            <div className='flex justify-between mt-3'>
                <div className='w-full mr-2'>
                    <label htmlFor="logradouro" className="block text-sm/6 font-medium text-white">
                        Logradouro
                    </label>
                    <input
                        id="logradouro"
                        name="logradouro"
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
                <div className='w-full'>
                    <label htmlFor="street" className="block text-sm/6 font-medium text-white">
                        Rua
                    </label>
                    <input
                        id="street"
                        name="street"
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>
            <div className='flex justify-between mt-3'>
                <div className='w-full mr-2'>
                    <label htmlFor="state" className="mt-2 block text-sm/6 font-medium text-white">
                        Estado
                    </label>
                    <div className="mt-2">
                        <input
                            id="state"
                            name="state"
                            autoComplete="given-name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                <div className='w-full'>
                    <label htmlFor="city" className="mt-2 block text-sm/6 font-medium text-white">
                        Cidade
                    </label>
                    <div className="mt-2">
                        <input
                            id="city"
                            name="city"
                            autoComplete="given-name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <label className='text-sm font-medium text-white' htmlFor='gender'>Selecione o tipo de endereço:</label><br />

                <input type="radio" id="masculino" name="gender" value="masculino" />
                <label className='text-sm font-medium text-white' htmlFor="masculino">Residencial</label><br />

                <input type="radio" id="feminino" name="gender" value="feminino" />
                <label className='text-sm font-medium text-white' htmlFor="feminino">Comercial</label><br />
            </div>
            <label htmlFor="first-name" className="mt-2 block text-sm/6 font-medium text-white">
                CEP
            </label>
            <div className="mt-2">
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
            <label htmlFor="first-name" className="mt-2 block text-sm/6 font-medium text-white">
                Complemento
            </label>
            <div className="mt-2">
                <input
                    id="password"
                    name="password"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
            <div className='mt-3'>
                <button className='bg-black rounded-md text-slate-300 px-3 py-2 w-full '>Criar conta</button>
            </div>


        </div>
    )
}

export default CadastroEnderecoEntrega