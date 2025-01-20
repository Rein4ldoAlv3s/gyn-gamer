import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Select from "react-select";
import { Produto, PRODUTOS } from '../constants'
import e from 'cors';

// export interface Usuario {
//     nome: string;
//     usuario: string;
//     telefone: string;
//     genero: string;
//     dto: string;
//     email: string;
//     password: string;
// }

const CadastroUsuario = () => {

    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState('');
    const [telefone, setTelefone] = useState('');
    const [genero, setGenero] = useState('');
    const [dto, setDto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const saveUser = (event: any) => {
        event.prevent.default();

    };


    useEffect(() => {
        // console.log(genero);

    }, [genero]);

    return (
        <div className=" flex flex-col max-w-lg mx-auto pb-5">
            <h1 className='text-white text-3xl text-center'>Criar minha conta</h1>

            <div className='flex justify-between mt-3'>
                <div className='w-full mr-2'>
                    <label htmlFor="nome" className="block text-sm/6 font-medium text-white">
                        Nome Completo
                    </label>
                    <input
                        id="nome"
                        name="nome"
                        autoComplete="given-name"
                        onChange={(e) => setNome(e.target.value)}
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
                <div className='w-full'>
                    <label htmlFor="user" className="block text-sm/6 font-medium text-white">
                        Nome de Usuário
                    </label>
                    <input
                        id="user"
                        name="user"
                        autoComplete="given-name"
                        onChange={(e) => setUsuario(e.target.value)}
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <label htmlFor="phone" className="mt-2 block text-sm/6 font-medium text-white">
                Telefone
            </label>

            <div className="mt-2">
                <input
                    id="telefone"
                    name="telefone"
                    type="telefone"
                    autoComplete="given-name"
                    onChange={(e) => setTelefone(e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>

            {/* radio button */}
            <div className="mt-2">
                <label className='text-sm font-medium text-white' htmlFor='gender'>Selecione o gênero:</label><br />

                <input
                    onChange={(e) => setGenero(e.target.value)}
                    type="radio"
                    id="masculino"
                    name="gender"
                    value="masculino"
                />
                <label className='text-sm font-medium text-white' htmlFor="masculino">Masculino</label><br />

                <input
                    onChange={(e) => setGenero(e.target.value)}
                    type="radio"
                    id="feminino"
                    name="gender"
                    value="feminino"
                />
                <label className='text-sm font-medium text-white' htmlFor="feminino">Feminino</label><br />

                <input
                    onChange={(e) => setGenero(e.target.value)}
                    type="radio"
                    id="outro"
                    name="gender"
                    value="outro"
                />
                <label className='text-sm font-medium text-white' htmlFor="outro">Outro</label><br />
            </div>

            <label htmlFor="dto" className="mt-2 block text-sm/6 font-medium text-white">
                Data de nascimento
            </label>
            <div className="mt-2">
                <input
                    onChange={(e) => setDto(e.target.value)}
                    id="dto"
                    name="dto"
                    type="date"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
            <label htmlFor="email" className="mt-2 block text-sm/6 font-medium text-white">
                E-mail
            </label>
            <div className="mt-2">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
            <label htmlFor="password" className="mt-2 block text-sm/6 font-medium text-white">
                Senha
            </label>
            <div className="mt-2">
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
            <div className='mt-3'>
                <button onClick={(e) => saveUser(e)} className='bg-black rounded-md text-slate-300 px-3 py-2 w-full '>Criar conta</button>
            </div>


        </div>
    )
}

export default CadastroUsuario