import React from 'react'
import { useParams } from 'react-router-dom'
import { Produto, PRODUTOS } from '../constants'
import { useState, useEffect } from 'react';
import clockk from "../svg/svgviewer-output.svg";
import Countdown from 'react-countdown';
import InputMask from 'react-input-mask';

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

    const { id } = useParams();

    const idNumero = Number(id);

    const [produto, setProduto] = useState<Produto>();

    const fimPromocao = Date.now() + 604800000;

    useEffect(() => {
        const produto = PRODUTOS.find(obj => obj.id === idNumero)
        setProduto(produto)
    }, []);

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

    function randomNumber() {

    }

    function verificarFrete() {
        console.log(dadosCep);
        if (!dadosCep) {
            return ""
        } else if (dadosCep.error) {
            return "CEP inválido!"
        }
        else if (dadosCep && dadosCep.localidade === "Goiânia") {
            return "Frete Grátis!";
        } else {
            return <div>
                <p>Cidade: {dadosCep.localidade}</p>
                <p>Bairro: {dadosCep.bairro}</p>
                <p>Logradouro: {dadosCep.logradouro}</p>
                <p className='font-bold'>Frete: R$ 15,00</p>
            </div>
        }
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
                    <p className='text-lg line-through mt-2'>de R$ {(produto?.price)?.toFixed(2)}</p>
                    <p className='text-xl font-bold mt-1'>por R$ {(produto?.desc)?.toFixed(2)}</p>
                    <p className='text-xs font-semibold'>à vista com desconto</p>
                    <p className='text-lg mt-3'>R$ {(produto?.parcel)?.toFixed(2)}</p>
                    <p className='text-base'>ou 10x de R$ {((produto?.parcel ?? 0) / 10)?.toFixed(2)} sem juros no cartão</p >
                    <div className='mt-3 text-center text-customYellowDiscount flex justify-center w-56 bg-black rounded-full'>
                        <img className='mr-2' src={clockk} alt="" width="25" height="25" />
                        <div className=''>
                            <p>Oferta termina em</p>
                            <Countdown date={fimPromocao} />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <button className='bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 w-56'>Comprar</button>
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