import React, { useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { HomeIcon } from '@heroicons/react/16/solid';
import { BiHome } from 'react-icons/bi';
import { FaHome, FaUserCircle } from 'react-icons/fa';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyProfile = () => {

    const idUser = localStorage.getItem("idUser");
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        if (idUser) {
            axios.get('http://localhost:3000/users/' + idUser)
                .then(function (response) {
                    setUserData(response.data)
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    }, [])

    useEffect(() => {
        console.log(userData);
    }, [userData])

    return (
        <div>
            <h1 className="flex justify-center text-3xl font-bold text-customWhite">Welcome, {userData?.nomeReal || "User"}!</h1>

            <h2 className='text-2xl font-bold'>Dados do Usuário</h2>
            <div className='mt-2 flex w-1/2 justify-between bg-customGrayHover rounded-md text-sm'>

                <div className='py-3 pl-2'>
                    <div className='flex items-center'>
                        <FaUserCircle size={20} className='mr-2 text-white ' />
                        <span>{userData?.nomeUsuario || ""}</span>
                    </div>

                    <div className='mt-2'>
                        <span>{userData?.nomeReal || ""} - {userData?.telefone || ""}</span>
                    </div>

                    <div>
                        <span>{userData?.dto || ""}</span>
                    </div>



                    <div className='mt-2'>
                        <span>{userData?.genero || ""}</span>
                    </div>

                    <div className='mt-2'>
                        <span>{userData?.email || ""}</span>
                    </div>

                    <div>
                        <span>Preferências de compras: Mouse, Teclado, Monitor  </span>
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
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={`block px-4 py-2 text-sm ${active ? 'bg-black' : 'text-gray-700'}`}
                                        >
                                            Editar
                                        </a>
                                    )}
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </div>

            </div>

            <h2 className='text-2xl font-bold mt-5'>Endereço de Entrega</h2>
            <div className='mt-2 flex w-1/2 justify-between bg-customGrayHover rounded-md text-sm'>

                <div className='py-3 pl-2'>
                    <div className='flex items-center'>
                        <FaHome size={20} className='mr-2 text-white ' />
                        <span>Reinaldo Alves</span>
                    </div>

                    <div className='mt-2'>
                        <span>Setor Pedro Ludovico, Rua 35</span>
                    </div>

                    <div>
                        <span>Goiânia-Goiás</span>
                    </div>



                    <div className='mt-2'>
                        <span>CEP 74000-000</span>
                    </div>

                    <div className='mt-2'>
                        <span>Ao lado do Bar do Leão</span>
                    </div>

                    <div>
                        <span>Endereço residencial </span>
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
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={`block px-4 py-2 text-sm ${active ? 'bg-black' : 'text-gray-700'}`}
                                        >
                                            Editar
                                        </a>
                                    )}
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </div>

            </div>


        </div >
    )
}

export default MyProfile