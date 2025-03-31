import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContext';

export interface User {
    nomeUsuario: string;
    password: string;
}

const Login = () => {

    const [nomeUsuario, setnomeUsuario] = useState<any>(0);
    const [password, setPassword] = useState<any>(0);
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    useEffect(() => {
        console.log(auth);
    }, [auth])

    const user: User = {
        nomeUsuario: nomeUsuario,
        password: password
    }

    function authentic(e: any) {
        e.preventDefault();
        axios.post('http://localhost:3000/users/login', user)
            .then(function (response) {
                console.log(response);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem("nomeUsuario", nomeUsuario)
                localStorage.setItem("idUser", response.data.idUser)

                toast.success("Usuário logado!");

                //variavel global useContext
                auth?.setAuth(true)

                //atrasar redirecionamento
                setTimeout(() => {
                    navigate("/")
                }, 1500); // Atraso de 2 segundos (2000 ms)
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    return (
        <form onSubmit={(e) => authentic(e)} className="mt-10 grid grid-cols-1 max-w-lg mx-auto ">
            <h1 className='text-white text-3xl text-center'>Acesse sua conta</h1>
            <label htmlFor="nomeUsuario" className="block text-sm/6 font-medium text-white">
                Usuario
            </label>
            <input
                id="nomeUsuario"
                required
                name="nomeUsuario"
                autoComplete="nomeUsuario"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 mt-2"
                onChange={(e: any) => setnomeUsuario(e.target.value)}
            />
            <label htmlFor="password" className="mt-2 block text-sm/6 font-medium text-white">
                Senha
            </label>
            <input
                id="password"
                required
                name="password"
                type="password"
                autoComplete="password"
                className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onChange={(e: any) => setPassword(e.target.value)}
            />
            <button type='submit' className='mt-3 bg-black rounded-md text-slate-300 px-3 py-1.5 w-full'>Entrar</button>



            <hr className='mt-3 w-1/2 m-auto' />
            <div className='flex justify-center mt-2'>
                <h2 className='text-customWhite mr-2'>Novo na Gyn Gamer?</h2>
                <Link className='text-customWhite underline' to="/cadastro-usuario">Cadastre-se</Link>
            </div>
        </form>
    )
}

export default Login