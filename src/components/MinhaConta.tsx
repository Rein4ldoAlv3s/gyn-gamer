import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export interface User {
    username: string;
    password: string;
}

const MinhaConta = () => {

    const [email, setEmail] = useState<any>(0);
    const [password, setPassword] = useState<any>(0);
    const [userAuthenticated, setUserAuthenticated] = useState<any>(0);
    const navigate = useNavigate();

    const user: User = {
        username: email,
        password: password
    }

    function authentic() {
        axios.post('http://localhost:3000/login', user)
            .then(function (response) {
                sessionStorage.setItem('token', response.data.token);
                console.log(response);
                navigate("/")
            })
            .catch(function (error) {
                console.error(error);
            });
    }



    // useEffect(() => {
    //     console.log(email);
    // }, [email]);

    return (
        <div className="mt-10 grid grid-cols-1 max-w-lg mx-auto ">
            <h1 className='text-white text-3xl text-center'>Acesse sua conta</h1>
            <label htmlFor="first-name" className="block text-sm/6 font-medium text-white">
                E-mail
            </label>
            <div className="mt-2">
                <input
                    id="first-name"
                    name="first-name"
                    type="email"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={(e: any) => setEmail(e.target.value)}
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
                    onChange={(e: any) => setPassword(e.target.value)}
                />
            </div>
            <div className='mt-3'>
                <button onClick={() => authentic()} className='bg-black rounded-md text-slate-300 px-3 py-1.5 w-full'>Entrar</button>
            </div>

            <hr className='mt-3 w-1/2 m-auto' />
            <div className='flex justify-center mt-2'>
                <h2 className='text-customWhite mr-2'>Novo na Gyn Gamer?</h2>
                <a className='text-customWhite underline' href="/cadastro">Cadastre-se</a>
            </div>
        </div>
    )
}

export default MinhaConta