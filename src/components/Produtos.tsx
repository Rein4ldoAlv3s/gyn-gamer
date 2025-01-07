import React, { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Produto, PRODUTOS } from '../constants'
import { useState, useEffect } from 'react';
import clockk from "../svg/svgviewer-output.svg";
import Countdown from 'react-countdown';
import InputMask from 'react-input-mask';
import { FaUserCircle } from 'react-icons/fa';
import { BiCart } from 'react-icons/bi';
import { CartContext } from '../contexts/CartContext';

interface Cep {
    abreviatura?: string;
    bairro?: string;
    cep?: string;
    complemento?: string;
    localidade?: string;
    logradouro?: string;
    nomeMunicipio?: string;
    numeroLocalidade?: string;
    tipoLogradouro?: string;
    uf?: string;
    error?: string;
}


const Produtos = () => {

    const location = useLocation();
    const state = location.state || {}; //evita erros se for undefined

    const { id } = useParams();

    const idNumero = Number(id);

    const [produto, setProduto] = useState<Produto>();

    const fimPromocao = Date.now() + 604800000;
    const cart = useContext(CartContext);

    useEffect(() => {
        console.log(state);
        const produto = PRODUTOS.find(obj => obj.id === idNumero || obj.id === state.id)
        setProduto(produto)
    }, [state]);

    const [valor, setValor] = useState('');

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setValor(e.target.value);
    };

    const [cep, setCep] = useState();

    const [dadosCep, setDadosCep] = useState<Cep>();

    useEffect(() => {
        if (dadosCep) {
            console.log("Estado atualizado:", dadosCep);
        }
    }, [dadosCep]); // Executa o efeito sempre que dadosCep mudar


    const chamadaCep = async () => {
        //www.cepcerto.com/ws/json/{cep}
        fetch(`https://www.cepcerto.com/ws/json/${cep}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                return response.json(); // Converte a resposta para JSON
            })
            .then(data => {
                setDadosCep(data)
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }

    function verificarFrete() {
        console.log(dadosCep);
        if (!dadosCep) {
            return ""
        } else if (dadosCep.error) {
            return "CEP inválido! Digite novamente."
        }
        else if (dadosCep && dadosCep.localidade === "Goiânia") {
            return "Usuário de Goiânia identificado. Frete Grátis!";
        } else {
            return <div>
                <p>Cidade: {dadosCep.localidade}</p>
                <p>Bairro: {dadosCep.bairro}</p>
                <p>Logradouro: {dadosCep.logradouro}</p>
                <p className='font-bold'>Frete: R$ 15,00</p>
            </div>
        }
    }


    function formatarMoeda(valor: any) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(valor);
    }

    const addCart = (): void => {
        cart?.produtos?.push(produto)
        console.log(cart);
    }

    return (
        <div>
            <h1 className="flex justify-center text-3xl font-bold text-customWhite">
                PRODUTOS NOVOS E LANÇAMENTOS
            </h1>
            <div className="flex justify-center items-start py-5 max-w-5xl">
                <img className="w-1/2 " src={produto?.img} alt="" />
                <div className="text-slate-300 ml-6">
                    <p className='text-2xl'>{produto?.name}</p>
                    <p className='text-lg line-through mt-2'>de {formatarMoeda(produto?.price)}</p>
                    <p className='text-xl font-bold mt-1'>por R$ {formatarMoeda(produto?.desc)}</p>
                    <p className='text-xs font-semibold'>à vista com desconto</p>
                    <p className='text-lg mt-3'>ou R$ {formatarMoeda(produto?.parcel)}</p>
                    <p className='text-base'>10x de R$ {(formatarMoeda(produto?.desc) ?? 0 / 10)} sem juros no cartão</p >
                    {/* renderiza a div de promocao case seja true */}
                    {produto?.isPromocao &&
                        <div className='mt-3 text-center text-customYellowDiscount flex justify-center w-56 bg-black rounded-full'>
                            <img className='mr-2' src={clockk} alt="" width="25" height="25" />
                            <div>
                                <p>Oferta termina em</p>
                                <Countdown date={fimPromocao} />
                            </div>
                        </div>
                    }
                    <div className='flex flex-col '>
                        <button className=' mt-3 bg-black text-white py-2 px-4 rounded-full hover:bg-gray-500 w-56'>Comprar</button>
                        <button onClick={(e) => addCart()} className='mt-3 bg-black flex items-center justify-center text-white py-2 px-4 rounded-full hover:bg-gray-500 w-56'>
                            <BiCart size={30} className='mr-1 text-white ' /> Adicionar ao Carrinho
                        </button>

                    </div>
                    <div className='mt-5'>
                        <p className=''>Frete e prazo de entrega</p>
                        <p className='font-semibold mb-2'>(gratuito para Goiânia)</p>
                        <div>
                            <InputMask
                                mask="99999999" // Limita a quantidade de caracteres a 5 dígitos
                                placeholder="Digite um número"
                                className='text-black rounded-full w-56 py-2 px-4'
                                value={cep}
                                onChange={(e: any) => setCep(e.target.value)}
                            />
                            <button onClick={chamadaCep} className='ml-3 bg-black rounded-full px-4 py-2'>Calcular</button>
                            <div className='mt-3'>
                                {verificarFrete()}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <hr className="mt-10 border-[0.5px] border-gray-400" />
            <div className='mb-3'>
                <h1 className="py-4 flex justify-center text-3xl font-bold text-customWhite">
                    DESCRIÇÃO
                </h1>
                <div>
                    {produto?.descricao.map((descricao, index) => (
                        <p className='text-slate-300 flex justify-start' key={index}>{descricao}</p>
                    ))}
                </div>
            </div>

        </div>



    )
}

export default Produtos