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
                        <div className='py-3 pl-2'>
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
                                        <Button >Não</Button>
                                        <Button autoFocus>
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