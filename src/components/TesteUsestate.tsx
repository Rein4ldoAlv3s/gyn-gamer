import { useContext, useEffect, useState } from 'react'
import { PedidoContext } from '../contexts/PedidoContext'

const TesteUsestate = () => {

    const [dataTeste, setDataTeste] = useState(Date.now);
    const pedido = useContext(PedidoContext);

    useEffect(() => {
        console.log(pedido);
    }, [])


    return (
        <div>
            <div>
                <h1 className='text-white'>
                    {
                        Intl.DateTimeFormat('pt-BR', {
                            dateStyle: 'long',
                            timeStyle: 'short'
                        }).format(dataTeste)
                    }


                </h1>
            </div>
        </div>

    )
}


export default TesteUsestate