import { Button } from '@headlessui/react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


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
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();


    useEffect(() => {
        //   if(buttonAtrib === 0){

        //   }


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
                            src="https://scontent.fudi1-1.fna.fbcdn.net/v/t1.6435-9/69608029_1367304000095537_8154214927234498560_n.png?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHFcL-Tprz8tkXnGb-CIWIillfOJOwZAW-WV84k7BkBbxAc6wVVpzYk0MPBESBe586o-ZjKLTo8vzP_XnGchqMz&_nc_ohc=il2slloa1T4Q7kNvgHGIR3w&_nc_oc=AdiMULsJ0HheKGZ7Qm8zjlHJ62OtrMSu285kXUTMoGOAmwGRCZ_mB9Ys_eT3aqiDiB0&_nc_zt=23&_nc_ht=scontent.fudi1-1.fna&_nc_gid=AjBHuZeCCOP8qgWfI3NNE5A&oh=00_AYGvrmAfOoKiH7ERIKgmNK6rNK45kNTSwNQkpqTC3plD9Q&oe=67F79857"
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
                        <Button onClick={() => navigate("/detalhe-pedido")} autoFocus>
                            Sim
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </div>
    )
}

export default PagamentoEscolhido
