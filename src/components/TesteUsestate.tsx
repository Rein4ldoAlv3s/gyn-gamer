import { useContext, useEffect, useState } from 'react'
import { PedidoContext } from '../contexts/PedidoContext'

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

    useEffect(() => {
    }, [])


    return (
        <div>
            <div className='text-white'>
                <button onClick={converterData}>Click</button>
            </div>
        </div>

    )
}


export default TesteUsestate