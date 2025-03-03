import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { FaHome } from 'react-icons/fa';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EscolhaEnderecoEntrega = () => {

    const id = 1;
    const idUser = localStorage.getItem("idUser");
    const [enderecoData, setEnderecoData] = useState<any>(null);


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
                                        <Link
                                            to={`/cadastro-endereco/${id}`}
                                            className={`block px-4 py-2 text-sm ${active ? 'bg-black' : 'text-gray-700'}`}
                                        >
                                            Editar
                                        </Link>
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

export default EscolhaEnderecoEntrega