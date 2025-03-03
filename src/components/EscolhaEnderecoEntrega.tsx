import React, { useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { FaHome } from 'react-icons/fa';
import { Button, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';


const EscolhaEnderecoEntrega = () => {

    const id = 1;
    const idUser = localStorage.getItem("idUser");
    const [enderecoData, setEnderecoData] = useState<any>(null);

    const [open, setOpen] = React.useState(false);

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

        console.log("dsadasdas");
        console.log(enderecoData);
    }, [])


    return (
        <div>
            <h1 className="flex justify-start text-3xl font-bold text-customWhite ">
                Escolha a forma de entrega
            </h1>

            <div>
                {enderecoData && enderecoData.map((endereco: any, index: any) => (
                    <div key={index} className='mt-2 flex w-1/2 justify-between bg-customGrayHover rounded-md text-sm'>
                        <div className='py-3 px-2 flex'>
                            <div className="inline-flex items-center">
                                <label className="flex items-center cursor-pointer relative" htmlFor="check-2">
                                    <input type="checkbox"
                                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                                        id="check-2" />
                                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                </label>
                            </div>


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
            </div>

        </div >
    )
}

export default EscolhaEnderecoEntrega