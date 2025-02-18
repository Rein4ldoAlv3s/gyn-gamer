import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Select from "react-select";
import { estados } from '../constants/estados';

const CadastroEnderecoEntrega = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [estadosBrasileiros, setEstadosBrasileiros] = useState<any[]>();

    //esse componente recebe o id do componente CadastroUsuario para fazer a relacao no banco de dados (usuario tem varios enderecos)
    const { idUser } = location.state || {};

    //Recupera o id do Endereco vindo do componente MyProfile 
    const { idEnd } = useParams();
    //ID é usado para editar Endereco já existente no Banco de Dados (PUT)
    const idEndereco = Number(idEnd);

    const [endereco, setEndereco] = useState({
        nomeDestinatario: "",
        logradouro: "",
        rua: "",
        estado: "",
        cidade: "",
        tipoEndereco: "",
        cep: "",
        complemento: "",
        userId: idUser
    })

    useEffect(() => {
        const opcoes: any = estados.map(function (est) {
            return { value: est.label, label: est.label, name: "estado" };
        })
        setEstadosBrasileiros(opcoes)
        console.log(endereco);
        console.log(idEndereco);
    }, [endereco]);

    useEffect(() => {
        console.log("----------------");
        console.log(idEndereco);
    }, [idEndereco]);

    const handleChange = (e: any) => {

        const { name, value } = e.target;


        // Atualiza apenas o campo correspondente
        setEndereco((prevState) => ({
            ...prevState, // Mantém os outros campos
            [name]: value, // Atualiza o campo atual
        }));
    };

    const handleChangeEstado = (e: any) => {
        console.log(e);

        if (e !== null) {
            const { name, value } = e;
            setEndereco((prevState) => ({
                ...prevState, // Mantém os outros campos
                [name]: value, // Atualiza o campo atual
            }));
        }
    };

    const cadastrar = (e: any) => {
        e.preventDefault();

        axios.post('http://localhost:3000/enderecos/register', endereco)
            .then(function (response) {
                console.log(response);

                toast.success("Endereço criado! O usuário já pode logar em sua conta.", {
                    autoClose: 5000
                });

                setTimeout(() => {
                    navigate("/")
                }, 1500);

            })
            .catch(function (error) {
                toast.error("Usuário ou senha errados!");
                console.error(error);
            });
    }

    return (
        <div className=" flex flex-col max-w-lg mx-auto pb-5">
            <h1 className='text-white text-3xl text-center'>Adicionar Endereço</h1>

            <label htmlFor="nomeDestinatario" className="mt-2 block text-sm/6 font-medium text-white">
                Nome Destinatário
            </label>
            <div className="mt-2">
                <input
                    id="nomeDestinatario"
                    name="nomeDestinatario"
                    autoComplete="given-name"
                    onChange={handleChange}
                    value={endereco.nomeDestinatario}
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
                        onChange={handleChange}
                        value={endereco.logradouro}
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
                <div className='w-full'>
                    <label htmlFor="rua" className="block text-sm/6 font-medium text-white">
                        Rua
                    </label>
                    <input
                        id="rua"
                        name="rua"
                        autoComplete="given-name"
                        onChange={handleChange}
                        value={endereco.rua}
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>
            <div className='flex justify-between mt-3'>
                <div className='w-full mr-2'>
                    <label htmlFor="estado" className="mt-2 block text-sm/6 font-medium text-white">
                        Estado
                    </label>
                    <div className="mt-2">
                        {/* <input
                            id="estado"
                            name="estado"
                            autoComplete="given-name"
                            onChange={handleChange}
                            value={endereco.estado}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        /> */}

                        <Select
                            options={estadosBrasileiros}
                            name="estado"
                            placeholder="Pesquise aqui..."
                            isSearchable={true}
                            className=" focus:outline focus:outline-2 focus:-outline-offset-2 text-gray-900 text-sm/6"
                            openMenuOnClick={true}
                            isClearable={true}
                            onChange={handleChangeEstado}


                        />


                    </div>
                </div>
                <div className='w-full'>
                    <label htmlFor="cidade" className="mt-2 block text-sm/6 font-medium text-white">
                        Cidade
                    </label>
                    <div className="mt-2">
                        <input
                            id="cidade"
                            name="cidade"
                            autoComplete="given-name"
                            onChange={handleChange}
                            value={endereco.cidade}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <label className='text-sm font-medium text-white' htmlFor='tipoEndereco'>Selecione o tipo de endereço:</label><br />

                <input type="radio" id="residencial" name="tipoEndereco"
                    onChange={handleChange}
                    value="residencial" />
                <label className='text-sm font-medium text-white' htmlFor="residencial">Residencial</label><br />

                <input type="radio" id="comercial" name="tipoEndereco"
                    onChange={handleChange}
                    value="comercial" />
                <label className='text-sm font-medium text-white' htmlFor="comercial">Comercial</label><br />
            </div>
            <label htmlFor="cep" className="mt-2 block text-sm/6 font-medium text-white">
                CEP
            </label>
            <div className="mt-2">
                <input
                    id="cep"
                    name="cep"
                    autoComplete="given-name"
                    onChange={handleChange}
                    value={endereco.cep}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
            <label htmlFor="complemento" className="mt-2 block text-sm/6 font-medium text-white">
                Complemento
            </label>
            <div className="mt-2">
                <input
                    id="complemento"
                    name="complemento"
                    autoComplete="given-name"
                    onChange={handleChange}
                    value={endereco.complemento}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
            <div className='mt-3'>
                <button onClick={(e) => cadastrar(e)} className='bg-black rounded-md text-slate-300 px-3 py-2 w-full '>Criar conta</button>
            </div>


        </div>
    )
}

export default CadastroEnderecoEntrega