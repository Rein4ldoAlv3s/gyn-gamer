import { Button } from '@headlessui/react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PedidoContext } from '../contexts/PedidoContext';
import { toast } from 'react-toastify';
import { PedidosContext } from '../contexts/PedidosContext';
import { v4 as uuidv4 } from 'uuid';


type ButtonAtrib = {
    color: string;
    content: string;
    hover: string;
};

const PagamentoEscolhido = () => {

    const { id } = useParams();
    const pedido = useContext(PedidoContext);
    const contextPedidos = useContext(PedidosContext);

    const [buttonAtrib, setButtonAtrib] = useState<ButtonAtrib>({
        color: "bg-black",
        content: "Copiar",
        hover: "hover",
    });

    // contador que determina a estilizacao do botao copiar quando é clicado
    const [count, setCount] = useState(1)


    const copiarUrl = () => {

        setCount(prevalue => (prevalue === 1 ? 0 : 1)) //Alterna entre 1 e 0
        console.log(count);

        if (count === 0) {
            setButtonAtrib(
                { color: "bg-black", content: "Copiar", hover: "bg-gray-500" }
            );
        }
        if (count === 1) {
            // evento para copiar o codigo de pagamento do pix
            navigator.clipboard.writeText("htesteeeeeee")
                .then(() => {
                    setButtonAtrib(
                        { color: "bg-green-600", content: "Copiado!", hover: "bg-green-600" }
                    );
                })
        }
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        pedido?.setDataPedido(Date.now)
        pedido?.setIdPedido(uuidv4())
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();

    const concluirPedido = () => {
        //define a data e o horário que o pedido foi realizado


        //coloca o objeto Pedido no array Pedidos
        if (pedido) {
            contextPedidos?.setPedidos(prev => [...prev, pedido]);
        }


        toast.success("Pedido concluido!");

        //atrasar redirecionamento
        setTimeout(() => {
            navigate("/detalhe-pedido/" + pedido?.idPedido);
        }, 1500); // Atraso de 2 segundos (2000 ms)


    }

    useEffect(() => {
    }, [buttonAtrib])


    return (
        <div>
            <div className='w-1/2'>
                {id === "1" &&
                    <div>
                        <h1 className='text-xl'>Utilize o QRCode ou a URL para pagamento do Pix</h1>
                        <div className='mt-3'>
                            <h1>Pix por QRCode:</h1>
                            <img className='w-1/2 mt-2'
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
                {id === "2" &&
                    <div>
                        <h1>Pagamento por Boleto</h1>
                        <img
                            src="/boletobancario.jpg"
                            alt=""
                            className='mt-3'
                        />
                    </div>
                }
                <div className='mt-5 flex justify-between'>
                    <div>
                        <Link to="/escolha-pagamento" className='bg-customGrayHover text-white text-center py-2 px-4 rounded-full hover:bg-gray-500 w-56'>Voltar</Link>
                    </div>
                    <div>
                        <Link
                            to={""}
                            onClick={handleClickOpen}
                            className='bg-customGrayHover text-white text-center py-2 px-4 rounded-full hover:bg-gray-500 w-56'>
                            Confirmar Pedido
                        </Link>
                    </div>
                </div>
            </div>
            <React.Fragment>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {""}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Tem certeza que deseja concluir esse pedido?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Não</Button>
                        <Button onClick={() => concluirPedido()} autoFocus>
                            Sim
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </div>
    )
}

export default PagamentoEscolhido
