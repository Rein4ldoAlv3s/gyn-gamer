import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';

const PagamentoEscolhido = () => {

    const { id } = useParams();

    return (
        <div>
            {id === "1" &&
                <div>
                    <h1 className='text-xl'>Utilize o QRCode ou URL para pagamento do Pix</h1>
                    <div className='mt-3'>
                        <h1>Pix por QRCode:</h1>
                        <img className='w-1/4 mt-2'
                            src="https://peahimoda.wordpress.com/wp-content/uploads/2013/08/cc3b3digo-qr.jpg"
                            alt=""
                        />
                    </div>

                    <div className='mt-3'>
                        <h1>Pix por URL:</h1>

                        <button value={"testeeee"} className=' mt-3 bg-black text-white py-2 px-4 rounded-full hover:bg-gray-500 w-48'>
                            Comprar
                        </button>


                    </div>
                </div>
            }
        </div>
    )
}

export default PagamentoEscolhido
