import React from 'react'

const MinhaConta = () => {
    return (
        <div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2">
                    <h1 className='text-white text-3xl text-center'>Acesse sua conta</h1>
                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-white">
                        Usuario
                    </label>
                    <div className="mt-2">
                        <input
                            id="first-name"
                            name="first-name"
                            type="email"
                            autoComplete="given-name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <label htmlFor="first-name" className="mt-2 block text-sm/6 font-medium text-white">
                        Senha
                    </label>
                    <div className="mt-2">
                        <input
                            id="first-name"
                            name="first-name"
                            type="password"
                            autoComplete="given-name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div className='mt-2'>
                        <button className='bg-black rounded-md text-slate-300 px-3 py-1.5 w-full'>Entrar</button>
                    </div>

                    <hr className='mt-3 w-1/2 m-auto' />
                    <h2>Novo na Gyn Gamer?</h2>
                    <a href="">Cadastre-se!</a>
                </div>
            </div>
        </div>
    )
}

export default MinhaConta