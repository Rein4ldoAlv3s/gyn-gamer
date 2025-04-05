import { Button, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { PedidoContext } from '../contexts/PedidoContext';


const EscolhaEnderecoEntrega = () => {

    const idUser = localStorage.getItem("idUser");
    const [enderecoData, setEnderecoData] = useState<any[]>([]);
    const [checkboxValue, setCheckboxValue] = useState<number>(0);
    const pedido = useContext(PedidoContext);
    const navigate = useNavigate();


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleExcluir = (id: any) => {
        //acao de excluir
        axios.delete("http://localhost:3000/enderecos/delete/" + id)
            .then(response => {
                console.log('Recurso excluído:', response.data);
            })
            .catch(error => {
                console.error('Erro ao excluir:', error);
            });

        console.log("endereco excluido");

        //acao de fechar dialog
        handleClose()
    }

    const incluirEndereco = (e: any) => {
        e.preventDefault();
        const enderecoEncontrado = enderecoData.find(
            (endereco) => endereco.id === checkboxValue
        )

        pedido?.setEndereco(enderecoEncontrado);
        navigate("/escolha-pagamento")

    }

    useEffect(() => {
        if (idUser) {
            fetch('http://localhost:3000/users/' + idUser)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro na requisição');
                    }
                    return response.json();
                })
                //chamada dos dados de endereço, que estao relacionados com usuario
                .then(response => {
                    // setUserData(response)
                    setEnderecoData(response.Enderecos)
                })
                .catch(function (error) {
                    console.error(error);
                });
        }

        console.log(pedido);

    }, [pedido])


    return (
        <div>
            <h1 className="flex justify-start text-3xl font-bold text-customWhite ">
                Escolha o endereço de entrega
            </h1>

            <div className='w-1/2'>
                {enderecoData && enderecoData.map((endereco: any, index: any) => (
                    <div key={index} className='mt-2 flex justify-between bg-customGrayHover rounded-md text-sm'>
                        <div className='py-3 px-2 flex'>
                            {/* checkbox para selecionar endereço de entrega*/}
                            <div className="inline-flex items-center">

                                <label className="relative flex items-center cursor-pointer">
                                    <input
                                        name="color"
                                        type="radio"
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                                        readOnly
                                        value={endereco?.id}
                                        onChange={e => (setCheckboxValue(Number(e.target.value)))}
                                    />
                                    <span className="absolute bg-white w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                </label>

                            </div>

                            {/* dados endereço de entrega */}
                            <div className='px-2'>
                                <div className='flex items-center'>
                                    <FaHome size={20} className='mr-2 text-white ' />
                                    <span>{endereco?.nomeDestinatario || ""}</span>
                                </div>

                                <div className='mt-2'>
                                    <span>{endereco?.logradouro || ""}, Rua {endereco?.rua || ""}</span>
                                </div>

                                <div>
                                    <span>{endereco?.cidade || ""}-{endereco?.estado || ""}</span>
                                </div>

                                <div className='mt-2'>
                                    <span>CEP {endereco?.cep || ""}</span>
                                </div>

                                <div className='mt-2'>
                                    <span>{endereco?.complemento || ""}</span>
                                </div>

                                <div>
                                    <span>Endereço {endereco?.tipoEndereco || ""} </span>
                                </div>
                            </div>

                        </div>
                        <div>

                            <Menu as="div">
                                <MenuButton className="inline-flex justify-center items-center">
                                    <IconButton>
                                        <MoreVertIcon />
                                    </IconButton>
                                </MenuButton>


                                {/* Menu Items */}
                                <MenuItems transition modal={false} anchor="bottom start" className="absolute text-white right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1  ring-black ring-opacity-5 z-10 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
                                    <div className="py-1">
                                        <MenuItem>
                                            {({ focus }) => (
                                                <Link
                                                    to={`/cadastro-endereco/${endereco?.id}`}
                                                    className={`block px-4 py-2 text-sm ${focus ? 'bg-black' : 'text-gray-700'}`}
                                                >
                                                    Editar
                                                </Link>
                                            )}
                                        </MenuItem>
                                        {/* opens dialog */}
                                        <MenuItem>
                                            {({ focus }) => (
                                                <div>
                                                    <Link
                                                        to={""}
                                                        onClick={handleClickOpen}
                                                        className={`block px-4 py-2 text-sm ${focus ? 'bg-black' : 'text-gray-700'}`}
                                                    >
                                                        Excluir
                                                    </Link>

                                                </div>
                                            )}
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </Menu>
                            {/* abre dialog para confirmar a exclusão do endereço */}
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
                                            Tem certeza que deseja excluir esse endereço?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose}>Não</Button>
                                        <Button onClick={() => handleExcluir(endereco?.id)} autoFocus>
                                            Sim
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </React.Fragment>
                        </div>
                    </div>
                ))}

                <div className='mt-5 flex justify-between'>
                    <div>
                        <Link to="/cart" className='bg-customGrayHover text-white text-center py-2 px-4 rounded-full hover:bg-gray-500 w-56'>Voltar</Link>
                    </div>
                    {/* { */}
                    {/* checkboxValue && */}
                    <div>
                        <Link

                            to=""
                            onClick={(e) => (incluirEndereco(e))}
                            className='bg-customGrayHover text-white text-center py-2 px-4 rounded-full hover:bg-gray-500 w-56'>
                            Próximo
                        </Link>
                    </div>
                    {/* } */}


                </div>


            </div>



        </div >
    )
}

export default EscolhaEnderecoEntrega