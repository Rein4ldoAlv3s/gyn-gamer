import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Select from "react-select";
import { Produto, PRODUTOS } from '../constants'

const Cadastro = () => {

    return (
        <div className="mt-10 flex flex-col max-w-lg mx-auto ">
            <h1 className='text-white text-3xl text-center'>Criar minha conta</h1>

            <div className='flex justify-between mt-3'>
                <div className='w-full mr-2'>
                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-white">
                        Nome
                    </label>
                    <input
                        id="first-name"
                        name="first-name"
                        type="email"
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
                <div className='w-full'>
                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-white">
                        Sobrenome
                    </label>
                    <input
                        id="first-name"
                        name="first-name"
                        type="email"
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>








            <label htmlFor="first-name" className="mt-2 block text-sm/6 font-medium text-white">
                Telefone
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
                Data de nascimento
            </label>
            <div className="mt-2">
                <input
                    id="first-name"
                    name="first-name"
                    type="date"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
            <label htmlFor="first-name" className="mt-2 block text-sm/6 font-medium text-white">
                E-mail
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
            <div className='mt-3'>
                <button className='bg-black rounded-md text-slate-300 px-3 py-1.5 w-full '>Criar conta</button>
            </div>


        </div>
    )
}

export default Cadastro