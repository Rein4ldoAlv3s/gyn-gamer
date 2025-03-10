import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

type ButtonAtrib = {
    color: string;
    content: string;
    hover: string;
};

const PagamentoEscolhido = () => {

    const { id } = useParams();

    const [buttonAtrib, setButtonAtrib] = useState<ButtonAtrib>({
        color: "bg-black",
        content: "Copiar",
        hover: "hover",
    });

    // contador que determina a estilizacao do botao copiar quando é clicado
    const [count, setCount] = useState(0)


    const copiarUrl = () => {

        setCount(prevalue => (prevalue === 1 ? 0 : 1)) //Alterna entre 1 e 0
        console.log(count);

        if (count === 0) {
            setButtonAtrib(
                { color: "bg-black", content: "Copiar", hover: "bg-gray-500" }
            );
        }
        if (count === 1) {
            setButtonAtrib(
                { color: "bg-green-600", content: "Copiado!", hover: "bg-green-600" }
            );
        }
    }

    useEffect(() => {
        //   if(buttonAtrib === 0){

        //   }


    }, [buttonAtrib])


    return (
        <div>
            {id === "1" &&
                <div>
                    <h1 className='text-xl'>Utilize o QRCode ou a URL para pagamento do Pix</h1>
                    <div className='mt-3'>
                        <h1>Pix por QRCode:</h1>
                        <img className='w-1/4 mt-2'
                            src="https://peahimoda.wordpress.com/wp-content/uploads/2013/08/cc3b3digo-qr.jpg"
                            alt=""
                        />
                    </div>

                    <div className='mt-3'>
                        <h1>Pix por URL:</h1>

                        <button onClick={() => (copiarUrl())} className={`mt-3 ${buttonAtrib.color} text-white py-2 px-4 rounded-full hover:${buttonAtrib.hover} w-48`}>
                            {buttonAtrib.content}
                        </button>


                    </div>
                </div>
            }
        </div>
    )
}

export default PagamentoEscolhido
