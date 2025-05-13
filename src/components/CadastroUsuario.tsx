import axios from 'axios';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CadastroUsuario = () => {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        nomeReal: "",
        nomeUsuario: "",
        telefone: "",
        genero: "",
        dto: "",
        email: "",
        password: "",
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Atualiza apenas o campo correspondente
        setUsuario((prevState) => ({
            ...prevState, // Mantém os outros campos
            [name]: value, // Atualiza o campo atual
        }));
    };

    const cadastrar = (e: any) => {
        e.preventDefault();

        axios.post('http://localhost:3000/users/register', usuario)
            .then(function (response) {
                console.log(response);

                toast.success("Usuário criado! Informe os dados do endereço.", {
                    autoClose: 5000
                });

                console.log(response.data.id);

                setTimeout(() => {
                    //Envia o ID de usuario para o componente CadastroEnderecoEntrega
                    navigate("/cadastro-endereco", {
                        state: { idUser: response.data.id }
                    })
                }, 1500);

            })
            .catch(function (error) {
                toast.error("Usuário ou senha errados!");
                console.error(error);
            });
    }


    useEffect(() => {
        console.log(usuario);

    }, [usuario]);

    return (
        <div className=" flex flex-col max-w-lg mx-auto ">
            <h1 className='text-white text-3xl text-center'>Criar minha conta</h1>

            <div className='flex justify-between mt-3'>
                <div className='w-full mr-2'>
                    <label htmlFor="nomeReal" className="block text-sm/6 font-medium text-white">
                        Nome Completo
                    </label>
                    <input
                        id="nomeReal"
                        name="nomeReal"
                        autoComplete="given-name"
                        onChange={handleChange}
                        value={usuario.nomeReal}
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
                <div className='w-full'>
                    <label htmlFor="nomeUsuario" className="block text-sm/6 font-medium text-white">
                        Nome de Usuário
                    </label>
                    <input
                        id="nomeUsuario"
                        name="nomeUsuario"
                        autoComplete="given-name"
                        onChange={handleChange}
                        value={usuario.nomeUsuario}
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <label htmlFor="phone" className="mt-2 block text-sm/6 font-medium text-white">
                Telefone
            </label>

            <div className="mt-2">
                <InputMask
                    mask="(99) 99999-9999" // Limita a quantidade de caracteres a 5 dígitos
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    id="telefone"
                    name="telefone"
                    type="telefone"
                    autoComplete="given-name"
                    onChange={handleChange}
                    value={usuario.telefone}
                />
            </div>

            {/* radio button */}
            <div className="mt-2">
                <label className='text-sm font-medium text-white' htmlFor='gender'>Selecione o gênero:</label><br />

                <input
                    type="radio"
                    id="masculino"
                    name="genero"
                    onChange={handleChange}
                    value="masculino"
                />
                <label className='text-sm font-medium text-white' htmlFor="masculino">Masculino</label><br />

                <input
                    type="radio"
                    id="feminino"
                    name="genero"
                    onChange={handleChange}
                    value="feminino"
                />
                <label className='text-sm font-medium text-white' htmlFor="feminino">Feminino</label><br />

                <input
                    type="radio"
                    id="outro"
                    name="genero"
                    onChange={handleChange}
                    value="outro"
                />
                <label className='text-sm font-medium text-white' htmlFor="outro">Outro</label><br />
            </div>

            <label htmlFor="dto" className="mt-2 block text-sm/6 font-medium text-white">
                Data de nascimento
            </label>
            <div className="mt-2">
                <input
                    onChange={handleChange}
                    value={usuario.dto}
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
                    onChange={handleChange}
                    value={usuario.email}
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
                    onChange={handleChange}
                    value={usuario.password}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
            <div className='mt-3'>
                <button onClick={(e) => cadastrar(e)} className='bg-black rounded-md text-slate-300 px-3 py-2 w-full '>Criar conta</button>
            </div>


        </div>
    )
}

export default CadastroUsuario