import { useContext, useEffect } from 'react'
import { PedidoContext } from '../contexts/PedidoContext'

const TesteUsestate = () => {

    const pedidoContext = useContext(PedidoContext);

    useEffect(() => {
        console.log(pedidoContext);
    }, [])


    return (
        <div>
            <div>
                <h1 className='text-white'>teste</h1>
            </div>
        </div>

    )
}


export default TesteUsestate