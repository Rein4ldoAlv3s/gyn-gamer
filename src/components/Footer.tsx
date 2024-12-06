import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { Flip, toast, ToastContainer } from 'react-toastify'

const Footer = () => {

    const notify = () => toast.success('Enviado com sucesso!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
    });

    return (
        <div className="border-b text-slate-300 bg-black pb-6 flex space-x-4 pt-4 gap-4">
            <h1 className="text-red-600 font-bold text-4xl select-none flex justify-center items-center ml-3">Gyn Gamer</h1>
            <div className='flex-1'>
                <p className='text-sm'>GYN GAMER® É UMA MARCA REGISTRADA DE REINALDO ALVES GOIANIA LTDA CNPJ: 95.667.559/0001-86</p>
                <p className='text-sm pt-1'>Praça Doutor Pedro Ludovico Teixeira, 7199 - Setor Central, GOIANIA - GO - 74000-000</p>
                <hr className='my-3 w-1/6' />
                <p className='text-sm'>
                    Preços e condições de pagamento exclusivos para compras via internet e
                    podem variar nas lojas físicas. Os preços anunciados neste site ou via
                    e-mail promocional podem ser alterados sem prévio aviso. A Gyn Gamer,
                    não é responsável por erros descritivos. As fotos contidas nesta página são
                    meramente ilustrativas do produto e podem variar de acordo com o fornecedor/lote
                    do fabricante. Ofertas válidas até o término de nossos estoques. Vendas sujeitas
                    à análise e confirmação de dados.
                </p>
            </div>
            <div className='flex-1 flex'>
                <div>
                    <p className='text-sm mb-2'>Pagamento</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                        <div className="bg-white rounded-lg px-4 py-2 flex justify-center items-center">
                            <img src="/pix.png" alt="Visa" className="h-10" />
                        </div>
                        <div className="bg-white rounded-lg px-4 py-2 flex justify-center items-center">
                            <img src="/boleto.png" alt="Mastercard" className="h-10" />
                        </div>
                        <div className="bg-white rounded-lg px-4 py-2 flex justify-center items-center">
                            <img src="/mastercard.png" alt="American Express" className="h-10" />
                        </div>
                        <div className="bg-white rounded-lg px-4 py-2 flex justify-center items-center">
                            <img src="/american.png" alt="Boleto" className="h-10" />
                        </div>
                        <div className="bg-white rounded-lg px-4 py-2 flex justify-center items-center">
                            <img src="/visa.webp" alt="Pix" className="h-10" />
                        </div>
                        <div className="bg-white rounded-lg px-4 py-2 flex justify-center items-center">
                            <img src="/nubank.png" alt="NuPay" className="h-10" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col ml-7'>
                        <div>
                            <p className='mb-2 text-sm'>Receba ofertas exclusivas no seu e-mail!</p>
                            <input type="email" placeholder='E-mail' className=' rounded-full text-black py-2 px-4' />
                            <button onClick={notify} className='bg-customGray ml-1 text-white py-2 px-4 rounded-full hover:bg-customGrayHover'>Enviar</button>
                            <ToastContainer
                                position="bottom-right"
                                autoClose={2000}
                                hideProgressBar
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                                transition={Flip}
                            />
                        </div>
                        <div className='mt-3'>
                            <p className='mb-2'>Siga-nos nas redes sociais!</p>
                            <div className='flex'>
                                <FaFacebook size={30} className='mr-2' />
                                <FaInstagram size={30} className='mr-2' />
                                <FaX size={30} className='mr-2' />
                                <FaYoutube size={30} className='mr-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer