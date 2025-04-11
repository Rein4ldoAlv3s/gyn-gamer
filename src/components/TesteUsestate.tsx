import { useContext, useEffect, useState } from 'react'
import { PedidoContext } from '../contexts/PedidoContext'
import { PedidosContext } from '../contexts/PedidosContext'

const TesteUsestate = () => {

    const [dataTeste, setDataTeste] = useState(Date.now)

    const converterData = () => {
        const formatter = new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'full',
            timeStyle: 'short',
        });

        const dataConvertida = formatter.format(new Date(dataTeste))

        console.log(dataConvertida);
    }

    const pedidos = useContext(PedidosContext);
    const pedido = useContext(PedidoContext);

    useEffect(() => {

        console.log(pedidos);
        console.log(pedido);
    }, [pedidos])


    return (
        <div>
            <div className='text-white'>
                <button onClick={converterData}>Click</button>
            </div>
        </div>

    )
}


export default TesteUsestate